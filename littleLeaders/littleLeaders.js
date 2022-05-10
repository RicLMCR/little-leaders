
const charConfirm = document.getElementById("charConfirm"); // Character confirmation

 // Character Movement For Reasons!
const elonMain = document.querySelector(".l1");
const elonHead = document.querySelector(".leader-1-head");
const elonTorso = document.querySelector(".leader-1-torso");
const elonLArm = document.querySelector(".leader-1-larm");
const elonRArm = document.querySelector(".leader-1-rarm");
const elonLLeg = document.querySelector(".leader-1-lleg");
const elonRLeg = document.querySelector(".leader-1-rleg");

const donaldMain = document.querySelector(".l2");
const donaldHead = document.querySelector(".leader-2-head");
const donaldTorso = document.querySelector(".leader-2-torso");
const donaldLArm = document.querySelector(".leader-2-larm");
const donaldRArm = document.querySelector(".leader-2-rarm");
const donaldLLeg = document.querySelector(".leader-2-lleg");
const donaldRLeg = document.querySelector(".leader-2-rleg");

///////////////////////////////////////////////// CHARACTER CREATION //////////////////////////////////////////////////////////

// Dom's > DOM TESTING
function elonWave() {
    selElon.addEventListener("mouseover", () => {
        elonLArm.style.transform = "rotate(120deg)";
        elonLArm.style.top = "-50px";
    })

    selElon.addEventListener("mouseout", () => {
        elonLArm.style.transform = "rotate(0deg)";
        elonLArm.style.top = "50px";
    })
}  

function donaldWave() {
    selDonald.addEventListener("mouseover", () => {
        donaldLArm.style.transform = "rotate(120deg)";
        donaldLArm.style.top = "-50px";
    })

    selDonald.addEventListener("mouseout", () => {
        donaldLArm.style.transform = "rotate(0deg)";
        donaldLArm.style.top = "50px";
    })
}


////////////////////////////////////////////////// DONALD IMAGES/POLAROIDS /////////////////////////////////////////////////////////

const polaroidOne = document.getElementById("masonry-container-1");


function donaldPic1() {
    socialBtn.addEventListener("click", () => {
        polaroidOne.style.transform = "rotate(1050deg)";
        polaroidOne.style.top = "50%";
        polaroidOne.style.opacity = "100%";
        setTimeout(() => {
            polaroidOne.style.transform = "rotate(50deg)";
            polaroidOne.style.top = "100%";
            polaroidOne.style.opacity = "0%";
        }, 3000);

    })
}

const polaroidTwo = document.getElementById("masonry-container-2");


function donaldPic2() {
    pressBtn.addEventListener("click", () => {
        polaroidTwo.style.transform = "rotate(1050deg)";
        polaroidTwo.style.top = "50%";
        polaroidTwo.style.opacity = "100%";
        setTimeout(() => {
            polaroidTwo.style.transform = "rotate(50deg)";
            polaroidTwo.style.top = "100%";
            polaroidTwo.style.opacity = "0%";
        }, 3000);

    })
}

const polaroidThree = document.getElementById("masonry-container-3");


function donaldPic3() {
    controvBtn.addEventListener("click", () => {
        polaroidThree.style.transform = "rotate(1050deg)";
        polaroidThree.style.top = "50%";
        polaroidThree.style.opacity = "100%";
        setTimeout(() => {
            polaroidThree.style.transform = "rotate(50deg)";
            polaroidThree.style.top = "100%";
            polaroidThree.style.opacity = "0%";
        }, 3000);

    })
}

const polaroidWin = document.getElementById("masonry-container-win");


function donaldPicWin() {
        polaroidWin.style.transform = "rotate(1050deg)";
        polaroidWin.style.top = "50%";
        polaroidWin.style.opacity = "100%";
        setTimeout(() => {
            polaroidWin.style.transform = "rotate(50deg)";
            polaroidWin.style.top = "100%";
            polaroidWin.style.opacity = "0%";
        }, 3000);
}

const polaroidLose = document.getElementById("masonry-container-lose");


function donaldPicLose() {
        polaroidLose.style.transform = "rotate(1050deg)";
        polaroidLose.style.top = "50%";
        polaroidLose.style.opacity = "100%";
        setTimeout(() => {
            polaroidLose.style.transform = "rotate(50deg)";
            polaroidLose.style.top = "100%";
            polaroidLose.style.opacity = "0%";
        }, 3000);
}

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
        donaldPicWin()
    }

    if (donald._insec >= 100 || elon._insec >= 100) {
        donald._insec = 100;
        console.log("you lose!");
        donadonaldPicWin()
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