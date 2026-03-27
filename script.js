// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (mobileMenuBtn) {
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Smooth scrolling with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations (fade-in)
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 80) {
            element.classList.add('visible');
        }
    });
};

// Initial check
fadeInOnScroll();

// Check on scroll
window.addEventListener('scroll', fadeInOnScroll);

// Header scroll effect
const header = document.querySelector('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 42, 0.9)';
            header.style.backdropFilter = 'blur(16px)';
        } else {
            header.style.background = 'rgba(10, 10, 42, 0.7)';
            header.style.backdropFilter = 'blur(12px)';
        }
    });
}

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
    }
    
    // Active nav link highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    if (sections.length && navItems.length) {
        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPosition = window.scrollY + 120;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    current = section.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                const href = item.getAttribute('href').substring(1);
                if (href === current) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        });
    }
    
    // Parallax effect for background spheres
    const spheres = document.querySelectorAll('.gradient-sphere');
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        spheres.forEach((sphere, index) => {
            const speed = 20 + index * 5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            sphere.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Add smooth hover effects to all interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .project-card, .skill-card, .knowledge-item, .contact-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
        });
    });
});

// Add glassmorphism-inspired console greeting
console.log('%c🔮 GLASSMORPHISM PORTFOLIO 🔮', 'background: linear-gradient(135deg, #6366f1, #f43f5e); color: white; font-size: 14px; font-weight: bold; padding: 8px 16px; border-radius: 20px;');
console.log('%cGautham Krishna B - Cybersecurity Engineer', 'color: #818cf8; font-size: 12px; font-weight: bold;');
console.log('%c"Understanding systems by pushing their limits — breaking things to secure them better"', 'color: #f43f5e; font-style: italic;');

// Fix for mobile viewport height
const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

setVh();
window.addEventListener('resize', setVh);

// Add tilt effect to cards on mousemove
const glassCards = document.querySelectorAll('.glass-card');
glassCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
});