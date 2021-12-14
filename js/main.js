"use strict";

// Sofie
//FUNCTIONALITY
function goBack() {
    window.history.back();
}

function report() {
    alert("Problemet er rapporteret. Tryk på tilbage for at gå tilbage til siden du kom fra.")
}

// Sofie
//ACCORDIONS
var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    }
    
    else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



// SLIDER 
// Simone og Maria
//Review Slider
const reviews = document.querySelectorAll(".review");
let currentReview = 0;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

for (let i = 0; i < reviews.length; i++) {
  reviews[currentReview].style.display = "block";
}
//Previous Review Function
function prevReview() {
  for (let i = 0; i < reviews.length; i++) {
    reviews[currentReview].style.display = "none";
  }
  //currentReview Update
  currentReview -= 1;
  if (currentReview === -1) {
    currentReview = reviews.length - 1;
  }

  for (let i = 0; i < reviews.length; i++) {
    reviews[currentReview].style.display = "block";
  }
}
//Next Review Function
function nextReview() {
  for (let i = 0; i < reviews.length; i++) {
    reviews[currentReview].style.display = "none";
  }
  //currentReview Update
  currentReview += 1;
  if (currentReview === reviews.length) {
    currentReview = 0;
  }

  for (let i = 0; i < reviews.length; i++) {
    reviews[currentReview].style.display = "block";
  }
}

prev.addEventListener("click", prevReview);
next.addEventListener("click", nextReview);