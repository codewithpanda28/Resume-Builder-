document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const closeBtns = document.querySelectorAll('.close');
    const contactForm = document.getElementById('contact-form');
    const getStartedBtn = document.getElementById('get-started-btn');
    const viewAllTemplatesBtn = document.getElementById('view-all-templates');

document.getElementById('menu-toggle').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('hidden');
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        body.classList.add('dark-mode');
        updateThemeIcon(true);
    }

    function updateThemeIcon(isDarkMode) {
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    // Modal functionality
    loginBtn.addEventListener('click', () => openModal(loginModal));
    signupBtn.addEventListener('click', () => openModal(signupModal));

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(loginModal);
            closeModal(signupModal);
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) closeModal(loginModal);
        if (e.target === signupModal) closeModal(signupModal);
    });

    function openModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    // Get Started button
    getStartedBtn.addEventListener('click', () => {
        window.location.href = 'editor.html';
    });

    // View All Templates button
    viewAllTemplatesBtn.addEventListener('click', () => {
        window.location.href = 'templates.html';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Template slider functionality
    const templateSlider = document.querySelector('.template-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    templateSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - templateSlider.offsetLeft;
        scrollLeft = templateSlider.scrollLeft;
    });

    templateSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    templateSlider.addEventListener('mouseup', () => {
        isDown = false;
    });

    templateSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - templateSlider.offsetLeft;
        const walk = (x - startX) * 2;
        templateSlider.scrollLeft = scrollLeft - walk;
    });
});
