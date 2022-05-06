////////////////////////////////////////////////// DOM REFERENCES /////////////////////////////////////////////////////////

const selDonald = document.getElementById("selDonald"); //DT character selection
const selElon = document.getElementById("selElon"); //EM character selection
const statsNarc = document.getElementById("statsNarc"); // Narcissm stat
const statsInsec = document.getElementById("statsInsec"); // Insecurity stat
const statsControv = document.getElementById("statsControv"); // Controversy stat
const statsIntox = document.getElementById("statsIntox"); // Intoxication stat

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

// Upon selection - create an instance of Donald Trump
function srtDonald() {
    const donald = new trump("Donald");
    donald = true;
}

// Upon selection - create an instance of Elon Musk
function srtElon() {
    const elon = new musk("Elon");
    elon = true;
}

// Character selection event listeners
selDonald.addEventListener("click", srtDonald)
selElon.addEventListener("click", srtElon)


if (donaldBool == 1) {
    charConfirm = "You have selected your Donald";
    } else if (elonBool == 1) {
        charConfirm = "You have selected Elon";
}


//////////////////////////////////////////////// BUTTONS ///////////////////////////////////////////////////////////////

// BUTTON - TWEET
const goSocial = () => {
    //Need to also include negative modifier for insec
    randScore = Math.floor(Math.random() * 6);
    if (elon) {
        newRand = elon._narc += randScore;
        console.log(`elon newRand = ${newRand}`);
    } // How to do if statement on donald when the instance is not created?
    // }
    //  if (donald) {
    //     newRand = donald._narc += randScore;
    //     console.log(`donald newRand = ${newRand}`);
    // }
    return newRand;
}

// BUTTON - PRESS RELEASE
const goPress = () => {
    randScore = Math.floor(Math.random() * 6);
    if (elon) {
        newRand = elon._insec += randScore;
        console.log(`elon newRand = ${newRand}`);
    }
    return newRand;
}

// UNIQUE BUTTON - TRUMP - how to load these into UI???
const goControv = (_controv) => {
    //Generate controversy animation & info
    // Put limits on this. FOr example can only be used once every 3 turns?
    if (donald._controv > 30) {
        loseCond();
    } else {
        donald._controv += Math.floor(Math.random() * 6);
        donald._narc += Math.floor(Math.random() * 6);
        donald._insec -= Math.floor(Math.random() * 6);
    }
}

// UNIQUE BUTTON - ELON (TO DO) - how to load these into UI???
const goIntox = (_intox) => {}


//////////////////////////////////////////////// WIN/LOSS CONDITIONS //////////////////////////////////////////////////////

// Win conditions - these could be embedded within a parent function called win/loss?
const winCond = (win) => {
    if (leader._narc >= 30) {
        console.log("you win!");
    }
}

//Loss conditions - these could be embedded within a parent function called win/loss?
const loseCond = (lose) => {
    if (leader._insec >= 30) {
        console.log("you lose!");
    }
}

const winLose = () =>{
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


goSocial();
console.log(elon);
