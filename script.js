// Constants for breakpoints
const DESKTOP_WIDTH = 800;
const TABLET_WIDTH = 500;

// Select DOM elements with descriptive names
const navbarList = document.querySelector('.navbar-list');
const hamburgerMenuButton = document.querySelector('.hamburger');
const sidebarMenu = document.querySelector('.sidebar');

// Function to show the sidebar
function showSidebar() {
    hamburgerMenuButton.style.display = "none";
    navbarList.style.display = "none"; 
    sidebarMenu.style.display = "flex"; 
}

// Function to close the sidebar
function closeSidebar() {
    hamburgerMenuButton.style.display = "block";
    sidebarMenu.style.display = "none"; 
}

// Function to update the display based on window width
function updateDisplay() {
    if (window.innerWidth >= DESKTOP_WIDTH) {
        console.log('This could be a desktop.');
        navbarList.style.display = "flex";
        hamburgerMenuButton.style.display = "none";
        sidebarMenu.style.display = "none"; 
    } else if (window.innerWidth >= TABLET_WIDTH) {
        console.log('This could be a tablet.');
        navbarList.style.display = "none"; 
        hamburgerMenuButton.style.display = "flex"; 
        sidebarMenu.style.width = "75%"; 
        sidebarMenu.style.display = "none"; 
    } else {
        console.log('This could be a phone.');
        navbarList.style.display = "none"; 
        hamburgerMenuButton.style.width = "100%"; 
        hamburgerMenuButton.style.display = "flex"; 
        sidebarMenu.style.width = "100%"; 
        sidebarMenu.style.display = "none"; 
    }
}

// Initialize display settings on page load
updateDisplay();

// Event listener to update display on window resize
window.addEventListener('resize', updateDisplay);

// Optional: You can add event listeners for the hamburger button to show/hide the sidebar
hamburgerMenuButton.addEventListener('click', showSidebar);
sidebarMenu.addEventListener('click', closeSidebar); // Assuming you want to close the sidebar when clicking on it