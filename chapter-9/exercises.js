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
    const regex = /ca[rt]+/;
    return regex.test(string);
}

export const popAndProp = (string) => {
    const regex = /pr?op+/;
    return regex.test(string);
}

export const matchFerrWords = (string) => {
    const regex = /ferr(et|y|ari)+/;
    return regex.test(string);
}