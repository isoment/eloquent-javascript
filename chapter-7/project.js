// The roads in this array connect places in the town.
var roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

/*
  We can take the above array and convert it into a graph, our road graph will be an object,
  the key of each entry will be the place name and the value will be an array of all the other
  places that are connected to it.

  We loop over the array of places above and split each string by the '-' resulting in a 'from'
  and 'to' representing the connection. If the 'from' does not exist as a key on the graph 
  object already we will add it and set the value as an array containing the 'to' place. If the
  'from' place already exists as a key we simply push the 'to' place to it's array of places.
*/
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
const roadGraph = buildGraph(roads);
console.log('Road Graph', roadGraph);

/*
  The VillageState constructor takes a place which is the delivery robots current location
  and the parcels which is an array of objects. Each object has the location of the parcel (place)
  as well as the destination address.

  The move method takes a destination. It checks if there is a road going from the robots current
  place to the destination, if not it will return the old state. If there is a road the robot is able
  to deliver the package and a new state will be created, the new place passed into the constructor
  will be the robots current destination and the collection of parcels is created anew. Parcels at the
  robots current location need to be moved to the new place (map) and parcels that are addressed to the
  new place need to be delivered (filter).

  The result of the move method is a new village state being created with a new place where the robot
  is and collection of parcels but the old state remains unchanged.
*/
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) {
          return p;
        } 
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);

      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");
console.log('First VillageState', first);
console.log('Next VillageState', next);

/*
  This function runs our robot, it takes a VillageState and
  some type of robot. The robot accepts a state and memory, in the case
  of the randomRobot it doesn't do anything with the memory.

  A loop is executed till there are no more parcels left in the state.
*/
function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

/*
  A method to pick an element at random from a given array
*/
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

/*
  This robot will simply select a random direction to take at
  every turn.
*/
function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

/*
  Add's a static method to the VillageState so we can create a new
  state with some parcels. We are lopping over the parcel count and creating
  new parcel objects with randomly chosen place locations and destination
  addresses. We create a new VillageState with the robot starting at the post office.
*/
VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

// runRobot(VillageState.random(), randomRobot);

/*
  A predefined route that covers the whole village
*/
const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

/*
  This robot runs the route we set above.
*/
function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

// runRobot(VillageState.random(), routeRobot, []);

/*
  This function finds the shortest route when given two points on the graph.
  using BFS. The path the robot takes is the first one to reach the address
  location from the start node.

  The function keeps a work list array of places to explore next, each entry
  has a route array which is the route that got us there. It initializes with
  the from node and an empty route array. We loop over the work list to get the
  places we should explore next.
*/
function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    // This is the next item in the work list
    let {at, route} = work[i];
    // Starting at the 'at' node we explore the places that can be reached from it
    for (let place of graph[at]) {
      // If one of the places is the delivery location
      if (place == to) {
        return route.concat(place);
      }
      // If this node isn't in the work list add it
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

/*
  This robot uses the route finding algorithm above to try to find the
  shortest route between the node where the parcel is and it's destination node.
*/
function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

runRobot(VillageState.random(), goalOrientedRobot, []);