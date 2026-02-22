import { projects } from "./project_data.js";
import { updateInputs } from "./inputs.js";
import { updateConclusionMessage } from "./conclusion_message.js";
import { loadYaml } from "./utils.js";

const PROJECT_DATA_PATH = "/projects";
const LOGO = document.querySelector("#logo");
const BG_IMG = document.querySelector(".image img");
const PROJECT_FIELD = document.querySelector("#input-projeto");
const PROJECT_FIELD2 = document.querySelector("#input-projeto-2");

export const initProject = async (projectId) => {
  const projectData = await getProjectData(projectId);
  LOGO.src = projectData.logo;
  BG_IMG.src = projectData.image;
  document.documentElement.style.setProperty("--primary", projectData.color);
  PROJECT_FIELD.value = projectData.name;
  PROJECT_FIELD2.value = projectData.name;
  PROJECT_FIELD2.disabled = true;
  updateInputs(projectId);
  updateConclusionMessage(projectData.message);
};

export const getProjectData = async (projectId) => {
  const projectFileName = `${PROJECT_DATA_PATH}/${projectId}.yaml`;
  return await loadYaml(projectFileName);
};

getProjectData("esv");
