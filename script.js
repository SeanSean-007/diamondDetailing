// Function to show the sidebar
function showSidebar() {
    document.querySelector('.hamburger').style.display = "none";
    document.querySelector('.navbar-list').style.display = "none"; 
    document.querySelector('.sidebar').style.display = "flex"; 
}

// Function to close the sidebar
function closeSidebar() {
    document.querySelector('.hamburger').style.display = "block";
    document.querySelector('.sidebar').style.display = "none"; 
}

const checkWindowSize = () => {
    if (window.innerWidth <= `800`) {
        document.querySelector('.sidebar').style.display = "none"; 
    document.querySelector('.navbar-list').style.display = "none"; 
    document.querySelector('.hamburger').style.display = "flex";
    } else if (window.innerWidth >= `800`) {
        document.querySelector('.sidebar').style.display = "none"; 
        document.querySelector('.navbar-list').style.display = "flex"; 
        document.querySelector('.hamburger').style.display = "none";
    }
}

// Event listeners for the hamburger button to show/hide the sidebar
document.querySelector('.hamburger').addEventListener('click', showSidebar);
document.querySelector('.sidebar').addEventListener('click', closeSidebar);
document.addEventListener("DOMContentLoaded", checkWindowSize())
window.addEventListener('resize', checkWindowSize);