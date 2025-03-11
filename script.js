document.addEventListener("DOMContentLoaded"
, function () {
const menuIcon = 
    document.querySelector(".btn");
    const navLinks =
        document.querySelector(".menu");
    
    menuIcon.addEventListner("click", function() {
        console.log("Menu button clicked!");
        navLinks.classList.toggle("active");
    });
});
        
