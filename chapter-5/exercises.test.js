import { flatten, loop, everyLoop, everySome, characterScript, writingDirection } from "./exercises";
import { SCRIPTS } from "./scripts";

describe("chapter 5 exercises", () => {
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

    describe("exercise three", () => {
        describe("everyLoop", () => {
            it("returns true if all the array elements satisfy the test", () => {
                const array = [1,2,3,4,5,6];
                const test = (n) => n < 10;
                expect(everyLoop(array, test)).toBe(true);
            });

            it("returns false when not all of the array elements satisfy the test", () => {
                const array = [1,29,3,4,55,6];
                const test = (n) => n < 10;
                expect(everyLoop(array, test)).toBe(false);
            });
        });

        describe("everySome", () => {
            it("returns true if all the array elements satisfy the test", () => {
                const array = [1,2,3,4,5,6];
                const test = (n) => n < 10;
                expect(everySome(array, test)).toBe(true);
            });

            it("returns false when not all of the array elements satisfy the test", () => {
                const array = [1,29,3,4,55,6];
                const test = (n) => n < 10;
                expect(everySome(array, test)).toBe(false);
            });
        });
    });

    describe("exercise four", () => {
        describe("writingDirection", () => {
            it("returns ltr when the whole script has a left to right direction", () => {
                const scriptString = "StringПиьмдиь";
                expect(writingDirection(scriptString)).toBe('ltr');
            });

            it("returns rtl when the whole script has a right to left direction", () => {
                const scriptString = "هذه سلسلةیک آزمایش";
                expect(writingDirection(scriptString)).toBe('rtl');
            });

            it("returns ttb when the whole script has a top to bottom direction", () => {
                const scriptString = "ꡤ";
                expect(writingDirection(scriptString)).toBe('ttb');
            });

            it("returns ltr when the dominant direction is left to right", () => {
                const scriptString = "letꡤ";
                expect(writingDirection(scriptString)).toBe('ltr');
            });

            it("returns rtl when the dominant direction is right to left", () => {
                const scriptString = "strسلسلة";
                expect(writingDirection(scriptString)).toBe('rtl');
            });

            it("returns ttb when the dominant direction is top to bottom", () => {
                const scriptString = "tbꡤꡤꡤ";
                expect(writingDirection(scriptString)).toBe('ttb');
            });
        });

        describe("characterScript", () => {
            it("returns the script for the given character code", () => {
                const scripts = [
                    {
                        name: 'FakeScript1',
                        ranges: [[100, 200], [400, 500]],
                        direction: 'ltr'
                    },
                    {
                        name: 'FakeScript3',
                        ranges: [[800, 850], [900, 920]],
                        direction: 'ltr'
                    },
                ]

                expect(characterScript(scripts, 109)).toEqual({
                    name: 'FakeScript1',
                    ranges: [[100, 200], [400, 500]],
                    direction: 'ltr'
                });
            });
        })
    });
});