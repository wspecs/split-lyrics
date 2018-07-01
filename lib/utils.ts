import { simplify } from "simple-text";
export const appName = 'split-lyrics';


const SPLIT = ' -- ';
const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
const DOUBLE_CONSONANTS = new Set(['ch', 'dy', 'pl']);

function isVowel(letter: string) {
    return VOWELS.has(simplify(letter.toLowerCase()));
}

function isDoubleConsonant(word: string, index: number) {
    if (index < 2) {
        return false;
    }
    return DOUBLE_CONSONANTS.has(word.substr(index - 2, 2).toLowerCase());
}

// test word => ave | a -- ve
export function splitWord(word: string): string {
    if (!word) {
        return '';
    }
    let index = word.split('').findIndex(x => isVowel(x)) + 1;
    let nextConsonantIndex = word.substring(index).split('').findIndex(x => !isVowel(x)) + index + 1;
    if (index === nextConsonantIndex) { // One syllable word
        return word;
    }
    while(nextConsonantIndex < word.length) {
        if(isVowel(word[nextConsonantIndex])) {
            const splitIndex = nextConsonantIndex - (isDoubleConsonant(word, nextConsonantIndex) ? 2 : 1);

            return word.substring(0, splitIndex) + SPLIT + splitWord(word.substring(splitIndex));
        }
        nextConsonantIndex++;
    }
    return word;
}