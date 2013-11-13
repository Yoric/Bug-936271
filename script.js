function go(title) {
  console.log("Step 1", title);
  var frame = document.createElement("iframe");
  frame.src = "frame.html";
  document.body.appendChild(frame);

  frame.addEventListener("load", function() {
    console.log("Step 2", title);
    var content = frame.contentDocument;
    var label = content.createElement("div");
    label.textContent = title;
    content.body.appendChild(label);

    console.log("Step 3", title);
  });
}

go("Inserted at startup");
window.setTimeout(function() { go("Inserted after startup"); }, 100);

