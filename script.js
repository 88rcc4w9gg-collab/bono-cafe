// ===========================
// BONO Cafe - script.js
// ===========================

// تغيير لون الهيدر عند التمرير
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "#2b1b13";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";
    } else {
        header.style.background = "rgba(32,20,14,.85)";
        header.style.boxShadow = "none";
    }
});

// ظهور العناصر عند التمرير
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll(".card,.photo,.about,.contact").forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition=".8s ease";
    observer.observe(el);
});

// تمرير سلس للقائمة
document.querySelectorAll('nav a').forEach(link=>{

    link.addEventListener('click',function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});

// تأثير بسيط على الزر
const btn=document.querySelector(".btn");

btn.addEventListener("mouseenter",()=>{
    btn.style.transform="scale(1.05)";
});

btn.addEventListener("mouseleave",()=>{
    btn.style.transform="scale(1)";
});

console.log("BONO Cafe Ready ☕");
