const modal = document.getElementById("lightboxModal");
const modalImg = document.getElementById("imgModal");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll('.lightbox-trigger').forEach(image => {
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
