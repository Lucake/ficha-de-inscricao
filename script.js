import { initForms } from "./modules/form.js";
import { projects } from "./modules/project_data.js";
import { initProject } from "./modules/project.js";
import { initProjectsInput } from "./modules/inputs.js";
import { initInputs } from "./modules/mobilizador.js";
import { debug } from "./modules/testing_tools.js";

const DEBUG = true;

const getUrlParameter = (param) => {
  const project = window.location.search;
  const searchParams = new URLSearchParams(project);
  return searchParams.get(param);
};

window.addEventListener("DOMContentLoaded", async (event) => {
  document.querySelector("body").classList.remove("preload");
  window.scrollTo(0, 0);

  await initForms();

  initProjectsInput();
  const projeto = getUrlParameter("projeto");
  const mobilizador = getUrlParameter("mobilizador");
  if (mobilizador) {
    initInputs(mobilizador);
  }
  if (projeto && projects[projeto]) {
    await initProject(projeto);
  }

  if (DEBUG) {
    debug();
  }
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
