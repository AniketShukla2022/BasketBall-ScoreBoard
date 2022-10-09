let homeScore = document.getElementById("home-score-button")
let guestScore = document.getElementById("guest-score-button")
homeScore = 0
guestScore = 0

const button = document.getElementById("Start");
let elementClicked = false;
button.addEventListener('click', function handleClick() {
  elementClicked = true;
});
let flag = 0

function clickStartButton() {
    flag = 1
    homeScore = 0
    guestScore = 0
    document.getElementById("home-score-button").textContent = homeScore
    document.getElementById("guest-score-button").textContent = guestScore
    clickStatusButton()
}

function clickStatusButton() {
    if (flag == 1) {
        document.getElementById("status-button").textContent = "Game started"
        flag = 0
    }
    else if (elementClicked == false) {
        document.getElementById("status-button").textContent = "Please click on start button to get started with the game"
    }
    else if (homeScore == guestScore) {
        document.getElementById("status-button").textContent = "Both teams have same score"
    }
    else if (homeScore > guestScore) {
        let diff = homeScore-guestScore
        document.getElementById("status-button").textContent = "Home team is ahead by: "+ diff + " points"
    }
    else {
        let diff = guestScore-homeScore
        document.getElementById("status-button").textContent = "Guest team is ahead by: "+ diff + " points"
    }
}

function increaseby1home() {
    if (elementClicked == false) {
        document.getElementById("status-button").textContent = "Please click on start button to get started with the game"
    }
    else {
        homeScore += 1
        document.getElementById("home-score-button").textContent = homeScore
        clickStatusButton()
    }
}

function increaseby2home() {
    if (elementClicked == false) {
        document.getElementById("status-button").textContent = "Please click on start button to get started with the game"
    }
    else {
        homeScore += 2
        document.getElementById("home-score-button").textContent = homeScore
        clickStatusButton()
    }
}

function increaseby3home() {
    if (elementClicked == false) {
        document.getElementById("status-button").textContent = "Please click on start button to get started with the game"
    }
    else {
       homeScore += 3
        document.getElementById("home-score-button").textContent = homeScore
        clickStatusButton() 
    }
}

function increaseby1guest() {
    if (elementClicked == false) {
        document.getElementById("status-button").textContent = "Please click on start button to get started with the game"
    }
    else {
        guestScore += 1
        document.getElementById("guest-score-button").textContent = guestScore
        clickStatusButton()
    }
}

function increaseby2guest() {
    if (elementClicked == false) {
        document.getElementById("status-button").textContent = "Please click on start button to get started with the game"
    }
    else {
        guestScore += 2
        document.getElementById("guest-score-button").textContent = guestScore
        clickStatusButton()
    }
}

function increaseby3guest() {
    if (elementClicked == false) {
        document.getElementById("status-button").textContent = "Please click on start button to get started with the game"
    }
    else {
        guestScore += 3
        document.getElementById("guest-score-button").textContent = guestScore
        clickStatusButton()
    }
}
