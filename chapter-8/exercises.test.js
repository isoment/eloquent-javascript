import { reliableMultiply } from "./exercises";

describe("chapter 8 exercises", () => {
    describe("exercise one", () => {
        describe("reliableMultiply", () => {
            it("returns correct product of the two inputs", () => {
                const resultOne = reliableMultiply(2, 2);
                expect(resultOne).toBe(4);

                const resultTwo = reliableMultiply(10, 10);
                expect(resultTwo).toBe(100);

                const resultThree = reliableMultiply(100, 100);
                expect(resultThree).toBe(10000);
            });
        });
    });
});