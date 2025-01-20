// index.js
import "./scss/styles.scss";

import { renderContactsPage } from "./modules/Contacts";
import { renderHomePage } from "./modules/Home";
import { renderMenuPage } from "./modules/Menu";
import { ready } from "./modules/ready";

const navigation = document.getElementById("navigation");
const content = document.getElementById("content");
const buttonHome = document.getElementById("button-home");
const buttonMenu = document.getElementById("button-menu");
const buttonContactUs = document.getElementById("button-contacts");

let currentName = "home";

function clearCheckedTab() {
  [...navigation.querySelectorAll(".button")].forEach((element) => {
    if (element.classList.contains("checked")) {
      element.classList.remove("checked");
    }
  });
}

function updateTab(node) {
  const name = node.dataset.name;
  if (name === currentName) {
    return;
  }
  currentName = name;
  clearCheckedTab();
  node.classList.add("checked");
}

function runApp() {
  ready(content);

  buttonHome.addEventListener("click", function () {
    content.innerHTML = "";
    updateTab(this);
    renderHomePage(content);
  });

  buttonMenu.addEventListener("click", function () {
    content.innerHTML = "";
    updateTab(this);
    renderMenuPage(content);
  });

  buttonContactUs.addEventListener("click", function () {
    content.innerHTML = "";
    updateTab(this);
    renderContactsPage(content);
  });
}

runApp();
