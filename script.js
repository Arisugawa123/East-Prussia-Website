// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Login Modal Functions
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'block';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeLoginModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLoginModal();
    }
});

// Login Form Handler
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Show loading state
    const submitBtn = this.querySelector('.btn');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Logging in...';
    submitBtn.disabled = true;
    
    // Simulate login process (replace with actual authentication)
    setTimeout(() => {
        // Demo credentials for testing
        if (username === 'admin' && password === 'eastprussia2024') {
            alert('Login successful! Welcome, ' + username);
            closeLoginModal();
            // Redirect to admin panel or show admin features
            showAdminFeatures();
        } else if (username === 'staff' && password === 'staff123') {
            alert('Staff login successful! Welcome, ' + username);
            closeLoginModal();
            showStaffFeatures();
        } else {
            alert('Invalid credentials. Please try again.');
        }
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Clear form
        this.reset();
    }, 1500);
});

// Admin Features (shown after successful admin login)
function showAdminFeatures() {
    // Add admin panel or features here
    const navbar = document.querySelector('.nav-menu');
    const adminItem = document.createElement('li');
    adminItem.className = 'nav-item';
    adminItem.innerHTML = '<a href="#admin" class="nav-link">Admin Panel</a>';
    navbar.insertBefore(adminItem, navbar.lastElementChild);
    
    // You can add more admin-specific functionality here
    console.log('Admin features activated');
}

// Staff Features (shown after successful staff login)
function showStaffFeatures() {
    // Add staff panel or features here
    const navbar = document.querySelector('.nav-menu');
    const staffItem = document.createElement('li');
    staffItem.className = 'nav-item';
    staffItem.innerHTML = '<a href="#staff" class="nav-link">Staff Panel</a>';
    navbar.insertBefore(staffItem, navbar.lastElementChild);
    
    console.log('Staff features activated');
}

// Contact Form Handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Show loading state
    const submitBtn = this.querySelector('.btn');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#000';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.about-card, .game-card, .event-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Game card hover effects
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02) rotateY(2deg)';
        this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateY(0deg)';
        this.style.boxShadow = 'none';
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated
        document.body.style.filter = 'invert(1)';
        setTimeout(() => {
            document.body.style.filter = 'none';
            alert('🏰 East Prussian Easter Egg Activated! 🦅');
        }, 1000);
        konamiCode = [];
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroDecoration = document.querySelector('.hero-decoration');
    
    if (heroDecoration) {
        heroDecoration.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-content p');
    if (footerText) {
        footerText.textContent = footerText.textContent.replace('2024', currentYear);
    }
});

// Preloader (if needed)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Console message for developers
console.log(`
🏰 East Prussian Roblox Community
═══════════════════════════════════
Welcome to our community website!
Built with passion for history and gaming.

For developers:
- This site uses vanilla JavaScript
- Responsive design with CSS Grid and Flexbox
- Accessible navigation and forms
- Smooth animations and transitions

Join our community and help preserve East Prussian heritage!
`);