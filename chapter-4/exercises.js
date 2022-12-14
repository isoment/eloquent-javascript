/*
    Write a range function that takes two arguments, start and end, and
    returns an array containing all the numbers from start up to (and includ-
    ing) end.

    Next, write a sum function that takes an array of numbers and returns the
    sum of these numbers. Run the example program and see whether it does
    indeed return 55.

    As a bonus assignment, modify your range function to take an optional
    third argument that indicates the “step” value used when building the array.
    If no step is given, the elements go up by increments of one, corresponding
    to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5,
    7, 9]. Make sure it also works with negative step values so that range(5, 2, -1)
    produces [5, 4, 3, 2].
*/
const range = (start, end) => {
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
// console.log(range(2, 8));

const sum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
// console.log(sum(range(1, 10)));

const rangeWithStep = (start, end, step = 1) => {
    const array = [];

    if (start > end) {
        for (let i = start; i >= end; i -= step) {
            array.push(i);
        }
    } else {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    }

    return array;
}
// console.log(rangeWithStep(2, -10, 2));


/*
    Write a function arrayToList that builds up a list structure like the one
    shown when given [1, 2, 3] as argument. Also write a listToArray function
    that produces an array from a list. Then add a helper function prepend,
    which takes an element and a list and creates a new list that adds the element 
    to the front of the input list, and nth, which takes a list and a number
    and returns the element at the given position in the list (with zero referring
    to the first element) or undefined when there is no such element.
    If you haven’t already, also write a recursive version of nth.
*/
const arrayToList = (array) => {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { 
            value: array[i],
            rest: list
        }
    }
    return list;
}
// console.log(arrayToList([1,2,3,4]));

const listToArray = (list) => {
    let array = [];
    let current = list;
    while (current != null) {
        array.push(current.value);
        current = current.rest;
    }
    return array;
}
// console.log(listToArray(arrayToList([1,2,3])));

const prepend = (element, list) => {
    const newList = {
        value: element,
        rest: list
    }
    return newList;
}
// console.log(prepend(8, arrayToList([1,2,3])));

const nth = (list, position) => {
    let index = 0;
    let current = list;
    let value = undefined;

    while (current != null) {
        if (index == position) {
            value = current.value;
            break;
        } else {
            current = current.rest;
            index++;
        }
    }

    return value;
}
// console.log(nth(arrayToList([20,25,30]), 3));

const nthRecursive = (list, currentIndex, seekIndex) => {
    if (currentIndex == seekIndex) {
        return list.value;
    }

    if (list.rest == null) {
        return undefined;
    }

    return nthRecursive(list.rest, currentIndex + 1, seekIndex);
} 
// console.log(nthRecursive(arrayToList([20,25,30]), 0, 7));


/*
    The == operator compares objects by identity. But sometimes you’d prefer to
    compare the values of their actual properties.

    Write a function deepEqual that takes two values and returns true only if
    they are the same value or are objects with the same properties, where the
    values of the properties are equal when compared with a recursive call to
    deepEqual.

    To find out whether values should be compared directly (use the ===
    operator for that) or have their properties compared, you can use the typeof
    operator. If it produces "object" for both values, you should do a deep 
    comparison. But you have to take one silly exception into account: because of a
    historical accident, typeof null also produces "object".
    The Object.keys function will be useful when you need to go over the
    properties of objects to compare them.
*/
const deepEqualRecursive = (value1, value2) => {
    if (value1 === null || value2 === null) {
        return false;
    }

    if (value1 === value2) {
        return true;
    }

    let keysA = Object.keys(value1);
    let keysB = Object.keys(value2);
  
    if (keysA.length !== keysB.length) {
        return false;
    }
  
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqualRecursive(value1[key], value2[key])) {
            return false;
        }
    }

    if (typeof value1 !== "object" || typeof value1 !== "object") {
        return false;
    }
  
    return true;
}
// console.log(deepEqualRecursive({ a: { b: 54, c: { h: 84 } } }, { a: { b: 54, c: { h: 84 } } }));

export { range, sum, rangeWithStep, arrayToList, listToArray, prepend, nth, nthRecursive, deepEqualRecursive };