import { loopTriangle, fizzBuzzToOneHundred, fizzBuzz, chessBoard } from "./exercises";

describe("chapter 2 exercises", () => {
    afterEach(() => {    
        jest.clearAllMocks();
    });

    describe("exercise one", () => {
        describe("loopTriangle", () => {
            it("a triangle is displayed with a base of 7 chars and a tip of 1", () => {
                const consoleSpy = jest.spyOn(console, 'log');
                loopTriangle();
                expect(consoleSpy).toHaveBeenCalledWith('#');
                expect(consoleSpy).toHaveBeenCalledWith('##');
                expect(consoleSpy).toHaveBeenCalledWith('###');
                expect(consoleSpy).toHaveBeenCalledWith('####');
                expect(consoleSpy).toHaveBeenCalledWith('#####');
                expect(consoleSpy).toHaveBeenCalledWith('######');
                expect(consoleSpy).toHaveBeenCalledWith('#######');
            });
        });
    });

    describe("exercise two", () => {
        describe("fizzBuzzToOneHundred", () => {
            it("outputs one hundred fizz buzz results", () => {
                const consoleSpy = jest.spyOn(console, 'log');
                fizzBuzzToOneHundred();
                expect(consoleSpy).toHaveBeenCalledTimes(100);
            });
        });
    
        describe("fizzBuzz", () => {
            it("returns Fizz if the number is divisible by 3", () => {
                expect(fizzBuzz(9)).toBe('Fizz');
                expect(fizzBuzz(21)).toBe('Fizz');
                expect(fizzBuzz(54)).toBe('Fizz');
                expect(fizzBuzz(78)).toBe('Fizz');
            });
    
            it("returns Buzz if the number is divisible by 5", () => {
                expect(fizzBuzz(5)).toBe('Buzz');
                expect(fizzBuzz(20)).toBe('Buzz');
                expect(fizzBuzz(40)).toBe('Buzz');
                expect(fizzBuzz(55)).toBe('Buzz');
            });
    
            it("returns FizzBuzz if the number is divisible by 3 and 5", () => {
                expect(fizzBuzz(15)).toBe('FizzBuzz');
                expect(fizzBuzz(30)).toBe('FizzBuzz');
                expect(fizzBuzz(45)).toBe('FizzBuzz');
                expect(fizzBuzz(75)).toBe('FizzBuzz');
            });
    
            it("returns the number when not divisible by 3 or 5", () => {
                expect(fizzBuzz(1)).toBe(1);
                expect(fizzBuzz(31)).toBe(31);
                expect(fizzBuzz(52)).toBe(52);
                expect(fizzBuzz(88)).toBe(88);
            });
        });
    });

    describe("exercise three", () => {
        describe("chessBoard", () => {
            it("outputs a string with the correct chessboard pattern for size 4", () => {
                const chessBoardString = chessBoard(4);
                expect(chessBoardString).toBe(' # #\n# # \n # #\n# # \n');
            });

            it("outputs a string with the correct chessboard pattern for size 8", () => {
                const chessBoardString = chessBoard(8);
                expect(chessBoardString).toBe(' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n');
            });
        });
    });
});