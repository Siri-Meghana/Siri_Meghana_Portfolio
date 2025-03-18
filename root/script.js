const canvas = document.getElementById('revealCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = document.querySelector('.reveal-container').offsetHeight;
        drawWhiteLayer();
    }

    function drawWhiteLayer() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function eraseOnMouseMove(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 80, 0, Math.PI * 2);
        ctx.fill();
    }

    canvas.addEventListener('mousemove', eraseOnMouseMove);

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Parallax Effect
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        document.querySelector('.parallax-bg').style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Reveal Sections on Scroll
    function revealSections() {
        const sections = document.querySelectorAll('section');
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });
    }
    // document.addEventListener("DOMContentLoaded", function () {
    //     const carousel = document.querySelector(".carousel");
    //     const leftArrow = document.querySelector(".left-arrow");
    //     const rightArrow = document.querySelector(".right-arrow");

    //     // Scroll width for each movement
    //     const scrollAmount = 300; 

    //     rightArrow.addEventListener("click", function () {
    //         carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    //     });

    //     leftArrow.addEventListener("click", function () {
    //         carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    //     });

    //     // Drag to scroll feature
    //     let isDragging = false;
    //     let startX;
    //     let scrollLeft;

    //     carousel.addEventListener("mousedown", (e) => {
    //         isDragging = true;
    //         startX = e.pageX - carousel.offsetLeft;
    //         scrollLeft = carousel.scrollLeft;
    //     });

    //     carousel.addEventListener("mouseleave", () => {
    //         isDragging = false;
    //     });

    //     carousel.addEventListener("mouseup", () => {
    //         isDragging = false;
    //     });

    //     carousel.addEventListener("mousemove", (e) => {
    //         if (!isDragging) return;
    //         e.preventDefault();
    //         const x = e.pageX - carousel.offsetLeft;
    //         const walk = (x - startX) * 2; // Adjust speed
    //         carousel.scrollLeft = scrollLeft - walk;
    //     });
    // });

//     const carousel = document.querySelector(".carousel");
// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// const slides = document.querySelectorAll(".project-slide");
// let index = 0;

// nextBtn.addEventListener("click", () => {
//     index = (index + 1) % slides.length;
//     updateCarousel();
// });

// prevBtn.addEventListener("click", () => {
//     index = (index - 1 + slides.length) % slides.length;
//     updateCarousel();
// });

// function updateCarousel() {
//     const offset = -index * 100;
//     carousel.style.transform = `translateX(${offset}%)`;
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const tabButtons = document.querySelectorAll(".tab-button");
//     const tabPanels = document.querySelectorAll(".tab-panel");

//     tabButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             // Remove active class from all buttons and panels
//             tabButtons.forEach(btn => btn.classList.remove("active"));
//             tabPanels.forEach(panel => panel.classList.remove("active"));

//             // Add active class to the clicked tab and its content
//             this.classList.add("active");
//             document.getElementById(this.dataset.tab).classList.add("active");
//         });
//     });
// });

document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        let rect = card.getBoundingClientRect();
        let x = (e.clientX - rect.left) / rect.width - 0.5;
        let y = (e.clientY - rect.top) / rect.height - 0.5;

        let rotateX = y * 70; // Controls the tilt on Y-axis
        let rotateY = x * -70; // Controls the tilt on X-axis

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        card.style.transition = "transform 0.1s ease-out"; // Smoother animation
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        card.style.transition = "transform 0.5s ease-out"; // Smooth return
    });
});
/*
document.addEventListener("DOMContentLoaded", function () {
    const leftPanel = document.querySelector(".left-panel");
    const rightPanel = document.querySelector(".right-panel");
    const sections = document.querySelectorAll(".company");

    leftPanel.addEventListener("wheel", (event) => {
        event.preventDefault();
        leftPanel.scrollBy({
            top: event.deltaY,
            behavior: "smooth"
        });

        let currentIndex = Math.round(leftPanel.scrollTop / window.innerHeight);
        sections.forEach((section, index) => {
            if (index === currentIndex) {
                rightPanel.querySelectorAll(".description").forEach(desc => desc.style.display = "none");
                rightPanel.querySelectorAll(".description")[index].style.display = "block";
            }
        });
    });
});
*/

// document.addEventListener("DOMContentLoaded", function () {
//     const experienceSection = document.querySelector("#experience");
//     const leftPanel = document.querySelector(".left-panel");
//     const companies = document.querySelectorAll(".company");
//     const infoSections = document.querySelectorAll(".company-info");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 let targetId = entry.target.getAttribute("data-target");

//                 // Remove active class from all companies
//                 companies.forEach(c => c.classList.remove("active"));
//                 entry.target.classList.add("active");

//                 // Hide all descriptions and show the active one
//                 infoSections.forEach(section => {
//                     section.classList.remove("active");
//                     if (section.id === targetId) {
//                         section.classList.add("active");
//                     }
//                 });
//             }
//         });
//     }, { threshold: 0.6 });

//     companies.forEach(company => observer.observe(company));

//     // Observe when the experience section is in view
//     const sectionObserver = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 leftPanel.style.overflowY = "auto"; // Enable scrolling
//             } else {
//                 leftPanel.style.overflowY = "hidden"; // Disable scrolling
//             }
//         });
//     }, { threshold: 0.2 });

//     sectionObserver.observe(experienceSection);
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const leftPanel = document.querySelector(".left-panel");
//     const companies = document.querySelectorAll(".company");
//     const infoSections = document.querySelectorAll(".company-info");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 let targetId = entry.target.getAttribute("data-target");

//                 // Remove active class from all companies
//                 companies.forEach(c => c.classList.remove("active"));
//                 entry.target.classList.add("active");

//                 // Hide all descriptions and show the active one
//                 infoSections.forEach(section => {
//                     section.classList.remove("active");
//                     if (section.id === targetId) {
//                         section.classList.add("active");
//                     }
//                 });
//             }
//         });
//     }, { threshold: 0.6 });

//     companies.forEach(company => observer.observe(company));

    // // Enable scrolling on hover
    // leftPanel.addEventListener("mouseenter", () => {
    //     leftPanel.style.overflowY = "auto";
    // });

    // leftPanel.addEventListener("mouseleave", () => {
    //     leftPanel.style.overflowY = "hidden";
    // });
// });

// Function to handle tab switching
// Function to handle tab switching
// Function to handle tab switching
function openTab(evt, tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
  
    // Remove active class from all tabs
    const tabLinks = document.querySelectorAll('.tablinks');
    tabLinks.forEach(link => {
      link.classList.remove('active');
    });
  
    // Show the content for the clicked tab and set it active
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
  }
  
  // Set default tab (simulate a click event to show the first tab by default)
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tablinks').click(); // Trigger the first tab on page load
  });
  
  
    window.addEventListener('scroll', revealSections);
    revealSections(); // Run on page load
