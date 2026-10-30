let clubName="Wealth Builders Club";
console.log("Welcome to " + clubName);

function sayHi() {
    console.log("Hi! Thanks for visiting.")
}

sayHi();
let meetingDay="Tuesday";
console.log("Our meetings are held every " + meetingDay + ".");

function sayBye() {
    console.log("Goodbye! Thanks for visiting.");
}
sayBye();

let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
    nextMeeting.textContent = "Our next meeting is Sunday, November 8 at 3 pm."
}

nextButton.addEventListener("click", showNextMeeting);