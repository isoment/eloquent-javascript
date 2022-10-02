import Vec from "./exercises";

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
                })
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
});