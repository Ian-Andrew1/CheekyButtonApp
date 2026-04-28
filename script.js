document.getElementById("cheekyBtn").addEventListener("click", function () {
  fetch("comments.json")
    .then(response => response.json())
    .then(data => {
      const comments = data.comments; // FIX: use the comments array
      const randomComment = comments[Math.floor(Math.random() * comments.length)];

      const output = document.getElementById("output");
      output.textContent = randomComment;
      output.style.display = "block";
    })
    .catch(error => {
      const output = document.getElementById("output");
      output.textContent = "Error loading comments!";
      output.style.display = "block";
      console.error(error);
    });
});


