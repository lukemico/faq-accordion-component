// FAQ component
// https://frontendeval.com/questions/faq-component

// declare object that contains questions / answers
const faq = [
    {
        question: "How many bones does a cat have?",
        answer: "A cat has 230 bones - 6 more than a human",
        open: false,
    },
    {
        question: "How much do cats sleep?",
        answer: "The average cat sleeps 12-16 hours per day",
        open: false,
    },
    {
        question: "How long do cats live",
        answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
        open: false,
    },
    {
        question: "How much do cats sleep?",
        answer: "The average cat sleeps 12-16 hours per day",
        open: false,
    },
    {
        question: "How much do cats sleep?",
        answer: "The average cat sleeps 12-16 hours per day",
        open: false,
    },
];

// declare a constant ro target the Questions object in the DOM
const questions = document.getElementsByClassName("questions");

// // Map over the faq Object to get the key of each question.
Object.values(questions).map((question, i) => {
    question.id = i;
    question.addEventListener("click", onClickQuestion);
    question.firstElementChild.innerText = faq[i].question;

    // Declare an if statement for an open question.
    if (faq[i].open) {
        question.classList.add("revealed");
        question.firstElementChild.classList.add("rotate");
        question.lastElementChild.classList.add("revealed");
        question.lastElementChild.children[0].innerText = faq[i].answer;
    }
});

// Write a function that handles the actions when a question is clicked.
function onClickQuestion(event) {
    const curr = event.currentTarget;

    // Declare an if statement for an closed question.
    if (faq[curr.id].open) {
        faq[curr.id].open = false;

        curr.classList.remove("revealed");
        curr.firstElementChild.classList.remove("rotate");
        curr.lastElementChild.classList.remove("revealed");
        curr.lastElementChild.children[0].innerText = "";
    } else {
        // Declare an if statement for an open question.
        faq[curr.id].open = true;

        curr.classList.add("revealed");
        curr.firstElementChild.classList.add("rotate");
        curr.lastElementChild.classList.add("revealed");
        curr.lastElementChild.children[0].innerText = faq[curr.id].answer;
    }
}

// Potential Map function implementations
// const questionNames = questions.map((question) => question.answer);

// const passengerNames = faq.map((faq) => faq.question);

// Array.prototype.map
// https://frontendeval.com/questions/array-prototype-map?tab=question

function map(array, callback) {
    // add your code here
    result = [];
    array.forEach((element) => {
        result.push(callback(element));
    });
    return result;
}

// function hello(x) {
//     return x * x;
// }

// const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2);
// console.log(mappedArray);
// [2, 4, 6, 8, 10];

// Mortgage Calculator
// https://frontendeval.com/questions/mortgage-calculator?tab=question

// Create a calculator that accepts three inputs and calculates your monthly mortgage payment:
// The standard math equation for calculating your monthly mortgage payment is: P(r(1+r)^n/((1+r)^n)-1))
// Your job when working on this feature is to convert the user inputs into the numbers that will be used in the calculation.
// Users will make 12 payments on their mortgage per year of their mortgage, and the monthly interest rate is the annual interest rate divided by 12.

// Declare the  following variables
// Principal loan amount              - P is the principal loan amount
// Interest rate (annual)             - r is the monthly interest rate
// Number of years on your mortgage   - n is the total number of payments on your mortgage

// validate input is a number - boolean
// Display an error message if an Input is not a number (NaN).

// Once Inputs have been validated as numbers, calculate the following
// the monthly interest rate
// the total number of payments on your mortgage

// document.getElementById("submit").addEventListener("click", calculate);

// function calculate(event) {
//     event.preventDefault();
//     const loan = document.getElementById("principal-loan").value;
//     let rate = document.getElementById("interest-rate").value;
//     let length = document.getElementById("length-loan").value;

//     if (
//         // check if Input is a Number, or an empty field.
//         isNaN(loan) ||
//         isNaN(rate) ||
//         isNaN(length) ||
//         !loan.length ||
//         !rate.length ||
//         !length.length
//     ) {
//         if (isNaN(loan) || !loan.length) {
//             document.getElementById("principal-loan").classList.add("error");
//         } else {
//             document.getElementById("principal-loan").classList.remove("error");
//         }
//         if (isNaN(rate) || !rate.length) {
//             document.getElementById("interest-rate").classList.add("error");
//         } else {
//             document.getElementById("interest-rate").classList.remove("error");
//         }
//         if (isNaN(length) || !length.length) {
//             document.getElementById("length-loan").classList.add("error");
//         } else {
//             document.getElementById("length-loan").classList.remove("error");
//         }
//         document.getElementById("payment").innerText = "";
//         return false;
//     } else {
//         document.getElementById("principal-loan").classList.remove("error");
//         document.getElementById("interest-rate").classList.remove("error");
//         document.getElementById("length-loan").classList.remove("error");
//     }

//     rate = rate / 100 / 12;
//     length *= 12;
//     let payment =
//         loan *
//         ((rate * Math.pow(1 + rate, length)) /
//             (Math.pow(1 + rate, length) - 1));

//     document.getElementById("payment").innerText =
//         "Your monthly mortgage payment will be $" + parseInt(payment);
// }

// r = r / 100 / 12;
// r = 2.4 / 100 / 12; // this equals 0.002

// n *= 12;
// 3 *= 12; // this equals 36

// https://frontendeval.com/questions/countdown-timer
// Create a countdown timer that allows the user to enter hours, minutes, and seconds.

// Once the timer has started, the input fields should be replaced with plain text that updates every second.

// The 'Start' button should be replaced with 'Pause' and 'Reset' buttons.

// Once the timer completes, it should alert the user with a native notification (using the Notification API), or fallback to an alert.

// REQUIREMENTS
// The 'Hours', 'Minutes', and 'Seconds' fields should not have visible labels, but they should be accessible and clearly labelled to a screen reader

// The input fields should use placeholder text as shown in the screenshot above

// Pressing 'Start' should start the timer, replace the input fields with plain text for the hours/minutes/seconds, and replace 'Start' with 'Pause' and 'Reset' buttons

// Pressing 'Pause' should pause the timer, and replace the 'Pause' button with a 'Start' button

// Pressing 'Reset' should revert the app back to the initial state

// While the timer is counting down, the numbers should be zero-padded (e.g. 01 vs 1)

// When the timer reaches zero, if the app has appropriate permissions, it should display a Notification that the timer is complete

// If the app doesn't have appropriate permissions, it should show an alert when the timer reaches zero

// Div     timer
// Div     real-time
// Div     input-time
// Input   HH
// Input   MM
// Input   SS
// Div     button-selection
// Button  start-button

// Functions to consider

// Functions in current order
// Decrease Time
// Change state when Buttons are clicked
// Calculate the Time
// Set the Start state before any Buttons are clicked
// Set Timeout state for all relevant states - Start, Pause, Reset and alert for empty time inputs

// Re-ordered functions
// Set the Start state before any Buttons are clicked
// Set Timeout state for all relevant states - Start, Pause, Reset and alert for empty time inputs
// Change state when Buttons are clicked
// Calculate the Time
// Decrease Time

/*
 * https://frontendeval.com/questions/countdown-timer
 *
 * Create a countdown timer that notifies the user
 */

// console.log("hello");

// let state = "start";
// let hh = 0;
// let mm = 0;
// let ss = 0;
// var interval;

// function startState(state, interval) {
//   console.log("start");

//   hh = document.querySelector(".HH").value;
//   mm = document.querySelector(".MM").value;
//   ss = document.querySelector(".SS").value;

//   if (hh === "") {
//       hh = 0;
//   }

//   if (mm === "") {
//       mm = 0;
//   }

//   if (ss === "") {
//     ss = 0;
//   }

// setTimeout(() => {
//     let timerElem = document.querySelector(".real-time");

//     timerElem.addEventListener("click", (event) => {

//       if ( event.target.className === "start-button" && (document.querySelector("HH").value !== "" ||
//       document.querySelector("MM").value !== "" ||
//       document.querySelector("SS").value !== "") {
//         state = "start";
//         startState(state, interval);

//       } else if ( start button clicked &&
//           HH input empty
//           MM input empty
//           SS input empty ) {
//           alert("Enter HH:MM:SS");

//       } else if () {
//           reset

//      } else if () {
//           pause
//   }

// }, 1000);

// document.getElementById("start-button").addEventListener("click", calculate);

// function calculate(timer) {
//     timer.preventDefault();
//     let hour = document.getElementsByClassName("HH").value;
//     let minute = document.getElementsByClassName("MM").value;
//     let seconds = document.getElementsByClassName("SS").value;

//     if (
//         // check if Input is a Number, or an empty field.
//         isNaN(hour) ||
//         isNaN(rate) ||
//         isNaN(length) ||
//         !hour.length ||
//         !rate.length ||
//         !length.length
//     ) {
//         if (isNaN(hour) || !hour.length) {
//             document.getElementById("HH").classList.add("error");
//         } else {
//             document.getElementById("HH").classList.remove("error");
//         }
//         if (isNaN(minute) || !minute.length) {
//             document.getElementById("MM").classList.add("error");
//         } else {
//             document.getElementById("MM").classList.remove("error");
//         }
//         if (isNaN(seconds) || !seconds.length) {
//             document.getElementById("SS").classList.add("error");
//         } else {
//             document.getElementById("SS").classList.remove("error");
//         }
//         return false;
//     } else {
//         document.getElementById("HH").classList.remove("error");
//         document.getElementById("MM").classList.remove("error");
//         document.getElementById("SS").classList.remove("error");
//     }
// }
