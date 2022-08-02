function paint(pixel_id) {
  const pixel = document.getElementById(pixel_id);
  const picker = document.getElementById("picker");
  pixel.style.backgroundColor = picker.value;
}

function create_canvas() {
  const canvas = document.getElementById("canvas");
  const height = parseInt(document.getElementById("height").value);
  const width = parseInt(document.getElementById("width").value);
  let html = "";
  for (x = 0; x < height; x++) {
    html += '<div class ="row">';
    for (y = 0; y < width; y++) {
      html +=
        '<div class="pixel" id="' +
        String(x) +
        String(y) +
        '" onclick="paint(\'' +
        String(x) +
        String(y) +
        "')\"></div>";
    }
    html += "</div>";
  }
  canvas.innerHTML = html;
}
