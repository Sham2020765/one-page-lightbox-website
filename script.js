const modal = document.getElementById("lightboxModal");
const modalImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll('.gallery-img').forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = image.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
