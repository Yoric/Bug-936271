function go(title) {
  var frame = document.createElement("iframe");
  frame.src = "frame.html";
  document.body.appendChild(frame);

  frame.addEventListener("load", function() {
    var content = frame.contentDocument;
    var label = content.createElement("div");
    label.textContent = title;
    content.body.appendChild(label);
  });
}

go("Inserted at startup");
window.setTimeout(function() { go("Inserted after 100ms"); }, 100);
window.setTimeout(function() { go("Inserted after 1000ms"); }, 1000);
