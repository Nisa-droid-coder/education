function flipCard() {
  const front = document.getElementById("card-front");
  const back = document.getElementById("card-back");
  if (front.style.display === "none") {
    front.style.display = "block";
    back.style.display = "none";
  } else {
    front.style.display = "none";
    back.style.display = "block";
  }
}

function markKnow() {
  alert("Marked as known!");
}
function markDontKnow() {
  alert("Marked as don’t know.");
}

function answer(choice) {
  const result = document.getElementById("quiz-result");
  if (choice === 4) {
    result.textContent = "Correct!";
  } else {
    result.textContent = "Try again.";
  }
}

function updateProgress() {
  const checks = document.querySelectorAll("#checklist input[type='checkbox']");
  const checked = Array.from(checks).filter(chk => chk.checked).length;
  const percent = (checked / checks.length) * 100;
  document.getElementById("progress").style.width = percent + "%";
}

function renderMarkdown() {
  const text = document.getElementById("markdown").value;
  const html = text
    .replace(/### (.*$)/gim, '<h3>$1</h3>')
    .replace(/## (.*$)/gim, '<h2>$1</h2>')
    .replace(/# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
    .replace(/\*(.*)\*/gim, '<i>$1</i>')
    .replace(/\n/gim, '<br>');
  document.getElementById("preview").innerHTML = html;
}
