document.getElementById("cheekyBtn").addEventListener("click", function () {
  fetch("comments.json")
    .then(response => response.json())
    .then(data => {
      const randomComment = data[Math.floor(Math.random() * data.length)];

      const output = document.getElementById("output");
      output.textContent = randomComment;   // put text in first
      output.style.display = "block";       // THEN show the box
    })
    .catch(error => {
      const output = document.getElementById("output");
      output.textContent = "Error loading comments!";
      output.style.display = "block";
      console.error(error);
    });
});


