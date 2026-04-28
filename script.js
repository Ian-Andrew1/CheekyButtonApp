document.getElementById("cheekyBtn").addEventListener("click", function () {
  fetch("comments.json")
    .then(response => response.json())
    .then(data => {
      const randomComment = data[Math.floor(Math.random() * data.length)];

      const output = document.getElementById("output");
      output.style.display = "block"; // show box on first click
      output.textContent = randomComment;
    })
    .catch(error => {
      const output = document.getElementById("output");
      output.style.display = "block";
      output.textContent = "Error loading comments!";
      console.error(error);
    });
});

