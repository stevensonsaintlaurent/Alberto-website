const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const fullImgBox = document.getElementById("full-img-box");
const fullImg = document.getElementById("full-img");

// ========== Gallery =============
function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}

// Menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ========== REMOVE MENU MOBILE =============

const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each na-link we remove the show menu
  navMenu.classList.remove("show-menu");
  navLink.forEach((n) => n.addEventListener("click", linkAction));
};

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  //Add a class if bottom offset is greater than 50 of

  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is higher than 350 viewport height ,add the
  console.log("sonson", scrollUp);
  this.scrolly >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      " a[href*=" + sectionId + "] "
    );

    $("#contact-form").on("submit", function (event) {
      event.preventDefault(); // prevent reload

      let formData = new FormData(this);
      formData.append("service_id", "default_service");
      formData.append("template_id", "template_mezfpy6");
      formData.append("user_id", "user_ID");

      $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
        type: "POST",
        data: formData,
        contentType: false, // auto-detection
        processData: false, // no need to parse formData to string
      })
        .done(function () {
          console.log("Your mail is sent!");
        })
        .fail(function (error) {
          alert("Oops... " + JSON.stringify(error));
        });
    });

    console.log("oooo", sectionsClass);

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset:true // Animation repeat
});

sr.reveal(`.home-data, .experience,  .skills,  .contact-container`);
sr.reveal(`.home-image`, { delay: 600 });
sr.reveal(`.home-scroll`, { delay: 800 });
sr.reveal(`.work-card, .services-card`, { interval: 100 });
sr.reveal(`.about-content`, { origin: "right" });
sr.reveal(`.about-img`, { origin: "left" });
