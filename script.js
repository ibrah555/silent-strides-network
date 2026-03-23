// Wave Cursor Effects
const waveCursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    waveCursor.style.top = `${e.pageY}px`;
    waveCursor.style.left = `${e.pageX}px`;
});

// Carousel Functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Smooth Scrolling
const smoothScrollLinks = document.querySelectorAll('a.smooth-scroll');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Particle Animations
function createParticle(e) {
    const particle = document.createElement('span');
    particle.classList.add('particle');
    document.body.appendChild(particle);
    particle.style.left = `${e.pageX}px`;
    particle.style.top = `${e.pageY}px`;
    particle.style.animationName = 'pop';
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

document.addEventListener('click', createParticle);

// All Interactive Features
function init() {
    waveCursor;
    showSlide(currentIndex);
}

init();
