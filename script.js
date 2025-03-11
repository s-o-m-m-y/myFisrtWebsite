document.addEventListener("DOMContentLoaded"
, function () {
const btn = 
    document.getElementById("btn");
    const navLinks =
        document.querySelector(".menu");
    btn.addEventListner("click", function() {
        console.log("Menu button clicked!");
        navLinks.classList.toggle("active");
    });
});
        
