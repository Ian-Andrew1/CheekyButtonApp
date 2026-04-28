let comments = [];

fetch("comments.json")
  .then(response => response.json())
  .then(data => {
    comments = data; // FIX: your JSON is a plain array
  });

document.getElementById("cheekyBtn").onclick = () => {
  if (comments.length === 0) {
    document.getElementById("output").textContent = "No comments loaded yet!";
    document.getElementById("output").style.display = "block";
    return;
  }

  const random = comments[Math.floor(Math.random() * comments.length)];
  document.getElementById("output").textContent = random;
  document.getElementById("output").style.display = "block";
};
