// get element and event listeners here
// const btnDonald = document.getElementById("donaldBtn"); //Player 1 Button
// const btnElon = document.getElementById("elonBtn"); //Player 1 Button

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

// function srtDonald (){
//     const donald = new trump("Donald");
//     donald = true;
//     }

// btnDonald.addEventListener("click", leaderSel)
// btnElon.addEventListener("click", leaderSel)

// const leaderSel = (e) => {
//     debugger;
//     this.app={};
//     if (e.path === "donaldBtn") {
//         this.app.donald = new trump("Donald");
//     } 
//     if (e.path === "elonBtn") {
//         this.app.elon = new musk("Elon");
//     }
// }

leaderSel("click");

// what happens idf smae char selected twice/



    // BUTTON - TWEET
    const goSocial = () => {
        //Need to also include negative modifier for insec
        randScore = Math.floor(Math.random() * 6);
        if (elon) {
            newRand = elon._narc += randScore;
            console.log(`elon newRand = ${newRand}`);
            // put in something for insecurity - slightly less than the narc result
        } // How to do if statement on donald when the instance is not created?
        // }
        //  if (donald) {
        //     newRand = donald._narc += randScore;
        //     console.log(`donald newRand = ${newRand}`);
        // }
        return newRand;
    }

    // BUTTON - PRESS RELEASE
    const goPress = () =>{
        randScore = Math.floor(Math.random() * 10);
        if (elon) {
            newRand = elon._insec += randScore;
            console.log(`elon newRand = ${newRand}`);
        }
        return newRand;
    }

    // UNIQUE BUTTON - TRUMP - how to load these into UI???
    const goControv = (_controv) =>{
        //Generate controversy animation & info
        // Put limits on this. FOr example can only be used once every 3 turns
        if (donald._controv > 30) {
            loseCond();
        } else {
            donald._controv += Math.floor(Math.random() * 6);
            donald._narc += Math.floor(Math.random() * 6);
            donald._insec -= Math.floor(Math.random() * 6);
        }
    }

    // UNIQUE BUTTON - ELON - how to load these into UI???
   const goIntox = (_intox) =>{}


    // Win/Loss conditions
    const winCond = (win) => {
        if (leader._narc >= 30) {
            console.log("you win!");
        } //Should we also win if insec reaches 0?
    }

    const loseCond = (lose) => {
        if (leader._insec >= 30) {
            console.log("you lose!");
        } //Should we also lose if narc reaches 0?
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


    // turn function which checks win/loss conditions then calls on player function (which calls on turn function after button oressed)
    // For all buttons to work simultaniously we need to integrate the JS with a front end.
    // Buttons with addEvent listeners
    // getElement for narc and insec categories to be displayed on-screen
    // Basic html - no need for styling right now
    // determine impact of buttons on scores
    // determine impact of intox and controv characteristics
    // How to load unique buttons into UI?


    // Timer?? with associated graphics (i.e. rogan show, police, rockets etc)

    // gameturn
    // check win conditions
    // call reduce stats function
    // call player function

    // player
    // press GamepadButton
    // call gameturn function