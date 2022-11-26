import { 
    carAndCat, popAndProp, matchFerrWords, endingInIOUS, whitespaceChar, 
    wordLongerThanSixLetters, withoutTheLetterE
} from "./exercises";

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

        describe("endingInIOUS", () => {
            it("matched a string containing ious at the end of the string", () => {
                expect(endingInIOUS('ious')).toBe(true);
                expect(endingInIOUS('delicious')).toBe(true);
                expect(endingInIOUS('iiiiiious')).toBe(true);
                expect(endingInIOUS('iousf')).toBe(false);
                expect(endingInIOUS('ious  ')).toBe(false);
                expect(endingInIOUS('ous743')).toBe(false);
                expect(endingInIOUS('ous')).toBe(false);
                expect(endingInIOUS('s')).toBe(false);
            });
        });

        describe("whitespaceChar", () => {
            it("matches a string containing a whitespace followed by a period comma colon or semicolon", () => {
                expect(whitespaceChar(' .')).toBe(true);
                expect(whitespaceChar(' ,')).toBe(true);
                expect(whitespaceChar(' :')).toBe(true);
                expect(whitespaceChar(' ;')).toBe(true);
                expect(whitespaceChar('bdawe62 .')).toBe(true);
                expect(whitespaceChar(' ;4vc232')).toBe(true);
                expect(whitespaceChar(';25gasdf')).toBe(false);
                expect(whitespaceChar('. ')).toBe(false);
                expect(whitespaceChar(',.;:')).toBe(false);
                expect(whitespaceChar(' k')).toBe(false);
            });
        });

        describe("wordLongerThanSixLetters", () => {
            it("matches a string containing a word longer than 6 characters", () => {
                expect(wordLongerThanSixLetters('characters')).toBe(true);
                expect(wordLongerThanSixLetters('important test')).toBe(true);
                expect(wordLongerThanSixLetters('two three five thirteen')).toBe(true);
                expect(wordLongerThanSixLetters('sevens')).toBe(false);
                expect(wordLongerThanSixLetters('       two')).toBe(false);
                expect(wordLongerThanSixLetters(' one three      two')).toBe(false);
            });
        });

        describe("withoutTheLetterE", () => {
            it("matches a string containing a word without the letter e", () => {
                expect(withoutTheLetterE('fronts')).toBe(true);
                expect(withoutTheLetterE('  to ')).toBe(true);
                expect(withoutTheLetterE('this contain no 3')).toBe(true);
                expect(withoutTheLetterE(' I am a word multiply ')).toBe(true);
                expect(withoutTheLetterE('testing')).toBe(false);
                expect(withoutTheLetterE('E')).toBe(false);
                expect(withoutTheLetterE('Even here is ')).toBe(false);
                expect(withoutTheLetterE('heelo')).toBe(false);
            });
        });
    });
});