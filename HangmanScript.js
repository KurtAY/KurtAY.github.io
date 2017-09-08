let letterArray = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let storeWord; 

let words = ['fit', 'noxious', 'songsscent', 'vein'];
let underscore="";
let answer = 0; //let answer;


//test
function test(){
    return "Test";
}




//choose random word from list
function compChooseWord() {
        random =  Math.floor((Math.random() * words.length));
        return words[random];
}

//Creates the underscore in place of letters
function createLetterSpace(words) {
    //let underscore="";
    for (let i = 0; i < words.length; i++){
        underscore += "_ ";   
    }
    return underscore;
}

//Replace the underscore with the letter in original string
function alterAt (x,y, originalString) {
    return originalString.substr(0,x) + y + originalString.substr(x+1, originalString.length);
}

//Takes letter as arguemnent, compares it to the answer. Replaces underscore with letter
function guessLetter(letter, shown, answer) {
    checkLetter = answer.indexOf(letter);

    while(checkIndex >=0) {
        shown = alterAt(checkLetter, letter, shown)
        checkLetter = answer.indexOf(letter, checkLetter++);
    }
    return shown;
}

function startGuess() {
    console.log(compChooseWord());
    console.log(createLetterSpace(storeWord));
}
    