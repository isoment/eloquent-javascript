/*
    Chapter 2 introduced the standard function Math.min, which returns its small-
    est argument (see “Return Values” on page 27). We can build something
    like that now. Write a function min that takes two arguments and returns
    their minimum.
*/
const minimum = (numOne, numTwo) => {
    if (numOne === numTwo) {
        return numOne;
    }
    if (numOne < numTwo) {
        return numOne;
    }
    return numTwo;
}
console.log(minimum(54, 65));


/*
    We’ve seen that % (the remainder operator) can be used to test whether
    a number is even or odd by using % 2 to see whether it’s divisible by two.
    Here’s another way to define whether a positive whole number is even
    or odd:

    - Zero is even.
    - One is odd.
    - For any other number N, its evenness is the same as N − 2.

    Define a recursive function isEven corresponding to this description.
    The function should accept a single parameter (a positive, whole number)
    and return a Boolean.
    Test it on 50 and 75. See how it behaves on −1. Why? Can you think of a
    way to fix this?
*/
const isEven = (number) => {
    if (number < 0) {
        number *= -1;
    }
    if (number === 0) {
        return true;
    }
    if (number === 1) {
        return false;
    }
    return isEven(number - 2);
}
console.log(isEven(849));


/*
    You can get the Nth character, or letter, from a string by writing "string"[N].
    The returned value will be a string containing only one character (for
    example, "b"). The first character has position 0, which causes the last one
    to be found at position string.length - 1. In other words, a two-character
    string has length 2, and its characters have positions 0 and 1.
    Write a function countBs that takes a string as its only argument and
    returns a number that indicates how many uppercase “B” characters there
    are in the string.

    Next, write a function called countChar that behaves like countBs, except
    it takes a second argument that indicates the character that is to be counted
    (rather than counting only uppercase “B” characters). Rewrite countBs to
    make use of this new function.
*/
// const countingBs = (string) => {
//     let countB = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === 'B') {
//             countB++;
//         }
//     }
//     return countB;
// }
// console.log(countingBs('kBdiBkBdBkdbbbnBBkdaBb'));

const countChar = (string, searchChar) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === searchChar) {
            count++;
        }
    }
    return count;
}

const countingBs = (string) => {
    return `There are ${countChar(string, 'B')} B's in '${string}'`;
}

console.log(countingBs('jVBBHdiBjdBbIaoBksBBNBBoBLbOi'));