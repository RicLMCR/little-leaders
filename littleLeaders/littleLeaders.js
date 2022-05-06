////////////////////////////////////////////////// DOM REFERENCES & VARIABLES /////////////////////////////////////////////////////////

// CHARACTER SELECTION INTEGRATION
// const selDonald = document.getElementById("selDonald"); //DT character selection
// const selElon = document.getElementById("selElon"); //EM character selection
// const charConfirm = document.getElementById("charConfirm"); // Character confirmation


// CHARACTER HEALTH BARS INTEGRATION
// const statsNarc = document.getElementById("statsNarc"); // Narcissm stat
// const statsInsec = document.getElementById("statsInsec"); // Insecurity stat
// const statsControv = document.getElementById("statsControv"); // Controversy stat
// const statsIntox = document.getElementById("statsIntox"); // Intoxication stat

// VARIABLES TO HIDE CHARACTERS
let hideDon = document.getElementById("donald"); //Hide Donald
let hideElon = document.getElementById("elon"); //Hide Elon


///////////////////////////////////////////////// CHARACTER CREATION //////////////////////////////////////////////////////////

// Parent class
class leader {
    constructor(name, narc, insec) {
        this._name = name;
        this._narc = narc;
        this._insec = insec;
    }
}

//Subclass - Donald Trump
class trump extends leader {
    constructor(name) {
        super(name);
        this._name = "Donald";
        this._narc = 15;
        this._insec = 15;
        this._controv = 15;
    }
}

//Subclass - Elon Musk
class musk extends leader {
    constructor(name) {
        super(name);
        this._name = "Elon";
        this._narc = 10;
        this._insec = 5;
        this._intox = 20;
    }
}

// // Upon selection - create an instance of Donald Trump subclass and hide the Elon avatar
// function srtDonald() {
    // let donald = new trump("Donald"); // activate goSocial and see if true/false detector works for donald then do elon
    // donaldBool = 1;
    // hideElon()
// }

// // Upon selection - create an instance of Elon Musk subclass and hide the Donald avatar
// function srtElon() {
    // let elon = new musk("Elon"); // activate goSocial and see if true/false detector works for donald then do elon
    // elonBool = 1;
    // hideDon()
// }

// Character selection event listeners - to trigger srtDonald and srtElon functions
// selDonald.addEventListener("click", srtDonald)
// selElon.addEventListener("click", srtElon)


let donald = new trump("Donald"); // activate goSocial and see if true/false detector works for donald then do elon
donaldBool = 1;
let elon = new musk("Elon"); // activate goSocial and see if true/false detector works for donald then do elon
elonBool = 0;

if (donaldBool == 1) {
charConfirm = "You have selected Donald";
// Hide ELon Div and load donald button
} else if (elonBool == 1) {
    charConfirm = "You have selected Elon";
    // Hide Donald Div and load Elon button
}

//////////////////////////////////////////////// BUTTONS ///////////////////////////////////////////////////////////////

// BUTTON - TWEET
function goSocial() {
    if (donaldBool == 1) {
        randScore = Math.floor(Math.random() * 10);
        newRand = donald._narc += randScore;
        console.log(`Donald Social newRand = ${newRand}`);
        return newRand;
    } else if (elonBool == 1) {
        randScore = Math.floor(Math.random() * 10);
        newRand = donald._narc += randScore;
        console.log(`Elon Social newRand = ${newRand}`);
    }
}

// BUTTON - PRESS RELEASE
const goPress = () => {
    randScore = Math.floor(Math.random() * 6);
    if (donaldBool == 1) {
        newRand = donald._insec += randScore;
        console.log(`Donald Press newRand = ${newRand}`);
        return newRand;
    } else if (elonBool == 1){
        newRand = elon._insec += randScore;
        console.log(`Elon Press newRand = ${newRand}`);
        return newRand;
    }
}

// UNIQUE BUTTON - TRUMP - how to load these into UI???
const goControv = (_controv) => {
    if (donald._controv > 30) {
        loseCond();
    } else {
        donald._controv += Math.floor(Math.random() * 6);
        donald._narc += Math.floor(Math.random() * 6);
        donald._insec -= Math.floor(Math.random() * 6);
    }
}

console.log(donald)
goControv()
console.log(donald._narc)
console.log(donald)

// UNIQUE BUTTON - ELON (TO DO) - how to load these into UI???
const goIntox = (_intox) => {}



//HIDE DONALD 
const hideD = ()=> {
    if (hideDon.style.display === "none") {
        hideDon.style.display = "flex";
    } else {
        hideDon.style.display = "none";
    }
    hideElon.style.display = "flex";
}

//HIDE ELON 
const hideE =()=>{
    if (hideElon.style.display === "none") {
        hideElon.style.display = "flex";
    } else {
        hideElon.style.display = "none";
    }
    hideDon.style.display = "flex";
}


//////////////////////////////////////////////// WIN/LOSS CONDITIONS //////////////////////////////////////////////////////

// Win conditions
const winCond = () => {
    if (leader._narc >= 30) {
        console.log("you win!");
    }
}

//Loss conditions
const loseCond = () => {
    if (leader._insec >= 30) {
        console.log("you lose!");
    }
}

// Combined win/loss function
const winLose = () => {
    winCond();
    loseCond();
}

// //Turn counter - OR USE A TIMER!!!
// const turnCount = () => {
//     while (leader._insec < 30 || leader._narc < 30) {
//         turn = 0;
//         turn += 1;
//         winCond();
//         loseCond();
//         return turn;
//     } //consider including negative impact on player scores so that eventually the player loses if they do not do anything
// }