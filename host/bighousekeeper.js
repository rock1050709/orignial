
document.addEventListener("DOMContentLoaded", function () {
  const widget = document.getElementById("contactWidget");
  const closeBtn = document.querySelector(".close-btn");

  if (!widget || !closeBtn) return;

  closeBtn.addEventListener("click", function () {
    widget.style.display = "none";
  });
});

