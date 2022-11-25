import { carAndCat, popAndProp, matchFerrWords } from "./exercises";

describe("chapter 9 exercises", () => {
    describe("exercise one", () => {
        describe("carAndCat", () => {
            it("matches a string containing the word car or cat", () => {
                expect(carAndCat('car123')).toBe(true);
                expect(carAndCat('DJ2*car#rofd')).toBe(true);
                expect(carAndCat('DJ2*car#rofd')).toBe(true);
                expect(carAndCat('DJ2*car#rofdcat')).toBe(true);
                expect(carAndCat('   car  car ')).toBe(true);
                expect(carAndCat('DJ2*ca1ca')).toBe(false);
                expect(carAndCat('*#c*@a&8rca')).toBe(false);
                expect(carAndCat('cat123')).toBe(true);
                expect(carAndCat('car437389cat')).toBe(true);
                expect(carAndCat('84(@843')).toBe(false);
            });
        });

        describe("popAndProp", () => {
            it("matches a string containing pop or prop", () => {
                expect(popAndProp('pop8273')).toBe(true);
                expect(popAndProp('DJ28&*prop')).toBe(true);
                expect(popAndProp('EEEJpopAAAA')).toBe(true);
                expect(popAndProp('    pop    prop')).toBe(true);
                expect(popAndProp('prrop')).toBe(false);
                expect(popAndProp('poop')).toBe(false);
                expect(popAndProp('proop')).toBe(false);
            })
        });

        describe("matchFerrWords", () => {
            it("matches a string containing ferret ferry or ferrari", () => {
                expect(matchFerrWords('ferret')).toBe(true);
                expect(matchFerrWords('M9ferret72')).toBe(true);
                expect(matchFerrWords('ferretferryferrari')).toBe(true);
                expect(matchFerrWords('11ferrari99')).toBe(true);
                expect(matchFerrWords('ferretOne')).toBe(true);
                expect(matchFerrWords('ferre')).toBe(false);
                expect(matchFerrWords('ferriu')).toBe(false);
                expect(matchFerrWords('97843fer92')).toBe(false);
                expect(matchFerrWords('ferrry')).toBe(false);
                expect(matchFerrWords('ferrret')).toBe(false);
            });
        });
    });
});