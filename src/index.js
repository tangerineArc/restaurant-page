"use strict";

import "./style.css";

import createHomeDOM from "./components/home.js";
import createAboutDOM from "./components/about.js";

const contentContainer = document.querySelector("#content");
const navButtons = document.querySelectorAll("nav button");
const [homeButton, menuButton, aboutButton] = navButtons;

createHomeDOM(contentContainer);

navButtons.forEach(button => {
    button.addEventListener("click", event => {
        if (button.className === "selected-tab") return;

        navButtons.forEach(btn => {
            btn.className = "";
        });
        button.className = "selected-tab";

        changeContent(button.dataset.label);
    });
});

function changeContent(label) {
    switch (label) {
        case "home":
            createHomeDOM(contentContainer);
            break;
        case "menu":
            break;
        case "about":
            createAboutDOM(contentContainer);
            break;
    }
}