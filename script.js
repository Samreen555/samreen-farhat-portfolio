/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-links a');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 100,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav-links a[href*=' + sectionId + ']');

        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1800,
    delay: 200,
    reset: false
});

/* Hero Section */
sr.reveal('.hero-content h1', { delay: 200 });
sr.reveal('.hero-content h2', { delay: 400 });
sr.reveal('.hero-content p', { delay: 600 });
sr.reveal('.hero-buttons', { delay: 800 });
sr.reveal('.hero-image', { origin: 'right', delay: 400 });

/* Section Titles */
sr.reveal('.section-title', { interval: 200 });

/* About Section */
sr.reveal('.about-text', { origin: 'left', delay: 200 });
sr.reveal('.about-skills', { origin: 'right', delay: 300 });

/* Expertise Cards */
sr.reveal('.expertise-card', { interval: 150, origin: 'bottom' });

/* Project Cards */
sr.reveal('.project-card', { interval: 150, origin: 'bottom' });

/* Timeline Items */
sr.reveal('.timeline-item', { interval: 150, origin: 'left' });

/* Education Items */
sr.reveal('.education-item', { interval: 150, origin: 'bottom' });

/* Certificate Cards */
sr.reveal('.certificate-card', { interval: 100, origin: 'bottom' });

/* Interest Tags */
sr.reveal('.interest-tag', { interval: 100, origin: 'bottom' });

/* Contact Section */
sr.reveal('.contact-info', { origin: 'left', delay: 200 });
sr.reveal('.contact-form', { origin: 'right', delay: 300 });

/* Skill Tags */
sr.reveal('.skill-tag', { interval: 80 });
