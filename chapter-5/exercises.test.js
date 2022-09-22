import { flatten, loop } from "./exercises";

describe("chapter 4 exercises", () => {
    describe("exercise one", () => {
        describe("flatten", () => {
            it("flattens an array of arrays into a single array", () => {
                const inputArray = [[1, 2, 3], [4, 5], [6, 7, 8, 54], [123]];
                expect(flatten(inputArray)).toEqual([1,2,3,4,5,6,7,8,54,123]);
            });
        });
    });


    describe("exercise two", () => {
        describe("loop", () => {
            it("provides looping functionality", () => {
                const consoleSpy = jest.spyOn(console, 'log');
                const test = (n) => n > 0;
                const update = (n) => n - 1;
                loop(3, test, update, console.log)
                expect(consoleSpy).toHaveBeenCalledWith(3);
                expect(consoleSpy).toHaveBeenCalledWith(2);
                expect(consoleSpy).toHaveBeenCalledWith(1);
            });
        });
    });
});