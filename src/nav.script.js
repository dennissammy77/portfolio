document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href").substring(1); // Get section ID
        const targetSection = document.getElementById(targetId);
        
        console.log(targetSection)
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
            });
            document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));
            // update active link and remove all other active links
            const activeLink = document.querySelector(`nav a[href="#${targetId}"]`);
            console.log(activeLink)
            if(activeLink){
                activeLink.classList.add('active')
            }
        }
    });
});

document.getElementById('open-nav-bar').addEventListener('click',(()=>{
    console.log('clicked')
    document.getElementById('nav-container').style.display='flex';
}));
document.getElementById('close-nav-bar').addEventListener('click',(()=>{
    console.log('clicked')
    document.getElementById('nav-container').style.display='none';
}));