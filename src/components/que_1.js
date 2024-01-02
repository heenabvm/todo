const str = "countVowels";

const isVowel = (ch) => {
    ch = ch.toUperCase();
    return ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U";
}

let count = 0;
for (let i = 0; i <= str.length; i++) {
    if (isVowel(str[i])) {
        count++;
    }

}
console.log('Test=======================================');
console.log(count);
console.log('====================================');