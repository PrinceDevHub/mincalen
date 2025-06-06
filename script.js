// Animate the heading
gsap.from("#textcenter h1", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
});

// Animate the paragraph
gsap.from("#textcenter p", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power4.out"
});

// Animate the "Read" link
gsap.from("#textcenter a", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  delay: 0.6,
  ease: "power4.out"
});

// Animate the images on the right
gsap.from(["#rtopleft", "#rtopright", "#rbottom"], {
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  delay: 0.5,
  stagger: 0.2,
  ease: "expo.out"
});
// Animate the "Read" link on hover
const readLink = document.querySelector("#textcenter a");

readLink.addEventListener("mouseenter", () => {
  gsap.to(readLink, {
    scale: 1.1,
    opacity: 1,
    duration: 0.3,
    ease: "power2.out"
  });
});

readLink.addEventListener("mouseleave", () => {
  gsap.to(readLink, {
    scale: 1,
    opacity: 0.6,
    duration: 0.3,
    ease: "power2.out"
  });
});

// Image hover zoom effect
const images = document.querySelectorAll("#rtopleft, #rtopright, #rbottom");

images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    gsap.to(img, {
      scale: 1.05,
      duration: 0.4,
      ease: "power3.out"
    });
  });

  img.addEventListener("mouseleave", () => {
    gsap.to(img, {
      scale: 1,
      duration: 0.4,
      ease: "power3.out"
    });
  });
});

const navLinks = document.querySelectorAll("#lnavr a");

navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      y: -3,
      color: "royalblue",
      duration: 0.2
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      y: 0,
      color: "#000",
      duration: 0.2
    });
  });
});
