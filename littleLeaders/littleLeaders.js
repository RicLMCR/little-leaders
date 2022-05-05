////////////////////////////////////////////////// DOM REFERENCES /////////////////////////////////////////////////////////

const selDonald = document.getElementById("selDonald"); //DT character selection
const selElon = document.getElementById("selElon"); //EM character selection
const statsNarc = document.getElementById("statsNarc"); // Narcissm stat
const statsInsec = document.getElementById("statsInsec"); // Insecurity stat
const statsControv = document.getElementById("statsControv"); // Controversy stat
const statsIntox = document.getElementById("statsIntox"); // Intoxication stat


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

