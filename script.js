function go() {
  var frame = document.createElement("iframe");
  frame.src = "frame.html";
  frame.id = "frame";
  document.body.appendChild(frame);

  var button = document.getElementById("button");
  button.addEventListener("click", function() {
    var content = frame.contentDocument;
    var input = content.getElementById("input");
    input.value = "Not the default value";
  });
}

go();

