import YAML from "https://cdn.jsdelivr.net/npm/yaml@2/+esm";

export async function loadYaml(path) {
  const res = await fetch(path);
  const text = await res.text();
  return YAML.parse(text);
}
