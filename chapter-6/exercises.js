/*
    Write a class Vec that represents a vector in two-dimensional space. It takes
    x and y parameters (numbers), which it should save to properties of the
    same name.

    Give the Vec prototype two methods, plus and minus, that take another
    vector as a parameter and return a new vector that has the sum or difference
    of the two vectors’ (this and the parameter) x and y values.

    Add a getter property length to the prototype that computes the length
    of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/
export class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        let x = this.x + vec.x;
        let y = this.y + vec.y;
        return new Vec(x, y);
    }

    minus(vec) {
        let x = this.x - vec.x;
        let y = this.y - vec.y;
        return new Vec(x, y);
    }

    get length() {
        let x = Math.pow(this.x, 2);
        let y = Math.pow(this.y, 2);
        return Math.sqrt(x + y);
    }
}
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(4, 3).length);


/*
    The standard JavaScript environment provides another data structure called
    Set. Like an instance of Map, a set holds a collection of values. Unlike Map,
    it does not associate other values with those—it just tracks which values
    are part of the set. A value can be part of a set only once—adding it again
    doesn’t have any effect.

    Write a class called Group (since Set is already taken). Like Set, it has add,
    delete, and has methods. Its constructor creates an empty group, add adds a
    value to the group (but only if it isn’t already a member), delete removes its
    argument from the group (if it was a member), and has returns a Boolean
    value indicating whether its argument is a member of the group.

    Use the === operator, or something equivalent such as indexOf, to deter-
    mine whether two values are the same.

    Give the class a static from method that takes an iterable object as argument
    and creates a group that contains all the values produced by iterating
    over it.
*/
export class Group {
    constructor(values) {
        this.group = values;
    }

    add(element) {
        if (!this.group.includes(element)) {
            this.group.push(element);
            return true;
        }
        return false;
    }

    delete(element) {
        for (let i = 0; i < this.group.length; i++) {
            if (this.group[i] === element) {
                this.group.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    has(element) {
        return this.group.includes(element) ? true : false;
    }

    list() {
        return this.group;
    }

    static from(list) {
        let group = [];
        list.forEach(element => {
            if (!group.includes(element)) {
                group.push(element);
            }
        });
        return new this(group);
    }
}
let group = Group.from([5,87,43,5,45,12,54,84,233]);
console.log(group.list());
console.log(group.has(45));
console.log(group.add(76));
console.log(group.list());
console.log(group.add(76));
console.log(group.list());
console.log(group.delete(76));
console.log(group.list());
console.log(group.delete(12));
console.log(group.list());