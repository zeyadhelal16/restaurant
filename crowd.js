document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.classList.remove("hidden");
    
    
    setTimeout(() => {
        welcomeMessage.style.display = "none";
        document.body.style.overflow = "auto";
    }, 4000); 
});