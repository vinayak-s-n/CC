// 1 my varaibles
var variants = [];
var topFonts = [];
var fontFamily = "";
var topFonts = "";
var __KEY__ = "AIzaSyCAot5L1QE1P3hTwaijxSFDShX8QZ6UqsQ";
var __URL__ = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${__KEY__}`;
var userInput = "sasasasasasasass";
// 2 selecting my dom elements

var h1 = document.querySelector("h1");
// var headLinks = document.querySelector("link");
var loader = document.querySelector(".loader-div");
var convert = select("#convert-button");

// 1 my functions

// 2 My function to select elments

function select(selector) {
  return document.querySelector(selector);
}

// 2 hide something funciton

function hide(element) {
  element.style.display = "none";
}

// 2 fetching the data

fetch(__URL__)
  .then(function (response) {
    return response;
  })
  .then(function (response) {
    console.log("hi");
    return response.json();
  })
  .then(function (data) {
    topFonts = data.items.slice(0, 100);
    sideBarAdd(topFonts);
    fontFamily = topFonts[4].family;
    console.log(fontFamily);
    variants = topFonts[4].variants;
    addFontCard(fontFamily);

    sideFunc();
    hide(loader);
  })
  .catch(function (reject) {
    alert("OOPS, couldn't fetch Data from Api. Error Code: " + reject);
  });
// 2 adding my side bar elements function

function sideBarAdd(topFonts) {
  for (q of topFonts) {
    select(".side-bar-contents-div").insertAdjacentHTML(
      "beforeend",
      `<div class="side-bar-elements" id="side">${q.family}</div>`
    );
  }
}
// 2 hover function for side elements

function sideFunc() {
  var fontChange = "";

  var sideElements = select(".side-bar-contents-div");
  sideElements.addEventListener("mouseover", function () {
    var isclicked = event.target.matches(".side-bar-elements");
    if (isclicked === true) {
      fontChange = event.target.innerText;
      var ele = select("#side-element-link");
      // console.log(ele);
      ele.setAttribute(
        "href",
        `https://fonts.googleapis.com/css2?family=${fontChange}&display=swap`
      );
      // console.log(ele);
      event.target.style.fontFamily = `${fontChange}, "Lucida Sans"`;
      var ele2 = document.getElementsByClassName("font-container");
      for (ele2 of ele2) {
        ele2.style.fontFamily = fontChange;
      }
      var ele3 = document.getElementsByClassName("font-title");
      for (ele2 of ele3) {
        ele2.innerText = "";
        ele2.innerText = fontChange;
      }
    }
  });

  sideElements.addEventListener("click", function () {
    select(".side-bar-indi-font").innerText = "";
    select(".side-bar-indi-font").style.fontFamily = fontChange;
    select(".side-bar-indi-font").innerText = fontChange;
    select(".side-bar-indi").style.visibility = "visible";
    var ele2 = document.getElementsByClassName("font-container");
    for (ele2 of ele2) {
      ele2.style.fontFamily = fontChange;
    }
    var ele3 = document.getElementsByClassName("font-title");
    for (ele2 of ele3) {
      ele2.innerText = "";
      ele2.innerText = fontChange;
    }
  });
}

select(".close-indi").addEventListener("click", function () {
  select(".side-bar-indi").style.visibility = "hidden";
});
var ele4 = document.getElementsByClassName("font-container");
for (ele4 of ele4) {
  console.log(ele4);
}

// 2 adding font cards funtions

function addFontCard(fontFamily) {
  var ele = select("#side-element-link-residue");
  console.log(ele);
  ele.setAttribute(
    "href",
    `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`
  );
  for (vale of variants) {
    var numbers = /^[-+]?[0-9]+$/;
    var value = vale.slice(0, 3);

    if (value.match(numbers) && value !== weights) {
      select(".showcase-container").insertAdjacentHTML(
        "beforeend",
        `
    <div class="font-style-card">
    <div class="font-style-card-left">
      <h2>Font Style : <span class="font-title">${fontFamily}</span> </h2>
      <div class="font-container" style="font-family:${fontFamily};font-weight: ${value}; ">This is How Your font will look</div>
    </div>
    <div class="font-style-card-right">
      <h3 >
        Font-Size <small>:in pixels</small>
      </h3>
      <div class="fontsize">30px</div>
      <h3 id="font-weight">Font-weight : ${value}</h3>
    </div">
    `
      );
    }
    var weights = value;
  }
}

// 1 font changer function

function change(family1) {
  h1.style.topFonts = `${family1}`;
}

// console.log(headLinks);
// setTimeout(function () {
//   headLinks.setAttribute(
//     "href",
//     `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`
//   );
//   change(topFonts);
// }, 4000);

// change("Metal Mania");

// select("#font-weight").style.fontWeight = 100;
