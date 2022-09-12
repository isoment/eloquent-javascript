import { 
    range, 
    sum, 
    rangeWithStep, 
    arrayToList, 
    listToArray, 
    prepend, 
    nth, 
    nthRecursive 
} from "./exercises";

describe("chapter 4 exercises", () => {
    describe("exercise one", () => {
        describe("range", () => {
            it("returns an array of numbers from start up to and including end", () => {
                const array = range(2, 8);
                expect(array).toEqual([2,3,4,5,6,7,8]);
            });
        });

        describe("sum", () => {
            it("returns the sum of all the numbers in that parameter array", () => {
                const array = [1,2,3,4,5,6,7,8,9,10];
                expect(sum(array)).toEqual(55);
            })
        });

        describe("rangeWithStep", () => {
            it("returns an array of numbers from start to end in the given step", () => {
                const array = rangeWithStep(2, 12, 2);
                expect(array).toEqual([2,4,6,8,10,12]);
                const arrayTwo = rangeWithStep(0, 40, 10);
                expect(arrayTwo).toEqual([0,10,20,30,40]);
                const arrayThree = rangeWithStep(14, 67, 7);
                expect(arrayThree).toEqual([14,21,28,35,42,49,56,63]);
            });

            it("increments by one if no step parameter is provided", () => {
                const array = rangeWithStep(2, 12);
                expect(array).toEqual([2,3,4,5,6,7,8,9,10,11,12]);
            });

            it("gives a correct range when negative numbers are included", () => {
                const array = rangeWithStep(2, -5);
                expect(array).toEqual([2,1,0,-1,-2,-3,-4,-5]);
                const arrayTwo = rangeWithStep(4, -10, 2);
                expect(arrayTwo).toEqual([4,2,0,-2,-4,-6,-8,-10]);
            })
        });
    });

    describe("exercise two", () => {
        let listFactory = () => ({
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: {
                        value: 4,
                        rest: null
                    }
                }
            }
        });

        describe("arrayToList", () => {
            it("creates a list from a given array", () => {
                const newList = listFactory();
                expect(arrayToList([1,2,3,4])).toEqual(newList);
            });
        });

        describe("listToArray", () => {
            it("returns an array of values from a list", () => {
                const newList = listFactory();
                expect(listToArray(newList)).toEqual([1,2,3,4]);
            });
        });

        describe("prepend", () => {
            it("prepends a new list node to the existing list provided", () => {
                const existingList = listFactory();
                const newList = {
                    value: 8,
                    rest: {
                        value: 1,
                        rest: {
                            value: 2,
                            rest: {
                                value: 3,
                                rest: {
                                    value: 4,
                                    rest: null
                                }
                            }
                        }
                    }
                }
                expect(prepend(8, existingList)).toEqual(newList);
            });
        });

        describe("nth", () => {
            const newList = () => ({
                value: 84,
                rest: {
                    value: 154,
                    rest: {
                        value: 261,
                        rest: {
                            value: 343,
                            rest: {
                                value: 497,
                                rest: null
                            }
                        }
                    }
                }
            });

            it("returns the value of the list node at the nth index specified", () => {
                const list = newList();
                expect(nth(list, 2)).toBe(261);
            });

            it("returns undefined if the index does not exist", () => {
                const list = newList();
                expect(nth(list, 12)).toBe(undefined);
            });
        });

        describe("nthRecursive", () => {
            const newList = () => ({
                value: 84,
                rest: {
                    value: 154,
                    rest: {
                        value: 261,
                        rest: {
                            value: 343,
                            rest: {
                                value: 497,
                                rest: null
                            }
                        }
                    }
                }
            });
            it("returns the value of the list node at the nth index specified", () => {
                const list = newList()
                expect(nthRecursive(list, 0, 2)).toBe(261);
            });

            it("returns undefined if the index does not exist", () => {
                const list = newList();
                expect(nthRecursive(list, 0, 10)).toBe(undefined);
            })
        });
    });
});