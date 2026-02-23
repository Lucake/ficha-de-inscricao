import { initForms } from "./modules/form.js";
import { initProject } from "./modules/project.js";
import { initInputs } from "./modules/mobilizador.js";
import { debug } from "./modules/testing_tools.js";
import { getUrlParameter } from "./modules/utils.js";

const DEBUG = true;

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("body").classList.remove("preload");

  initForms();

  const projeto = getUrlParameter("projeto");
  const mobilizador = getUrlParameter("mobilizador");
  if (mobilizador) {
    initInputs(mobilizador);
  }
  if (projeto) {
    initProject(projeto);
  }

  if (DEBUG) {
    debug();
  }
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

[...document.querySelectorAll("input")].forEach((e) => {
  e.addEventListener("blur", (el) => el.target.reportValidity());
});
