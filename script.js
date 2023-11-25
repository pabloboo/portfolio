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

// Show the home tab by default
showTab('home');
