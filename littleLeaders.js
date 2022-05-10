////////////////////////////////////////////////// DOM REFERENCES & VARIABLES /////////////////////////////////////////////////////////

// CHARACTER SELECTION INTEGRATION
// const selDonald = document.getElementById("selDonald"); //Donald Trump character selection
// const selElon = document.getElementById("selElon"); //Elon Musk character selection
// const charConfirm = document.getElementById("charConfirm"); // Character confirmation

// BUTTON INTEGRATION
const goSocialBtn = document.getElementById("socialBtn");
const goPressBtn = document.getElementById("pressBtn");
const goControvBtn = document.getElementById("controvBtn");
// const goIntoxBtn = document.getElementById("intoxBtn");

// TRIGGER BUTTON FEEDBACK
let youWin = document.getElementById(`leader`);
let youLose = document.getElementById(`leader`);
let youSocial = document.getElementById(`leader`);
let youPress = document.getElementById(`leader`);
let youControv = document.getElementById(`leader`);

// CHARACTER HEALTH BARS INTEGRATION
let statsNarc = document.getElementById("statsNarc"); // Narcissm stat
let statsInsec = document.getElementById("statsInsec"); // Insecurity stat
let statsControv = document.getElementById("statsControv"); // Controversy stat
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
        this._narc = 0;
        this._insec = 0;
        this._controv = 0;
    }
}

//Subclass - Elon Musk
class musk extends leader {
    constructor(name) {
        super(name);
        this._name = "Elon";
        this._narc = 0;
        this._insec = 0;
        this._intox = 0;
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

// Character selection event listeners - to trigger srtDonald and srtElon functions
// selDonald.addEventListener("click", srtDonald)
// selElon.addEventListener("click", srtElon)

let donald = new trump("Donald"); // activate goSocial and see if true/false detector works for donald then do elon
donaldBool = 1;
let elon = new musk("Elon"); // activate goSocial and see if true/false detector works for donald then do elon
elonBool = 1;

// Hide ELon Div and load Donald button
// if (donaldBool == 1) {
//     charConfirm = "You have selected Donald";
//     srtDonald()
//     hideE()

    // Hide Donald Div and load Elon button
// } else if (elonBool == 1) {
//     charConfirm = "You have selected Elon";
//     srtElon()
//     hideD()
// }

// Upon selection - create an instance of Donald Trump subclass and hide the Elon avatar
// const srtDonald = () => {
//     let donald = new trump("Donald"); // activate goSocial and see if true/false detector works for donald then do elon
//     let donaldBool = 1;
//     hideE()
// }

// Upon selection - create an instance of Elon Musk subclass and hide the Donald avatar
// const srtElon = () => {
//     let elon = new musk("Elon"); // activate goSocial and see if true/false detector works for donald then do elon
//     let elonBool = 1;
//     hideD()
// }

//////////////////////////////////////////////// WIN/LOSS CONDITIONS & POINTS CAP //////////////////////////////////////////////////////

// Combined win/loss function
const winLose = () => {
    if (donald._narc >= 100 || elon._narc >= 100) {
        donald._narc = 100;
        console.log("you win!");
    }

    if (donald._insec >= 100 || elon._insec >= 100) {
        donald._insec = 100;
        console.log("you lose!");
    }
}

//////////////////////////////////////////////// BUTTONS ///////////////////////////////////////////////////////////////

// BUTTON - TWEET
function goSocial() {
    if (donaldBool == 1) {
        randScore = Math.floor(Math.random() * 6);
        newRand = donald._narc + randScore;
        statsNarc.innerHTML = donald._narc;
        statsInsec.innerHTML = randScore/2;
        donald._narc += newRand;
        winLose();
        return newRand;
    } else if (elonBool == 1) {
        randScore = Math.floor(Math.random() * 6);
        newRand = donald._narc + randScore;
        statsNarc.innerHTML = elon._narc;
        statsInsec.innerHTML = randScore/2;
        elon._narc += newRand;
        winLose();
        return newRand;
    }
}

// BUTTON - PRESS RELEASE
const goPress = () => {
    if (donaldBool == 1) {
        randScore = Math.floor(Math.random() * 6);
        newRand = donald._insec + randScore;
        donald._insec += randScore;
        statsInsec.innerHTML = newRand;
        statsNarc.innerHTML = randScore/2;
        youPress = pPress;
        winLose();
        return newRand;
    } else if (elonBool == 1) {
        randScore = Math.floor(Math.random() * 6);
        newRand = elon._insec + randScore;
        elon._insec += randScore;
        statsInsec.innerHTML = newRand;
        statsNarc.innerHTML = randScore/2;
        winLose();
        return newRand;
    }
}

// UNIQUE BUTTON - TRUMP
//controversy updated button - with click counter 
let clicks = 1 
const clickCounter = document.getElementById("controvClicks")
const disablebtn = document.getElementById("controvBtn").disabled = false;

const goControv = (_controv) => {
    if (donald._controv > 30) {
        winLose();
    } else if (donald._controv <=30 && clicks <= 4){
        randScore = Math.floor(Math.random() * 6);
        newRand = donald._controv + randScore;
        donald._insec += randScore;
        donald._controv+= randScore;
        statsInsec.innerHTML = newRand;
        statsControv.innerHTML = randScore*5;
        remainingClicks = 5-clicks;
        controvClicks.innerHTML = `You have ${remainingClicks} controversy clicks left`;
        clicks++
        winLose();
        return newRand;
    }
    else if (clicks >4){ 
        controvClicks.innerHTML = "No more controversy available!";
        disablebtn = true;
    }
    console.log (clicks)
}

// UNIQUE BUTTON - ELON (TO DO) - how to load these into UI???
let goIntox = () => {
    if (elonBool == 1) {
        randScore = Math.floor(Math.random() * 6);
        newRand = elon._narc + randScore;
        statsNarc.innerHTML = newRand;
        elon._narc += newRand;
        winLose();
        return newRand;
    }
}

goSocialBtn.addEventListener("click", goSocial);
goPressBtn.addEventListener("click",goPress);
goControvBtn.addEventListener("click",goControv);
// goIntoxBtn.addEventListener("click", goIntox);






console.log(donald)
goSocial()
console.log(donald)
goSocial()
console.log(donald)
goSocial()