// تغيير لون شريط التنقل عند النزول

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#1b120d";
    } else {
        header.style.background = "rgba(0,0,0,.55)";
    }

});


// تأثير ظهور الأقسام عند التمرير

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "0.8s";

    observer.observe(section);

});


// تأثير الضغط على زر View Menu

const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.05)";

});

button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

});
