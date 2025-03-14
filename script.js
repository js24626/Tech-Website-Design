
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("nav-scrolled");
      } else {
        navbar.classList.remove("nav-scrolled");
      }
    });
  });
  


const images = ["/Images/1.png", "/Images/2.png", "/Images/5.png"];
const texts = [
    {
        title: "Woofye the Agent Bridging Efficiency with Blockchain",
        dynamicTexts: ["Decentralization", "Low Costs", "Precision"],
        slideText: "Optimizing Solana volume with cost-effective and efficient technology.",
        color: "#FF9900"
    },
    {
        title: "Volume Optimization Protocol",
        dynamicTexts: ["(VOP)"],
        slideText: "Woofye the Agent introduces the Volume Optimization Protocol (VOP), designed to maximize trading efficiency on Solana.",
        color: "#116D8C"
    },
    {
        title: "Artificial Intelligence Virtual Machine",
        dynamicTexts: ["AIVM"],
        slideText: "The Artificial Intelligence Virtual Machine (AIVM) executes AI-specific tasks seamlessly on the blockchain.",
        color: "#0099FF"
    }
];

let currentIndex = 0;
const imgContainer = document.querySelector(".absolute.inset-0");
const titleElement = document.querySelector("#slide-container h1");
const dynamicTextElement = document.getElementById("dynamic-text");
const slideTextElement = document.getElementById("slide-text");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function updateSlide(index) {
    const newImg = document.createElement("img");
    newImg.src = images[index];
    newImg.classList.add("slide-img");
    newImg.style.opacity = "0";

    imgContainer.appendChild(newImg);

    setTimeout(() => {
        newImg.style.opacity = "1";
    }, 50);

    setTimeout(() => {
        const oldImg = imgContainer.querySelector("img:not(:last-child)");
        if (oldImg) imgContainer.removeChild(oldImg);
    }, 1000);

    titleElement.textContent = texts[index].title;
    dynamicTextElement.textContent = texts[index].dynamicTexts[0];
    dynamicTextElement.style.color = texts[index].color;
    slideTextElement.textContent = texts[index].slideText;
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide(currentIndex);
});

updateSlide(currentIndex);


document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Ensures animation runs only once
          }
        });
      },
      { threshold: 0.2 } // Adjusts when animation starts (20% visibility)
    );
  
    fadeElements.forEach(el => observer.observe(el));
  });

  