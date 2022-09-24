import { SCRIPTS } from "./scripts.js";

/*
    Use the reduce method in combination with the concat method to “flatten”
    an array of arrays into a single array that has all the elements of the original
    arrays.
*/
const flatten = (array) => {
    return array.reduce((a,b) => a.concat(b));
}
// console.log(flatten([[1,2,3], [4,5], [6,7,8]]));


/*
    Write a higher-order function loop that provides something like a for loop
    statement. It takes a value, a test function, an update function, and a body
    function. Each iteration, it first runs the test function on the current loop
    value and stops if that returns false. Then it calls the body function, giving it
    the current value. Finally, it calls the update function to create a new value
    and starts from the beginning.

    When defining the function, you can use a regular loop to do the actual
    looping.
*/
const loop = (value, test, update, body) => {
    for (let i = value; test(i); i = update(i)) {
        body(i);
    }
}
// loop(3, (n) => n > 0, (n) => n - 1, console.log);


/*
    Analogous to the some method, arrays also have an every method. This one
    returns true when the given function returns true for every element in the
    array. In a way, some is a version of the || operator that acts on arrays, and
    every is like the && operator.

    Implement every as a function that takes an array and a predicate function 
    as parameters. Write two versions, one using a loop and one using the some method.
*/
const everyLoop = (array, test) => {
    for (let i = 0; i < array.length; i++) {
        if (!test(array[i])) {
            return false;
        }
    }
    return true;
}
// console.log(everyLoop([1,2,3,43], (n) => n < 10));

const everySome = (array, test) => {
    return !array.some(element => !test(element));
}
// console.log(everySome([1,2,3,4,5,66,7], (n) => n < 10));


/*
    Write a function that computes the dominant writing direction in a string of
    text. Remember that each script object has a direction property that can be
    "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

    The dominant direction is the direction of a majority of the characters
    that have a script associated with them. The characterScript and countBy 
    functions defined earlier in the chapter are probably useful here.
*/
const characterScript = (scripts, code) => {
    for (let script of scripts) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

const writingDirection = (string) => {
    let occurrences = {'ltr': 0, 'rtl': 0, 'ttb': 0};

    for (let char of string) {
        const script = characterScript(SCRIPTS, char.codePointAt(0));
        if (script !== null) {
            if (script.direction === 'ltr') occurrences['ltr']++;
            if (script.direction === 'rtl') occurrences['rtl']++;
            if (script.direction === 'ttb') occurrences['ttb']++;
        }
    }

    return Object.keys(occurrences).reduce((a,b) => {
        return occurrences[a] > occurrences[b] ? a : b;
    });
}
console.log(writingDirection("俄斯的狗fjمساءالخير"));


export { flatten, loop, everyLoop, everySome, characterScript, writingDirection };