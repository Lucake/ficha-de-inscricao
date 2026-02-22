import YAML from "https://cdn.jsdelivr.net/npm/yaml@2/+esm";

export async function loadYaml(path) {
  const res = await fetch(path);
  const text = await res.text();
  return YAML.parse(text);
}

export const getUrlParameter = (param) => {
  const project = window.location.search;
  const searchParams = new URLSearchParams(project);
  return searchParams.get(param);
};
