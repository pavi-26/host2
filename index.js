const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
  container.addEventListener("click", function () {
    const data = this.nextElementSibling; // get data
    data.classList.toggle("show");
    const icon = this.querySelector("i");
    icon.classList.toggle("animate");
  });
});