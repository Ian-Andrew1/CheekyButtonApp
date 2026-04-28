let comments = [];

fetch("comments.json")
  .then(response => response.json())
  .then(data => {
    comments = data.comments;
  });

document.getElementById("cheekyBtn").onclick = () => {
  if (comments.length === 0) {
    document.getElementById("output").textContent = "No comments loaded yet!";
    return;
  }

  const random = comments[Math.floor(Math.random() * comments.length)];
  document.getElementById("output").textContent = random;
};

