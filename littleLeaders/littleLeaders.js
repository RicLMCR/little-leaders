// get element and event listeners here

// Parent class
class leader {
    constructor(name, narc, insec) {
        this._name = name;
        this._narc = narc;
        this._insec = insec;
    }
}

//Sub - trump
class trump extends leader {
    constructor(name) {
        super(name);
        this._name = "Donald";
        this._narc = 15;
        this._insec = 15;
        this._controv = 15;
    }
}

//Sub - musk
class musk extends leader {
    constructor(name) {
        super(name);
        this._name = "Elon";
        this._narc = 10;
        this._insec = 5;
        this._intox = 20;
    }
}

const donald = new trump("Donald");
const elon = new musk("Elon");

//Button functions
function goSocial(){
    randScore = Math.floor(Math.random()*10);
    newRand = donald._narc += randScore;
    console.log(`newRand = ${newRand}`);
    return newRand;
}

// Win/Loss conditions
function winCond() {
    if (leader._narc >= 30) {
        console.log("you win!");
    }
}

function loseCond() {
    if (leader._insec >= 30) {
        console.log("you lose!");
    }
}

//Turn counter
function turnCount() {
    while (leader._insec < 30 || leader._narc < 30) {
        turn = 0;
        turn += 1;
        winCond();
        loseCond();
        return turn;
    }
}


goSocial();
console.log(donald);
// console.log(elon);

