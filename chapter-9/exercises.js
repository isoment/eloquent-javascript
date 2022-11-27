/*
    Code golf is a term used for the game of trying to express a particular pro-
    gram in as few characters as possible. Similarly, regexp golf is the practice of
    writing as tiny a regular expression as possible to match a given pattern, and
    only that pattern.

    For each of the following items, write a regular expression to test
    whether any of the given substrings occur in a string. The regular expres-
    sion should match only strings containing one of the substrings described.
    Do not worry about word boundaries unless explicitly mentioned. When
    your expression works, see whether you can make it any smaller.

        car and cat

        pop and prop

        ferret, ferry, and ferrari

        Any word ending in ious

        A whitespace character followed by a period, comma, colon, or
        semicolon

        A word longer than six letters

        A word without the letter e (or E)

    Refer to the table in the chapter summary for help. Test each solution
    with a few test strings.
*/
export const carAndCat = (string) => {
    const regex = /ca[rt]/;
    return regex.test(string);
}

export const popAndProp = (string) => {
    const regex = /pr?op/;
    return regex.test(string);
}

export const matchFerrWords = (string) => {
    const regex = /ferr(et|y|ari)+/;
    return regex.test(string);
}

export const endingInIOUS = (string) => {
    const regex = /(ious)$/;
    return regex.test(string);
}

export const whitespaceChar = (string) => {
    const regex = /\s[.,:;]/;
    return regex.test(string);
}

export const wordLongerThanSixLetters = (string) => {
    const regex = /\b\w{7,}\b/;
    return regex.test(string);
}

export const withoutTheLetterE = (string) => {
    const regex = /^[^eE]+$/;
    return regex.test(string);
}


/*
    Imagine you have written a story and used single quotation marks through-
    out to mark pieces of dialogue. Now you want to replace all the dialogue
    quotes with double quotes, while keeping the single quotes used in 
    contractions like aren’t.

    Think of a pattern that distinguishes these two kinds of quote usage and
    craft a call to the replace method that does the proper replacement.
*/
export const quoteReplace = (string) => {
    const regex = /(^|\W)'|'(\W|$)/g;
    return string.replace(regex, '$1"$2');
}


/*
    Write an expression that matches only JavaScript-style numbers. It must sup-
    port an optional minus or plus sign in front of the number, the decimal dot,
    and exponent notation—5e-3 or 1E10—again with an optional sign in front
    of the exponent. Also note that it is not necessary for there to be digits in
    front of or after the dot, but the number cannot be a dot alone. That is, .5
    and 5. are valid JavaScript numbers, but a lone dot isn’t.
*/
export const jsNumbers = (string) => {
    const regex = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
    return regex.test(string);
}