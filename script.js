document.getElementById("cheekyBtn").addEventListener("click", function () {
  fetch("comments.json")
    .then(response => response.json())
    .then(data => {
      const randomComment = data[Math.floor(Math.random() * data.length)];
      document.getElementById("output").textContent = randomComment;
    })
    .catch(error => {
      document.getElementById("output").textContent = "Error loading comments!";
      console.error(error);
    });
});
