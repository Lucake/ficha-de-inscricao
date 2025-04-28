import { projects } from "./project_data.js";

const PROJECT_FIELD2 = document.querySelector("#input-projeto-2");

export const updateInputs = (projectName) => {
  setEstadoOptions(projectName);
  setTurmaOptions(projectName);
  setIndicacaoOptions(projectName);
  hideDisabledFields(projectName);
};

export const initProjectsInput = () => {
  Object.keys(projects).forEach((e) => {
    const htmlString = `<option value="${projects[e].name}" data-name="${e}">${projects[e].name}</option>`;
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    PROJECT_FIELD2.append(div.firstChild);
  });

  PROJECT_FIELD2.addEventListener("change", (e) => {
    const projectName = [...PROJECT_FIELD2.querySelectorAll("option")].filter(
      (e) => e.text == PROJECT_FIELD2.value
    )[0].dataset.name;
    updateInputs(projectName);
  });
};

const setTurmaOptions = (projectName) => {
  const SELECT = document.querySelector("#input-turma-2");
  SELECT.innerHTML =
    '<option value="" disabled selected>Selecione uma turma</option>';
  projects[projectName].cities.forEach((e) => {
    const htmlString = `<option value="${e.city}" data-state="${e.state}">Núcleo - ${e.city}</option>`;
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    SELECT.append(div.firstChild);
  });
};

const filterTurma = (state) => {
  const SELECT = document.querySelector("#input-turma-2");
  SELECT.querySelector("option").selected = true;
  SELECT.querySelectorAll("option").forEach((opt) => (opt.hidden = false));
  SELECT.querySelectorAll(
    `option:not([data-state="${state}"]):not(:disabled)`
  ).forEach((opt) => (opt.hidden = true));
};

const setEstadoOptions = (projectName) => {
  const SELECT = document.querySelector("#input-estado-2");
  SELECT.innerHTML =
    '<option value="" disabled selected>Selecione um estado</option>';
  // set used to avoid duplicates
  let states = [...new Set(projects[projectName].cities.map((e) => e.state))];
  states.forEach((e) => {
    const htmlString = `<option value="${e}">${e}</option>`;
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    SELECT.append(div.firstChild);
  });

  SELECT.addEventListener("change", (e) => {
    filterTurma(SELECT.value);
  });
};

const setIndicacaoOptions = (projectName) => {
  const SELECT = document.querySelector("#input-como-soube-2");
  const options = projects[projectName].howDidYouKnow;

  if (options.length == 0) return;

  //clear other projects custom options
  SELECT.querySelectorAll(".custom").forEach((e) => e.remove());

  options.forEach((e) => {
    const htmlString = `<option value="${e}" class="custom">${e}</option>`;
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    SELECT.append(div.firstChild);
  });
};

const hideDisabledFields = (projectName) => {
  const fields = projects[projectName].disabledFieldsId;

  //reset form
  document.querySelectorAll(".disabled").forEach((el) => {
    el.required = true;
    el.classList.remove("disabled", "hidden");
  });

  if (fields.length == 0) return;

  fields.forEach((id) => {
    let element = document.querySelector(`#${id}`);
    element.required = false;
    element.value = "";
    element.classList.add("disabled", "hidden");
    document
      .querySelector(`label[for=${id}]`)
      .classList.add("disabled", "hidden");
  });
};
