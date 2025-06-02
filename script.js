// Loader fade out
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  gsap.to(loader, {
    opacity: 0,
    duration: 1,
    onComplete: () => loader.remove(),
  });
});

// Navbar scroll background toggle class
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// GSAP Scroll Animations for sections
gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll(".section");

sections.forEach((section, index) => {
  let x = 0,
    y = 0;
  if (index % 3 === 0) x = 100; // from right
  else if (index % 3 === 1) x = -100; // from left
  else y = 100; // from bottom

  gsap.fromTo(
    section,
    { opacity: 0, x: x, y: y },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      onStart: () => section.classList.add("visible"),
      onReverseComplete: () => section.classList.remove("visible"),
    }
  );
});

// Parallax effect on hero mousemove
const hero = document.getElementById("hero");
hero.addEventListener("mousemove", (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
  hero.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// 3D tilt effect on project cards
const cards = document.querySelectorAll(".project-card");
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";

  // Reveal sections
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.add("visible");
  });

  // Typewriter effect (only if you're using it)
  new Typewriter("#typewriter", {
    loop: true,
    delay: 75,
  })
    .typeString("Angular Developer")
    .pauseFor(1500)
    .deleteAll()
    .typeString("AI/ML Enthusiast")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Frontend Engineer")
    .pauseFor(1500)
    .start();
});
