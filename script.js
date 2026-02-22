import { initForms } from "./modules/form.js";
import { projects } from "./modules/project_data.js";
import { initProject } from "./modules/project.js";
import { initProjectsInput } from "./modules/inputs.js";
import { initInputs } from "./modules/mobilizador.js";
import { debug } from "./modules/testing_tools.js";
import { getUrlParameter } from "./modules/utils.js";

const DEBUG = true;

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("body").classList.remove("preload");

  initForms();

  initProjectsInput();
  const projeto = getUrlParameter("projeto");
  const mobilizador = getUrlParameter("mobilizador");
  if (mobilizador) {
    initInputs(mobilizador);
  }
  if (projeto && projects[projeto]) {
    initProject(projeto);
  }

  if (DEBUG) {
    debug();
  }
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
