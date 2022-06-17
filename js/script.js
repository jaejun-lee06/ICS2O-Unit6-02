// Created by: Jaejun Lee
// Created on: June 2022
// This file contains the JS functions for index.html


/**
 * Check servie worker.
*/
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-02/sw.js", {
    scope: "/ICS2O-Unit6-02/",
  })
}

;("use strict")
/**
 * This function makes cookie clicker.
 */
function cookieClicked() {
  if (localStorage.clicks) {
    localStorage.clicks = Number(localStorage.clicks) + 1
    } else {
      localStorage.clicks = + 1;
  }

  document.getElementById("answers").innerHTML = "Your clicks: " + localStorage.clicks
}