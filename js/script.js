function openWebsite(url) {
  window.open(url, '_blank');
}

  // popup--------------------------------------------------------------------
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const modalImage = document.querySelector('.modal-body img');

openModalButtons.forEach(button => {
button.addEventListener('click', () => {
  const modal = document.querySelector(button.dataset.modalTarget);
  const portfolioItem = button.closest('.portfolio-item');
  const imageSrc = portfolioItem.getAttribute('data-image-src');
  openModal(modal, imageSrc);
});
});

overlay.addEventListener('click', () => {
const modals = document.querySelectorAll('.modal.active');
modals.forEach(modal => {
  closeModal(modal);
});
});

closeModalButtons.forEach(button => {
button.addEventListener('click', () => {
  const modal = button.closest('.modal');
  closeModal(modal);
});
});

function openModal(modal, imageSrc) {
if (modal == null) return;
modalImage.src = imageSrc;
modal.classList.add('active');
overlay.classList.add('active');
}

function closeModal(modal) {
if (modal == null) return;
modal.classList.remove('active');
overlay.classList.remove('active');
}

  // download .................................
  
  function triggerDownload() {
    // Simulate a click on the hidden download link
    document.getElementById('download-link').click();
  }

  // Toggle Mobile Menu
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
"#FFFF00"
];

circles.forEach(function (circle, index) {
circle.x = 0;
circle.y = 0;
circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
coords.x = e.clientX;
coords.y = e.clientY;

});

function animateCircles() {

let x = coords.x;
let y = coords.y;

circles.forEach(function (circle, index) {
  circle.style.left = x - 12 + "px";
  circle.style.top = y - 12 + "px";
  
  circle.style.scale = (circles.length - index) / circles.length;
  
  circle.x = x;
  circle.y = y;

  const nextCircle = circles[index + 1] || circles[0];
  x += (nextCircle.x - x) * 0.3;
  y += (nextCircle.y - y) * 0.3;
});

requestAnimationFrame(animateCircles);
}

animateCircles();


var typed = new Typed(".autoType",{
  strings : ["Content Creator...","Data Analyst...","Business Analyst...","Python Developer...","Power BI developer "],
  typeSpeed :150,
  backSpeed :150,
  looped : true
})