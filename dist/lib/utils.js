"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var simple_text_1 = require("simple-text");
exports.appName = 'split-lyrics';
var SPLIT = ' -- ';
var VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
var DOUBLE_CONSONANTS = new Set(['ch', 'dy', 'pl']);
function isVowel(letter) {
    return VOWELS.has(simple_text_1.simplify(letter.toLowerCase()));
}
function isDoubleConsonant(word, index) {
    if (index < 2) {
        return false;
    }
    return DOUBLE_CONSONANTS.has(word.substr(index - 2, 2).toLowerCase());
}
// test word => ave | a -- ve
function splitWord(word) {
    if (!word) {
        return '';
    }
    var index = word.split('').findIndex(function (x) { return isVowel(x); }) + 1;
    var nextConsonantIndex = word.substring(index).split('').findIndex(function (x) { return !isVowel(x); }) + index + 1;
    if (index === nextConsonantIndex) { // One syllable word
        return word;
    }
    while (nextConsonantIndex < word.length) {
        if (isVowel(word[nextConsonantIndex])) {
            var splitIndex = nextConsonantIndex - (isDoubleConsonant(word, nextConsonantIndex) ? 2 : 1);
            return word.substring(0, splitIndex) + SPLIT + splitWord(word.substring(splitIndex));
        }
        nextConsonantIndex++;
    }
    return word;
}
exports.splitWord = splitWord;
