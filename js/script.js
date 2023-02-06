//==============================Scroll Effect===================================
mainHr = document.getElementsByClassName("main-hr");
window.onscroll = function () {
  'use strict';
  function scrollBehavior (section, action) {
    var rect = section.getBoundingClientRect();
    if (rect.top <= ((window.innerHeight * 70)/100)) {
      switch (action) {
        case "about":
          linkActivation (action);
          aboutShow ();
          break;
        case "bar":
          linkActivation (action);
          barShow();
          break;
        case "row0":
          linkActivation ("cold");
          showRow (0);
          break;
        case "row1":
          showRow (1);
          break;
        case "row2":
          showRow (2);
          break;
        case "hot0":
          linkActivation ("hot");
          showCard (0);
          break;
        case "hot1":
          showCard (1);
          break;
        case "hot2":
          showCard (2);
          break;
        case "contact":
          linkActivation (action);
          showContact();
          break;
        case "slider":
          linkActivation ("slider");
          break;
      }
    } else {
      switch (action) {
        case "about":
          aboutHide ();
          break;
        case "bar":
          barHide();
          break;
        case "row0":
          hideRow (0);
          break;
        case "row1":
          hideRow (1);
          break;
        case "row2":
          hideRow (2);
          break;
        case "hot0":
          hideCard (0);
          break;
        case "hot1":
          hideCard (1);
          break;
        case "hot2":
          hideCard (2);
          break;
        case "contact":
          hideContact();
          break;
      }
    }
  }
  scrollBehavior (MYSLIDER, "slider");
  scrollBehavior (MYABOUT, "about");
  scrollBehavior (MYBAR, "bar");
  for (var i = 0; i < coldRows.length; i++){
    scrollBehavior (coldRows[i], "row" + i.toString());
  }
  for (var i = 0; i < hotRows.length; i++){
    scrollBehavior (hotRows[i], "hot" + i.toString());
  }
  scrollBehavior (MYCONTACT, "contact");
};
//==============================Scroll Effect===================================
//==============================Start Navbar====================================
const MYNAVBAR = document.getElementById("navbar");
var navLinks   = document.getElementsByClassName("nav-link");
function linkActivation (linkAd) {
  for (var i = 0; i < navLinks.length; i++){
    navLinks[i].classList.remove("active");
  }
  for (var i = 0; i < navLinks.length; i++){
    if (navLinks[i].getAttribute("data-active") == linkAd)
      navLinks[i].classList.add("active");
  }
}
//===============================End Navbar=====================================
//==============================Start Slider====================================
const MYSLIDER    = document.getElementById("slider");
var sliderContent = document.getElementsByClassName("slider-content");
var sliderWidth;
if (window.innerWidth > 768)
  sliderWidth = "25%";
else
  sliderWidth = "0%";
MYSLIDER.style.height = (window.innerHeight.toString()) + "px";
window.onresize = function () {
  'use strict';
  MYSLIDER.style.height = (window.innerHeight.toString()) + "px";
  if (window.innerWidth > 768)
    sliderWidth = "25%";
  else
    sliderWidth = "0%";
};
window.onload = function () {
  'use strict';
  sliderContent[0].classList.add("slider-show");
  sliderContent[0].classList.remove("slider-hide");
  setTimeout(function () {
    'use strict';
    MYSLIDER.style.opacity = 1;
    sliderContent[0].style.left = sliderWidth;
  }, 500);
};
var imgStarts = 2;
var slidingHandler =  setInterval (slidingCounter, 8000);
function slidingCounter () {
  'use strict';
  if (imgStarts > 5)
    imgStarts = 1;
  sliding (imgStarts);
  imgStarts++;
}
function sliding (imgNum) {
  'use strict';
  var imgText = "url('imgs/slider" + imgNum.toString() + ".jpg')",
      thisSlider = "";
  for(var i = 0; i < sliderContent.length; i++){
    if (sliderContent[i].classList.contains("slider-show"))
      thisSlider = sliderContent[i];
  }
  thisSlider.style.left = "-100%";
  MYSLIDER.style.opacity = 0;
  setTimeout (function () {
    'use strict';
    MYSLIDER.style.backgroundImage = imgText;
    if (thisSlider != thisSlider.parentElement.lastElementChild){
      thisSlider.nextElementSibling.classList.add("slider-show");
      thisSlider.nextElementSibling.classList.remove("slider-hide");
    } else {
      thisSlider.parentElement.firstElementChild.classList.add("slider-show");
      thisSlider.parentElement.firstElementChild.classList.remove("slider-hide");
    }
    thisSlider.classList.remove("slider-show");
    thisSlider.classList.add("slider-hide");
    setTimeout (function () {
      'use strict';
      MYSLIDER.style.opacity = 1;
      if (thisSlider != thisSlider.parentElement.lastElementChild)
        thisSlider.nextElementSibling.style.left = sliderWidth;
      else
        thisSlider.parentElement.firstElementChild.style.left = sliderWidth;
    }, 500);
  }, 2000);
}
for (var i = 0; i <sliderContent.length; i++){
  sliderContent[i].children[3].onmouseenter = function () {
    clearInterval(slidingHandler);
  };
  sliderContent[i].children[3].onmouseleave = function () {
    slidingHandler =  setInterval (slidingCounter, 8000);
    slidingCounter();
  };
}
//================================End Slider====================================
//================================Start About===================================
const MYABOUT = document.getElementById("about");
var aboutSections = document.getElementsByClassName("about-section");
function aboutShow () {
  'use strict';
  for (var i = 0; i < aboutSections.length; i++){
    aboutSections[i].style.opacity = 1;
  }
  MYNAVBAR.style.opacity = "1";
  mainHr[0].style.width = "100%";
}
function aboutHide () {
  'use strict';
  for (var i = aboutSections.length - 1; i >= 0; i--){
    aboutSections[i].style.opacity = 0;
  }
  MYNAVBAR.style.opacity = "0";
  mainHr[0].style.width = "0%";
}
//=================================End About====================================
//================================Start Bar=====================================
const MYBAR = document.getElementById("bar");
var barContent = document.getElementsByClassName("bar-content");
function barShow () {
  'use strict';
  barContent[0].children[0].style.opacity = "1";
  barContent[0].children[2].style.opacity = "1";
  barContent[0].children[0].style.left = "0";
  barContent[0].children[2].style.right = "0";
  barContent[0].children[1].style.width = "100%";
  barContent[0].children[3].style.opacity = "1";
}
function barHide () {
  'use strict';
  barContent[0].children[0].style.left = "-200%";
  barContent[0].children[2].style.right = "-200%";
  barContent[0].children[0].style.opacity = "0";
  barContent[0].children[2].style.opacity = "0";
  barContent[0].children[1].style.width = "0%";
  barContent[0].children[3].style.opacity = "0";
}
//=================================End Bar======================================
//================================Start Cold====================================
const MYCOLD = document.getElementById("cold");
var coldRows = document.getElementsByClassName("cold-row");
function showRow (rowNum) {
  'use strict';
  if (rowNum == 0){
    mainHr[1].style.width = "100%";
  }
  for (var j = 0; j < coldRows[rowNum].children.length; j++) {
    coldRows[rowNum].children[j].style.opacity = "1";
  }
}
function hideRow (rowNum) {
  'use strict';
  if (rowNum == 0){
    mainHr[1].style.width = "0%";
  }
  for (var j = 0; j < coldRows[rowNum].children.length; j++) {
    coldRows[rowNum].children[j].style.opacity = "0";
  }
}
//=================================End Cold=====================================
//================================Start Hot=====================================
const MYHOT = document.getElementById("hot");
var hotRows = document.getElementsByClassName("hot-row");
function showCard (hotNum){
  if (hotNum == 0){
    mainHr[2].style.width = "100%";
  }
  hotRows[hotNum].firstElementChild.firstElementChild.style.left = "0";
  hotRows[hotNum].children[1].firstElementChild.style.top = "0";
  hotRows[hotNum].lastElementChild.firstElementChild.style.right = "0";
}
function hideCard (hotNum) {
  if (hotNum == 0){
    mainHr[2].style.width = "0%";
  }
  hotRows[hotNum].firstElementChild.firstElementChild.style.left = "-110%";
  hotRows[hotNum].children[1].firstElementChild.style.top = "-100%";
  hotRows[hotNum].lastElementChild.firstElementChild.style.right = "-110%";
}
//=================================End Hot======================================
//===============================Start Contact==================================
const MYCONTACT = document.getElementById("contact");
var myEye = document.getElementById("my-eye"),
    myPass = document.getElementById("my-pass"),
    myHrsInContact = [3, 4, 5];
function showContact () {
  MYCONTACT.style.opacity = "1";
  for (var i = 0; i < 3; i++){
    mainHr[myHrsInContact[i]].style.width = "100%";
  }
}
function hideContact () {
  MYCONTACT.style.opacity = "0";
  for (var i = 0; i < 3; i++){
    mainHr[myHrsInContact[i]].style.width = "0%";
  }
}
myEye.onmouseenter = function () {
  'use strcit';
  myPass.type = "text";
  this.children[0].children[0].classList.remove("fa-eye-slash");
  this.children[0].children[0].classList.add("fa-eye");
};
myEye.onmouseleave = function () {
  'use strcit';
  myPass.type = "password";
  this.children[0].children[0].classList.remove("fa-eye");
  this.children[0].children[0].classList.add("fa-eye-slash");
};
//================================End Contact===================================
//==========================Start Color Controller==============================
const CLICKER = document.getElementById("controller-clicker"),
      BODY    = document.getElementById("body"),
      BLACK   = document.getElementById("black-mode"),
      WHITE   = document.getElementById("white-mode");
CLICKER.onclick = function () {
  "use strict";
  if (this.parentElement.classList.contains("active"))
    this.parentElement.style.right = "-105px";
  else
    this.parentElement.style.right = "0";
  this.parentElement.classList.toggle("active");
};
BLACK.onclick = function () {
  'use strict';
  BODY.setAttribute("class", "");
};
WHITE.onclick = function () {
  'use strict';
  BODY.setAttribute("class", "white-mode");
};
//===========================End Color Controller===============================
