/*=============Typing animation ================*/
const typed = new Typed(".typing", {
  strings: ["FullStack Developer", "Competitive Programmer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/*=============== Toggle body scrolling ================== */
function toggleBodyScrolling() {
  document.body.classList.toggle("hide-scrolling");
}

/*================== Toggle navbar ================ */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNavbar);

function toggleNavbar() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
  toggleOverlayEffect();
  toggleBodyScrolling();
}

/*================== Toggle overlay effect ================ */
function toggleOverlayEffect() {
  document.querySelector(".overlay-effect").classList.toggle("active");
}

/*============= hide and show section ============= */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    const hash = e.target.hash;
    if (e.target.classList.contains("nav-item")) {
      activeSection(hash);
      toggleNavbar();
    } else {
      toggleBodyScrolling();
      toggleOverlayEffect();
      document.querySelector(".nav-toggler").classList.add("toggle-hide");
      setTimeout(() => {
        activeSection(hash);
        toggleOverlayEffect();
        toggleBodyScrolling();
        document.querySelector(".nav-toggler").classList.remove("toggle-hide");
      }, 950);
    }
  }
});

function activeSection(sectionId) {
  document.querySelector("section.active").classList.remove("active");
  document.querySelector(sectionId).classList.add("active");
  window.scrollTo(0, 0);
}

/* ==================== About Accordion =============== */
$(document).ready(function () {
  $(".card-header").click(function () {
    if ($(this).next(".card-body").hasClass("active")) {
      $(this).next(".card-body").removeClass("active").slideUp();
      $(this).children("span").removeClass("uil-minus").addClass("uil-plus");
    } else {
      $(".card .card-body").removeClass("active").slideUp();
      $(".card .card-header span")
        .removeClass("uil-minus")
        .addClass("uil-plus");
      $(this).next(".card-body").addClass("active").slideDown();
      $(this).children("span").removeClass("uil-plus").addClass("uil-minus");
    }
  });
});

// ========================= Achievements ==================
let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

// ============= Project JS ==================
const API_URL = "https://api.github.com/users/";

const getUser = async (username) => {
  const res = await fetch(API_URL + username + "/repos");
  const data = await res.json();
  console.log(data);
  let repo = "";
  data?.map((repoData) => {
    repo += `
        <div class="project-card">
            <div class="project-heading">${repoData.name}</div>
            <div class="project-languages">${
              repoData.language ? "#" + repoData.language : ""
            }</div>
            <div class="project-activity">
                <p><i class='bx bx-star'></i> ${
                  repoData.stargazers_count
                } stars</p>
                <p><i class='bx bx-git-repo-forked'></i>  ${
                  repoData.forks_count
                } forks</p>
            </div>
            <div class="project-url">
                <a href=${
                  repoData.svn_url
                } target="_blank"><i class='bx bxl-github'></i></a>
                ${
                  repoData.homepage
                    ? `<a href=${repoData.homepage} target="_blank"><i class='bx bx-globe'></i></a>`
                    : ""
                }
            </div>
            
        </div>
    `;
  });
  document.getElementById("project-cards").innerHTML = repo;
};

getUser("ritikkumar202");

/* ============== Toggle contact form ============== */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle-contact-form-btn")) {
    document.querySelector(".contact-form").classList.toggle("open");
    toggleBodyScrolling();
  }
});
