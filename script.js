// ======================
// BONO Cafe Script
// ======================

// Header Effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#1f140f";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(33,23,17,.92)";
        header.style.boxShadow = "none";

    }

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// Cards Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

document.querySelectorAll(".card,.box,.about,.contact").forEach(el=>{

observer.observe(el);

});


// Mobile Menu

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

menuBtn.addEventListener("click",()=>{

if(nav.style.display==="flex"){

nav.style.display="none";

}else{

nav.style.display="flex";

nav.style.flexDirection="column";

nav.style.position="absolute";

nav.style.top="80px";

nav.style.right="20px";

nav.style.background="#2b1d16";

nav.style.padding="20px";

nav.style.borderRadius="15px";

nav.style.gap="20px";

}

});


// Hero Button Animation

const btn=document.querySelector(".btn");

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

console.log("BONO Cafe Loaded ☕");
