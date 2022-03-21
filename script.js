const generatedColors = document.getElementById("user-colors");
const btn = document.getElementById("generate-scheme");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  generatedColors.innerHTML = "";
  let userColor = document.getElementById("color-seed").value.replace("#", "");
  let userSchemeMode = document.getElementById("scheme-mode").value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${userColor}&mode=${userSchemeMode}&count=4`
  )
    .then((res) => res.json())
    .then((data) => {
      colorsArray = data.colors;
      for (let i = 0; i < colorsArray.length; i++) {
        generatedColors.innerHTML += `
        <div class="color" onclick="copyColor(this)">
        <div class="colorHex" id="hex">${colorsArray[i].hex.value}</div>
        <div class="colorBg" style="background-color:${colorsArray[i].hex.value};"</div>
        </div>`;
      }
    });
});

// copy color hex code to clipboard
function copyColor(that) {
  var inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = that.textContent;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
  alert("Color copied to clipboard");
}
