"use strict";

//FUNCTIONALITY

function goBack() {
    window.history.back();
}

function report() {
    alert("Problemet er rapporteret. Tryk på tilbage for at gå tilbage til siden du kom fra.")
}

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
