document.addEventListener("DOMContentLoaded", function() {
    
    const scrollBtn = document.getElementById("scrollBtn");
    
    function toggleScrollBtn() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    }
    
    function scrollToTop() {
        window.scrollTo({
            top: 0
            
        });
    }
    
    // Add scroll event listener to the window
    window.addEventListener("scroll", toggleScrollBtn);
    
    // Add click event listener to the scroll button
    scrollBtn.addEventListener("click", scrollToTop);
    
    // Initially hide the scroll button on page load
    toggleScrollBtn();
});