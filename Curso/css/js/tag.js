const colors = {
  p: "#388e3c",
  div: "#1565c0",
  span: "#e53935",
  section: "#f67809",
  ul: "#5e35b1",
  ol: "#fbc02d",
  header: "#d81b60",
  nav: "#64dd17",
  main: "#00acc1",
  footer: "#304ffe",
  form: "#9f6581",
  body: "#25b6da",
  padrao: "#616161",
  get(tag) {
    return this[tag] ? this[tag] : this.padrao;
  },
};

document.querySelectorAll(".tag").forEach((e) => {
  const label = document.createElement("label");
  const nameTag = e.tagName.toLocaleLowerCase();

  e.style.borderColor = colors.get(nameTag);

  label.style.display = "inline";
  
  if (!e.classList.contains('nolabel')) {
    label.innerHTML = nameTag;
    label.style.backgroundColor = colors.get(nameTag);
    
    e.insertBefore(label, e.childNodes[0]);
  }
});

function showLabel() {

  document.querySelectorAll("label").forEach((w) => {
    w.style.display === "inline"
      ? (w.style.display = "none")
      : (w.style.display = "inline");
  });
  const button = document.querySelector("button");
  if (button.innerText === "Esconder Labels") {
    button.innerHTML = "Mostrar Labels";
  } else button.innerHTML = "Esconder Labels";
}
document.querySelector("button").onclick = () => showLabel();
