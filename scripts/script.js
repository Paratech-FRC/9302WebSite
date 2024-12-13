const icon = document.querySelector("#icon");
const links = document.querySelector("#links").querySelectorAll("li");
const midias = document.querySelectorAll("ul")[1].querySelectorAll("li");
const supports = document.querySelector("#supSect").querySelectorAll("img");
const hashs = ["#home", "#aboutSect", "#first", "#support"];
const socialMedias = ["https://instagram.com/paratech_frc", "https://www.youtube.com/channel/UCNsUJjyZ31q5Pk860c-blGg"];
const supportsMedias = ["https://www.sesipa.org.br/", "https://www.fiepa.org.br/"]
const scrollTarget = 300;
const upArrow = document.createElement("div");

icon.addEventListener("click", () => {
    window.location.hash = "#"
});

links.forEach((link, index) => {
    link.addEventListener('click', () => {
        window.location.hash = hashs[index];
    });
});

midias.forEach((midia, index) => {
    midia.addEventListener("click", () => {
        window.location.href = socialMedias[index];
    })
});

supports.forEach((support, index) => {
    support.addEventListener("click", () => {
        window.location.href = supportsMedias[index];
    })
});

if (scrollY > scrollTarget){
    document.body.appendChild(upArrow);
    upArrow.classList.add("upArrow");
    upArrow.classList.remove("none");
} else{
    upArrow.classList.remove("upArrow");
    upArrow.classList.add("none");
}