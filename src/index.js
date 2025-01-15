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

function runApp() {
  ready(content);

  let currentPage = "home";
}

runApp();
