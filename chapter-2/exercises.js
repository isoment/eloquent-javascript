/*
    Looping a Triangle
    Write a loop that makes seven calls to console.log to output the following
    triangle:

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
const loopTriangle = () => {
    for (let i = 1; i < 8; i++) {
        const char = '#';
        console.log(char.repeat(i));
    }
}
// loopTriangle();


/*
    FizzBuzz
    Write a program that uses console.log to print all the numbers from 1 to 100,
    with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
    number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
    When you have that working, modify your program to print "FizzBuzz"
    for numbers that are divisible by both 3 and 5 (and still print "Fizz" or
    "Buzz" for numbers divisible by only one of those).
*/
const fizzBuzzToOneHundred = () => {
    let i = 1;
    while (i <= 100) {
        console.log(fizzBuzz(i));
        i++;
    }
}
const fizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number
    }
}
// fizzBuzzToOneHundred();


/*
    Write a program that creates a string that represents an 8×8 grid, using new-
    line characters to separate lines. At each position of the grid there is either a
    space or a # character. The characters should form a chessboard.
    Passing this string to console.log should show something like this:

     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #

    When you have a program that generates this pattern, define a binding
    size = 8 and change the program so that it works for any size, outputting a
    grid of the given width and height.
*/
const chessBoard = (size) => {
    let chessBoard = "";
    let oddLine = true;

    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            if (oddLine) {
                if (j % 2 !== 0) {
                    chessBoard += " ";
                } else {
                    chessBoard += "#";
                }
            } else {
                if (j % 2 !== 0) {
                    chessBoard += "#";
                } else {
                    chessBoard += " ";
                }
            }
        }
        oddLine = !oddLine;
        chessBoard += '\n';
    }

    return chessBoard;
}
// console.log(chessBoard(8));

export { loopTriangle, fizzBuzzToOneHundred, fizzBuzz, chessBoard };