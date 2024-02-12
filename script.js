import { Octokit } from "https://esm.sh/octokit";

const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");

// show and hide navbar in mobile
toggler.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

// add active class on click to nav-items
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((i) => i.classList.remove("nav-item-active"));
    this.classList.add("nav-item-active");

    navLinks.classList.toggle("nav-active");
  });
});

const projectsTabBtns = document.querySelectorAll(".projects-tab-btn");
const projectsItems = document.querySelectorAll(".projects-item");

// filter projects
projectsTabBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    projectsTabBtns.forEach((btn) =>
      btn.classList.remove("projects-tab-btn-active")
    );

    this.classList.add("projects-tab-btn-active");

    projectsItems.forEach((item) => {
      if (item.classList.contains(btn.id)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

const token = config.MY_KEY;
const octokit = new Octokit({
  auth: token,
});

const profile = await octokit.rest.users.getAuthenticated();
const name = profile.data.name;
const titleElement = document.getElementById("title");
titleElement.innerHTML = name;

const bio = profile.data.bio;
const bioElement = document.getElementById("bio");
bioElement.innerHTML = bio;

const location = profile.data.location;
const locationElement = document.getElementById("location");
locationElement.innerHTML = location;

const email = profile.data.email;
const emailElement = document.getElementById("email");
emailElement.innerHTML = email;

console.log(profile.data);

const thoughts = [
  "Hej! I'm Diana",
  "Web Developer",
  "UI/UX Designer",
  "Feel free to reach out!",
];

let index = 0;
let thoughtHTMLElement = document.getElementById("thought");

thoughtHTMLElement.innerText = thoughts[index];

const changeThought = () => {
  if (index < thoughts.length - 1) {
    index++;
  } else {
    index = 0;
  }
  thoughtHTMLElement.innerText = thoughts[index];
};

thoughtHTMLElement.addEventListener("click", changeThought);
