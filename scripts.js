"use strict";

const arrow = document.querySelector("#moreInfo");
const bio = document.querySelector(".bio");
const showBio = () => bio.classList.add("show");

arrow.addEventListener("click", function() {
  showBio();
})

var scrollY = 0;
var distance = 10;
var speed = 24;

const bannerArrow = document.querySelector("#bannerArrow");
bannerArrow.addEventListener("click", function(){
  document.querySelector(".banner__content").scrollIntoView({
    behavior: "smooth"
  })
})

const fish = document.querySelector("#showProjects");
const projects = document.querySelector(".experience");
const showProjects = () => projects.classList.add("show");
fish.addEventListener("click", function() {
  showProjects();
  fish.scrollIntoView({
    behavior: "smooth"
  })
})