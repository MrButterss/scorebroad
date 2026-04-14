let homeEl = document.getElementById("home-el")
let gusetEl = document.getElementById("guest-el")
let homeScore = 0
let guestScore = 0

function addHome1() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function addHome2() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function addHome3() {
    homeScore += 3
    homeEl.textContent = homeScore
}

//---------------------------------------------------//
function addGuest1() {
    guestScore += 1
    gusetEl.textContent = guestScore
}

function addGuest2() {
    guestScore += 2
    gusetEl.textContent = guestScore
}

function addGuest3() {
    guestScore += 3
    gusetEl.textContent = guestScore
}

//-------------------------------------------------//

function clears() {
    homeScore = 0
    guestScore = 0
    gusetEl.textContent = guestScore
    homeEl.textContent = homeScore
}