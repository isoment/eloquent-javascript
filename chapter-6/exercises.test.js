import { Vec, Group } from "./exercises";

describe("chapter 6 exercises", () => {
    describe("exercise one", () => {
        describe("Vec class", () => {
            it("sets the x and y points when passed into the constructor", () => {
                const vec = new Vec(12, 6);
                expect(vec.x).toBe(12);
                expect(vec.y).toBe(6);
            });

            describe("plus", () => {
                it("defines plus", () => {
                    const vec = new Vec();
                    expect(typeof vec.plus).toBe("function");
                });

                it("calls the plus method with the given vector as an argument", () => {
                    // Create a new vector
                    const vec = new Vec(1, 2);
                    // Set a spy on the plus method
                    const plusSpy = jest.spyOn(vec, "plus");
                    // The vector we will pass in as a param
                    const paramVec = new Vec(3, 4);
                    vec.plus(paramVec);
                    expect(plusSpy).toHaveBeenCalledWith(paramVec);
                    plusSpy.mockClear();
                });

                it("returns an instance of the Vec class", () => {
                    const vec = new Vec(1, 2);
                    const plusResult = vec.plus(new Vec(3, 4));
                    expect(plusResult).toBeInstanceOf(Vec);
                });

                it("gives the correct values of the new vector", () => {
                    const vec = new Vec(1, 2);
                    const plusResult = vec.plus(new Vec(3, 4));
                    expect(plusResult.x).toBe(4);
                    expect(plusResult.y).toBe(6);
                });
            });

            describe("minus", () => {
                it("defines minus", () => {
                    const vec = new Vec();
                    expect(typeof vec.minus).toBe("function");
                });

                it("calls the minus method with the given vector as an argument", () => {
                    const vec = new Vec(1, 2);
                    const plusSpy = jest.spyOn(vec, "minus");
                    const paramVec = new Vec(2, 3);
                    vec.minus(paramVec);
                    expect(plusSpy).toHaveBeenCalledWith(paramVec);
                    plusSpy.mockClear();
                });

                it("returns an instance of the Vec class", () => {
                    const vec = new Vec(1, 2);
                    const minusResult = vec.minus(new Vec(3, 4));
                    expect(minusResult).toBeInstanceOf(Vec);
                });

                it("gives the correct values of the new vector", () => {
                    const vec = new Vec(5, 6);
                    const minusResult = vec.minus(new Vec(3, 4));
                    expect(minusResult.x).toBe(2);
                    expect(minusResult.y).toBe(2);
                });
            });

            describe("length", () => {
                it("defines length", () => {
                    const vec = new Vec();
                    expect(typeof vec.length).toBe("number");
                });

                it("returns the correct length of the vector", () => {
                    const vec = new Vec(3, 4);
                    expect(vec.length).toBe(5);

                    const vecB = new Vec(21, 23);
                    expect(vecB.length).toBe(31.144823004794873);

                    const vecC = new Vec(-7, -4);
                    expect(vecC.length).toBe(8.06225774829855);
                });
            });
        });
    });

    describe("exercise two and three", () => {
        describe("Group class", () => {
            describe("from", () => {
                it("defines from", () => {
                    expect(typeof Group.from).toBe("function");
                });

                it("returns an instance of the Group class", () => {
                    expect(Group.from([1,2,3,4,5])).toBeInstanceOf(Group);
                });

                it("creates a group of unique values from a given array", () => {
                    const group = Group.from(['a', 'a', 'b', 43, 54, 1, 65, 54]);
                    expect(group.group).toEqual(['a', 'b', 43, 54, 1, 65]);
                });
            });

            describe("list", () => {
                it("defines list", () => {
                    const group = Group.from([1, 2, 3]);
                    expect(typeof group.list).toBe("function");
                });

                it("returns the contents of the group", () => {
                    const group = Group.from([1, 2, 3]);
                    expect(group.list()).toEqual([1, 2, 3]);
                });
            });

            describe("add", () => {
                it("defines add", () => {
                    const group = Group.from([1, 2, 3]);
                    expect(typeof group.add).toBe("function");
                });

                it("adds the element to the group when it does not exist", () => {
                    const group = Group.from([1, 2, 3]);
                    const addedElement = group.add(4);
                    expect(addedElement).toBe(true);
                    expect(group.group).toEqual([1, 2, 3, 4]);
                });

                it("does not add an element when it already exists in the group", () => {
                    const group = Group.from([1, 2, 3, 'a', 'b']);

                    const addedThree = group.add(3);
                    expect(addedThree).toBe(false);
                    expect(group.group).toEqual([1, 2, 3, 'a', 'b']);

                    const addedB = group.add('b');
                    expect(addedB).toBe(false);
                    expect(group.group).toEqual([1, 2, 3, 'a', 'b']);
                });
            });

            describe("delete", () => {
                it("defines delete", () => {
                    const group = Group.from([1, 2, 3]);
                    expect(typeof group.delete).toBe("function");
                });

                it("deletes the element from the group", () => {
                    const group = Group.from([1, 2, 3, 4]);
                    const deletedElement = group.delete(4);
                    expect(deletedElement).toBe(true);
                    expect(group.group).toEqual([1, 2, 3]);
                    const deletedElement2 = group.delete(2);
                    expect(deletedElement2).toBe(true);
                    expect(group.group).toEqual([1, 3]);
                });

                it("returns false if the element to delete does not exist", () => {
                    const group = Group.from(['a', 'b', 1, 3]);
                    const deletedElement = group.delete(4);
                    expect(deletedElement).toBe(false);
                    expect(group.group).toEqual(['a', 'b', 1, 3]);
                });
            });

            describe("has", () => {
                it("defines has", () => {
                    const group = Group.from([1, 2, 3]);
                    expect(typeof group.has).toBe("function");
                });

                it("returns true if the element exists in the group", () => {
                    const group = Group.from([1, 2, 3]);
                    expect(group.has(2)).toBe(true);
                    expect(group.has(3)).toBe(true);
                });

                it("returns false if the element does not exist in the group", () => {
                    const group = Group.from([1, 2, 3]);
                    expect(group.has(24)).toBe(false);
                    expect(group.has('abc')).toBe(false);
                });
            });

            describe("iterator", () => {
                it("is iterable", () => {
                    const consoleSpy = jest.spyOn(console, 'log');
                    const iterable = Group.from([1, 2, 3, 4]);
                    jest.clearAllMocks();
                    for (let value of iterable) {
                        console.log(value);
                    }
                expect(consoleSpy).toHaveBeenCalledWith(1);
                expect(consoleSpy).toHaveBeenCalledWith(2);
                expect(consoleSpy).toHaveBeenCalledWith(3);
                expect(consoleSpy).toHaveBeenCalledWith(4);
                expect(consoleSpy).toHaveBeenCalledTimes(4);
                });
            });
        });
    });
});