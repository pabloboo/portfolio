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

// Función para mostrar la sección de habilidades correspondiente al hacer clic en los círculos
function showSkillSection(sectionNumber) {
    // Ocultar todas las secciones de habilidades
    var sections = document.querySelectorAll('.skill-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Mostrar la sección correspondiente al número recibido
    var selectedSection = document.getElementById('technical-skills');
    if (sectionNumber === 2) {
        selectedSection = document.getElementById('soft-skills');
    } else if (sectionNumber === 3) {
        selectedSection = document.getElementById('other-skills');
    }
    selectedSection.style.display = 'block';

    // Actualizar la clase 'active' en los círculos para resaltar el círculo seleccionado
    var circles = document.querySelectorAll('.circle');
    circles.forEach(function(circle, index) {
        circle.classList.remove('active');
        if (index === sectionNumber - 1) {
            circle.classList.add('active');
        }
    });
}

// Mostrar la sección de habilidades técnicas por defecto al cargar la página
showSkillSection(1);


// Show the home tab by default
showTab('home');
