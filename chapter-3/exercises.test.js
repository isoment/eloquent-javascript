import { minimum, isEven, countChar, countingBs } from "./exercises";

describe("chapter 3 exercises", () => {
    afterEach(() => {    
        jest.clearAllMocks();
    });

    describe("exercise one", () => {
        describe("minimum", () => {
            it("returns the minimum value of the two numbers provided", () => {
                expect(minimum(5, 87)).toBe(5);
                expect(minimum(54, 13)).toBe(13);
                expect(minimum(8, 8)).toBe(8);
                expect(minimum(-54, 154)).toBe(-54);
                expect(minimum(0, 0)).toBe(0);
            });
        });
    });

    describe("exercise two", () => {
        describe("isEven", () => {
            it("returns true when the number is even", () => {
                expect(isEven(10)).toBe(true);
                expect(isEven(48)).toBe(true);
                expect(isEven(2822)).toBe(true);
            });

            it("returns false when the number is odd", () => {
                expect(isEven(1)).toBe(false);
                expect(isEven(79)).toBe(false);
                expect(isEven(371)).toBe(false);
            });

            it("works with negative numbers", () => {
                expect(isEven(-10)).toBe(true);
                expect(isEven(-91)).toBe(false);
                expect(isEven(-1111)).toBe(false);
            })
        });
    });

    describe("exercise three", () => {
        describe("countingBs", () => {
            it("displays the correct count of B and the original string", () => {
                const countBs = countingBs('tcHnBo2*39LpMB0dxbSB');
                expect(countBs).toEqual(`B occurs 3 times in 'tcHnBo2*39LpMB0dxbSB'`);
            });
        });

        describe("countChar", () => {
            it("returns the count of the occurrences of a character in a string", () => {
                const charCount = countChar('lK&Edhj*HW#JHJ@#@GSWH#90!@', '#');
                expect(charCount).toEqual(3);
            });
        });
    });
});