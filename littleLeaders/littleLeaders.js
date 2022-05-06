////////////////////////////////////////////////// DOM REFERENCES & VARIABLES /////////////////////////////////////////////////////////

// CHARACTER SELECTION INTEGRATION
// const selDonald = document.getElementById("selDonald"); //Donald Trump character selection
// const selElon = document.getElementById("selElon"); //Elon Musk character selection
// const charConfirm = document.getElementById("charConfirm"); // Character confirmation

// CHARACTER HEALTH BARS INTEGRATION
// const statsNarc = document.getElementById("statsNarc"); // Narcissm stat
// const statsInsec = document.getElementById("statsInsec"); // Insecurity stat
// const statsControv = document.getElementById("statsControv"); // Controversy stat
// const statsIntox = document.getElementById("statsIntox"); // Intoxication stat

// VARIABLES TO HIDE CHARACTERS
// let hideDon = document.getElementById("donald"); //Hide the <div> containing Donald
// let hideElon = document.getElementById("elon"); //Hide the <div> containing Elon



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

//HIDE DONALD 
const hideD = () => {
    // if (hideDon.style.display === "none") {
    //     hideDon.style.display = "flex";
    // } else {
    //     hideDon.style.display = "none";
    // }
    // hideElon.style.display = "flex";
}

//HIDE ELON 
const hideE = () => {
    // if (hideElon.style.display === "none") {
    //     hideElon.style.display = "flex";
    // } else {
    //     hideElon.style.display = "none";
    // }
    // hideDon.style.display = "flex";
}

// // Upon selection - create an instance of Donald Trump subclass and hide the Elon avatar
const srtDonald = ()=> {
let donald = new trump("Donald"); // activate goSocial and see if true/false detector works for donald then do elon
donaldBool = 1;
hideE()
}

// // Upon selection - create an instance of Elon Musk subclass and hide the Donald avatar
const srtElon =() =>{
let elon = new musk("Elon"); // activate goSocial and see if true/false detector works for donald then do elon
elonBool = 1;
hideD()
}

// Character selection event listeners - to trigger srtDonald and srtElon functions
// selDonald.addEventListener("click", srtDonald)
// selElon.addEventListener("click", srtElon)


let donald = new trump("Donald"); // activate goSocial and see if true/false detector works for donald then do elon
donaldBool = 1;
let elon = new musk("Elon"); // activate goSocial and see if true/false detector works for donald then do elon
elonBool = 0;

// Hide ELon Div and load Donald button
if (donaldBool == 1) {
    charConfirm = "You have selected Donald";
    srtDonald()
    hideE()

    // Hide Donald Div and load Elon button
} else if (elonBool == 1) {
    charConfirm = "You have selected Elon";
    srtElon()
    hideD()
}

//////////////////////////////////////////////// WIN/LOSS CONDITIONS //////////////////////////////////////////////////////

// Combined win/loss function
const winLose = () => {
    if (leader._narc >= 30) {
        console.log("you win!");
    }

    if (leader._insec >= 30) {
        console.log("you lose!");
    }
}
//////////////////////////////////////////////// BUTTONS ///////////////////////////////////////////////////////////////

// BUTTON - TWEET
function goSocial() {
    if (donaldBool == 1) {
        randScore = Math.floor(Math.random() * 30);
        newRand = donald._narc += randScore;
        statsNarc = donald._narc;
        winLose();
        console.log(`Donald Social newRand = ${newRand}`);
        return newRand;
    } else if (elonBool == 1) {
        randScore = Math.floor(Math.random() * 6);
        newRand = donald._narc += randScore;
        statsNarc = elon._narc;
        winLose();
        console.log(`Elon Social newRand = ${newRand}`);
        return newRand;
    }
}

// BUTTON - PRESS RELEASE
const goPress = () => {
    if (donaldBool == 1) {
        randScore = Math.floor(Math.random() * 30);
        newRand = donald._insec += randScore;
        statsInsec = donald._insec += randScore;
        winLose();
        console.log(`Donald Press newRand = ${newRand}`);
        return newRand;
    } else if (elonBool == 1) {
        randScore = Math.floor(Math.random() * 6);
        newRand = elon._insec += randScore;
        statsInsec = elon._insec += randScore;
        winLose();
        console.log(`Elon Press newRand = ${newRand}`);
        return newRand;
    }
}

// UNIQUE BUTTON - TRUMP - how to load these into UI???
const goControv = (_controv) => {
    if (donald._controv > 30) {
        winLose();
    } else {
        donald._controv += Math.floor(Math.random() * 6);
        donald._narc += Math.floor(Math.random() * 6);
        donald._insec -= Math.floor(Math.random() * 6);
        winLose();
    }
}

// UNIQUE BUTTON - ELON (TO DO) - how to load these into UI???
const goIntox = (_intox) => {}


console.log(donald)
goControv()
console.log(donald._narc)
console.log(donald)
console.log(leader._narc)




