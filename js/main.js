// NORMAL DISTRIBUTION GENERATOR (NUMBERS ONLY)
function generateNormalDistribution(mean, stdDev, points) {
    const labels = [];
    const values = [];

    for (let i = 0; i <= points; i++) {
        const x = mean - 3 * stdDev + (6 * stdDev * i) / points;
        const y =
            (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
            Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));

        labels.push(x);
        values.push(y);
    }

    return { labels, values };
}

const canvas = document.getElementById("statsChart");

if (canvas) {
    const ctx = canvas.getContext("2d");
    const { labels, values } = generateNormalDistribution(0, 1, 150);

    new Chart(ctx, {
        type: "line",
        data: {
            labels,
            datasets: [{
                label: "Standard Normal Distribution",
                data: values,
                borderColor: "#60a5fa",
                backgroundColor: "rgba(96,165,250,0.25)",
                borderWidth: 3,
                fill: true,
                tension: 0.45,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: "easeOutQuart"
            },
            plugins: {
                legend: {
                    labels: { color: "#e5e7eb" }
                }
            },
            scales: {
                x: {
                    grid: { color: "rgba(255,255,255,0.06)" },
                    ticks: { color: "#94a3b8" }
                },
                y: {
                    grid: { color: "rgba(255,255,255,0.06)" },
                    ticks: { color: "#94a3b8" }
                }
            }
        }
    });
}

// DEV CONSOLE
console.log("%c📊 Probability & Statistics Portfolio", "color:#60a5fa;font-size:18px;");
// Main JavaScript for Portfolio Website

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
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('show');
    });
}

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Chart.js - Hero Section Statistical Visualization
const ctx = document.getElementById('statsChart');
if (ctx) {
    // Generate sample data for normal distribution
    const generateNormalDistribution = (mean, stdDev, points) => {
        const data = [];
        for (let i = 0; i < points; i++) {
            const x = mean - 3 * stdDev + (6 * stdDev * i) / points;
            const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * 
                      Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
            data.push({ x: x.toFixed(2), y: y.toFixed(4) });
        }
        return data;
    };

    const normalData = generateNormalDistribution(0, 1, 100);

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: normalData.map(d => d.x),
            datasets: [{
                label: 'Normal Distribution (μ=0, σ=1)',
                data: normalData.map(d => d.y),
                borderColor: 'rgba(96, 165, 250, 1)',
                backgroundColor: 'rgba(96, 165, 250, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(96, 165, 250, 1)',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#e2e8f0',
                        font: {
                            size: 14,
                            family: 'Inter'
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Standard Normal Distribution',
                    color: '#f1f5f9',
                    font: {
                        size: 18,
                        weight: 'bold',
                        family: 'Inter'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(96, 165, 250, 0.5)',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        title: function(context) {
                            return `x = ${context[0].label}`;
                        },
                        label: function(context) {
                            return `P(x) = ${context.parsed.y}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Standard Deviations (σ)',
                        color: '#cbd5e1',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    },
                    ticks: {
                        color: '#94a3b8',
                        maxTicksLimit: 10,
                        font: {
                            size: 10
                        }
                    },
                    grid: {
                        color: 'rgba(148, 163, 184, 0.1)',
                        drawBorder: false
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Probability Density',
                        color: '#cbd5e1',
                        font: {
                            size: 12,
                            family: 'Inter'
                        }
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 10
                        }
                    },
                    grid: {
                        color: 'rgba(148, 163, 184, 0.1)',
                        drawBorder: false
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });

    // Animate chart on scroll
    const chartContainer = ctx.closest('div');
    const observerOptions = {
        threshold: 0.5
    };

    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                chart.update('active');
            }
        });
    }, observerOptions);

    if (chartContainer) {
        chartObserver.observe(chartContainer);
    }
}

// Form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (in a real app, this would send to a server)
        setTimeout(() => {
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Animate project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1
});

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    projectObserver.observe(card);
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.bg-gradient-to-r');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.transition = 'width 2s ease-out';
                bar.style.width = width;
            }, 100);
        }
    });
}, {
    threshold: 0.5
});

skillBars.forEach(bar => {
    if (bar.closest('#skills')) {
        skillObserver.observe(bar);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#home');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// Add typing effect to hero title (optional enhancement)
const heroTitle = document.querySelector('#home h1');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    heroTitle.style.opacity = '1';
    
    let charIndex = 0;
    const typingSpeed = 50;
    
    function typeText() {
        if (charIndex < text.length) {
            heroTitle.innerHTML = text.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        }
    }
    
    // Start typing after a short delay
    setTimeout(() => {
        // Uncomment to enable typing effect
        // typeText();
        // Or just show the text immediately
        heroTitle.innerHTML = text;
    }, 500);
}

// Console log for developers
console.log('%c🎨 Prajwal G Rawal Portfolio', 'color: #60a5fa; font-size: 20px; font-weight: bold;');
console.log('%c📊 Probability & Statistics Expert', 'color: #a78bfa; font-size: 14px;');
console.log('%cInterested in collaboration? Let\'s connect!', 'color: #94a3b8; font-size: 12px;');
