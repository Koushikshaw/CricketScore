const inputPallete = document.querySelector(".inputs");
const tossPallete = document.querySelector(".toss");
const scorePallete = document.querySelector(".score-pallete");
const choicePallete = document.querySelector(".tossChoice");
const runs = document.querySelectorAll(".runs");
const coin = document.querySelectorAll(".choice");
const tossRes = document.querySelector("[results-toss]");
const team1Form = document.querySelector("[team1Ask]");
const team2Form = document.querySelector("[team2Ask]");
const overForm = document.querySelector("[oversAsk]");
const team1NameIn = document.querySelector(".team1");
// const team1Submit = document.querySelector("[team1Submit]");
const team2NameIn = document.querySelector(".team2");
// const team2Submit = document.querySelector("[team2Submit]");
const oversNo = document.querySelector(".oversNo");
// const overSubmit = document.querySelector("[oversSubmit]");
const teamToss = document.querySelector(".team-toss");
const tossWinTeam = document.querySelector("[tossWin]");
const tossForm = document.querySelector("[tossChoice]");
const tossRPrint = document.querySelector("[tossRR]");
const bat = document.querySelectorAll(".bat");
const confirmationMessage = document.querySelector(".confirmation");

let scoreTeam1 = 0;
let scoreTeam2 = 0;
let team1Name = "";
let team2Name = "";
let tossWin = "";
let tossChocie = "";
let currTeam = "";
let oversTotal = 0;
let currentOver = 0;

function setDefault() {
    let scoreTeam1 = 0;
    let scoreTeam2 = 0;
    let team1Name = "";
    let team2Name = "";
    let oversTotal = 0;
    let currentOver = 0;
    tossPallete.classList.remove("active");
    scorePallete.classList.remove("active");
    inputPallete.classList.add("active");
    choicePallete.classList.remove("active");
}
setDefault();

function tossPanelSet() {
    inputPallete.classList.remove("active");
    scorePallete.classList.remove("active");
    tossPallete.classList.add("active");
    choicePallete.classList.remove("active");
}

function scorePanelSet() {
    inputPallete.classList.remove("active");
    tossPallete.classList.remove("active");
    scorePallete.classList.add("active");
    choicePallete.classList.remove("active");
}

function choicePanelSet() {
    inputPallete.classList.remove("active");
    choicePallete.classList.add("active");
    scorePallete.classList.remove("active");
}

team1Form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (team1NameIn.value == "") return;
    else {
        team1Name = team1NameIn.value;
        console.log(`Name of team 1 : ${team1Name}`);
        confirmationMessage.classList.add("active");
        setTimeout(() => {
            confirmationMessage.classList.remove("active");
        }, 1000)
    }
    teamToss.innerText = `${team1Name}`;

})
team2Form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (team2NameIn.value == "") return;
    else {
        team2Name = team2NameIn.value;
        console.log(`Name of team 2 : ${team2Name}`);
        confirmationMessage.classList.add("active");
        setTimeout(() => {
            confirmationMessage.classList.remove("active");
        }, 1000)
    }
})
overForm.addEventListener('submit', (e) => {

    e.preventDefault();
    if (oversNo.value == "") return;
    else {
        oversTotal = parseInt(oversNo.value);
        console.log(`Total Overs : ${oversTotal}`);
        confirmationMessage.classList.add("active");
        setTimeout(() => {
            confirmationMessage.classList.remove("active");
        }, 1000)
    }
    setTimeout(()=>{
        tossPanelSet();
    },2000)
})

runs.forEach((item, index) => {
    item.addEventListener('click', () => {
        console.log(`${index} button is clicked`)
    })
});

tossForm.addEventListener('submit', (e) => {
    e.preventDefault();
    bat.forEach((items, index) => {
        if (items.checked) {
            if (index == 0) {
                tossChocie = "bat";
            } else {
                tossChocie = "bowl";
            }
            console.log(`${tossWin} selected to ${tossChocie} first`);
            tossRPrint.innerText = `${tossWin} selected to ${tossChocie} first`;
            currTeam = tossWin;
            confirmationMessage.classList.add("active");
        setTimeout(()=>{
            confirmationMessage.classList.remove("active");
        },1000)
        }
        setTimeout(() => {
            scorePanelSet();
        }, 2000)
    })
})

coin.forEach((items, index) => {
    items.addEventListener('click', () => {
        if (index == 0) {
            console.log("Head is choosed");
        } else {
            console.log("Tails is choiced");
        }
        items.classList.add("choosen");
        items.classList.remove("grayscale");
        let no = Math.floor(Math.random() * 2);
        coin[no].classList.add("win");
        console.log(no);
        items.style.pointerEvents = "none";
        coin[no].style.pointerEvents = "none";
        if (no == index) {
            if (no == 1) {
                coin[0].style.pointerEvents = "none";
                tossRes.innerText = `TAILS on the toss and ${team1Name} won it`;
            } else {
                coin[1].style.pointerEvents = "none";
                tossRes.innerText = `HEADS on the toss and ${team1Name} won it`;
            }
            tossWin = team1Name;
        }
        else {
            if (no == 0) {
                tossRes.innerText = `HEADS on the toss and ${team2Name} won it`;
            }
            else {
                tossRes.innerText = `TAILS on the toss and ${team2Name} won it`;
            }
            tossWin = team2Name;
        }
        tossWinTeam.innerText = `${tossWin}`;
        choicePanelSet();
    })
})


