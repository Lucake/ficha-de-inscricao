import { subtractYearsFromToday } from "./utils.js";

export const updateInputs = (projectData) => {
  initEstadoSelect(projectData.locations);
  initProjectInputs(projectData.name);
  initBirthdateInput(projectData.age);
};

const setSelectOptions = (
  selector,
  options,
  placeholder = "Selecione uma opção",
) => {
  const selectDom = document.querySelector(selector);
  const placeHolderHTML = `<option value="" disabled selected>${placeholder}</option>`;
  let optionsHTML = options
    .map(
      (optionAttrs) =>
        `<option value="${optionAttrs.value}">${optionAttrs.label}</option>`,
    )
    .join("\n");

  selectDom.innerHTML = placeHolderHTML + optionsHTML;
};

const initProjectInputs = (projectName) => {
  const projectField = document.querySelector("#input-projeto");
  const projectField2 = document.querySelector("#input-projeto-2");

  projectField.value = projectName;
  projectField2.value = projectName;
};

const initBirthdateInput = (age) => {
  const dateField = document.querySelector("#input-nascimento-2");
  const label = document.querySelector("label[for=input-nascimento-2]");
  const startYear = subtractYearsFromToday(age.max);
  const endYear = subtractYearsFromToday(age.min);
  dateField.min = startYear.toISOString().split("T")[0];
  dateField.max = endYear.toISOString().split("T")[0];
  label.innerText += ` (entre ${age.min} e ${age.max}) anos`;
};

const initEstadoSelect = (estados) => {
  const placeholder = "Selecione seu estado";
  const selectId = "#input-estado-2";
  const attributes = estados.map((estado) => ({
    label: estado.state,
    value: estado.state,
  }));

  setSelectOptions(selectId, attributes, placeholder);

  document.querySelector(selectId).addEventListener("change", (e) => {
    const estado = document.querySelector(selectId).value;
    const turmas = estados.filter((e) => e.state == estado)[0].cities;
    setTurmaOptions(turmas);
  });
};

const setTurmaOptions = (turmas) => {
  const placeholder = "Selecione o núcleo";
  const selectId = "#input-turma-2";
  const attributes = turmas.map((nucleo) => ({
    label: nucleo,
    value: nucleo,
  }));
  setSelectOptions(selectId, attributes, placeholder);
};
