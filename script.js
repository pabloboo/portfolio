// Function to show/hide tabs with smooth transitions and color changes
function showTab(tabName) {
    // Hide all tab content with fade-out effect
    var tabContent = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    // Deactivate all tabs
    var tabLinks = document.getElementsByTagName('a');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
        tabLinks[i].style.color = '#888'; // Set gray text for inactive tabs
    }

    // Show the selected tab content with fade-in effect
    var selectedTab = document.getElementById(tabName);
    selectedTab.style.display = 'block';
    setTimeout(function () {
        selectedTab.style.opacity = 1;
    }, 50);

    // Activate the selected tab with white text
    var selectedTabLink = document.getElementById(tabName + '-tab');
    selectedTabLink.classList.add('active');
    selectedTabLink.style.color = '#fff'; // Set white text for the selected tab
}

function loadIndexEnglish() {
    window.location.href = 'index.html';
}

function loadIndexSpanish() {
    window.location.href = 'index-es.html';
}

function loadIndexGalician() {
    window.location.href = 'index-ga.html';
}

// Scroll for mobile screens
// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Event listeners for menu items
document.getElementById('home-tab').addEventListener('click', function() {
    scrollToSection('home');
});

document.getElementById('about-tab').addEventListener('click', function() {
    scrollToSection('about');
});

document.getElementById('projects-tab').addEventListener('click', function() {
    scrollToSection('projects');
});

document.getElementById('skills-tab').addEventListener('click', function() {
    scrollToSection('skills');
});

// Show the home tab by default
showTab('home');

// Image carousel
const carousels = {
    carousel1: { currentSlideIndex: 0 },
    carousel2: { currentSlideIndex: 0 },
};

function moveSlide(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    carousels[carouselId].currentSlideIndex = (carousels[carouselId].currentSlideIndex + direction + totalSlides) % totalSlides;

    const currentSlideIndex = carousels[carouselId].currentSlideIndex;
    carousel.querySelector('.current-slide').classList.remove('current-slide');
    slides[currentSlideIndex].classList.add('current-slide');

    const track = carousel.querySelector('.carousel-track');
    const slideWidth = slides[currentSlideIndex].clientWidth;
    const newTransformValue = -slideWidth * currentSlideIndex;

    track.style.transform = `translateX(${newTransformValue}px)`;
}