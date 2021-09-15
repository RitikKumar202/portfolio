window.addEventListener("load", () =>{
    setTimeout(() =>{
        document.querySelector(".pageloader").style.display = "none";
    });
}, 5000);
/*=============Typing animation ================*/
const typed = new Typed(".typing", {
    strings: ["Frontend Developer", "Competitive Programmer"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true
});

/*=============== Toggle body scrolling ================== */
function toggleBodyScrolling(){
    document.body.classList.toggle("hide-scrolling");
}

/*================== Toggle navbar ================ */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNavbar);

function toggleNavbar(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
    toggleOverlayEffect();
    toggleBodyScrolling();
}

/*================== Toggle overlay effect ================ */
function toggleOverlayEffect(){
    document.querySelector(".overlay-effect").classList.toggle("active");
}

/*============= hide and show section ============= */
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        const hash = e.target.hash;
        if(e.target.classList.contains("nav-item")){
            activeSection(hash);
            toggleNavbar();
        }else{
            toggleBodyScrolling();
            toggleOverlayEffect();
            document.querySelector(".nav-toggler").classList.add("toggle-hide");
            setTimeout(() =>{
                activeSection(hash);
                toggleOverlayEffect();
                toggleBodyScrolling();
                document.querySelector(".nav-toggler").classList.remove("toggle-hide");
            }, 950)
        }
    }
});

function activeSection(sectionId){
    document.querySelector("section.active").classList.remove("active");
    document.querySelector(sectionId).classList.add("active");
    window.scrollTo(0,0);
}

/* ==================== About tabs =============== */
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

/* ============== Toggle contact form ============== */
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("toggle-contact-form-btn")){
        document.querySelector(".contact-form").classList.toggle("open");
        toggleBodyScrolling();
    }
});