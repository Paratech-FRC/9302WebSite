const icon = document.querySelector("#icon");
const links = document.querySelector("#links").querySelectorAll("li");
const midias = document.querySelectorAll("ul")[1].querySelectorAll("li");
const supports = document.querySelector("#supSect").querySelectorAll("img");
const hashs = ["#home", "#aboutSect", "#first", "#support"];
const socialMedias = ["https://instagram.com/paratech_frc", "https://www.youtube.com/channel/UCNsUJjyZ31q5Pk860c-blGg"];
const supportsMedias = ["https://www.sesipa.org.br/", "https://www.fiepa.org.br/"]
const scrollTarget = 300;
const upArrow = document.querySelector("#upArrow");


if (window.innerWidth < 767){

    const burguer = document.createElement("div");// Criação do burguer menu
    burguer.classList.add("burguer");
    burguer.classList.add("burguerOpen");

    for (bg = 0; bg < 3; bg++){
        const bI = document.createElement("div");
        bI.setAttribute("id", `divBg${bg+1}`);
        bI.classList.add("bgBar")
        burguer.appendChild(bI)
    }
    document.querySelector("header").appendChild(burguer);

    burguer.addEventListener("click", () => {// Pra ver se o menu fica invisível ou flex 
        burguer.classList.toggle("burguerClose");
        burguer.classList.toggle("burguerOpen");
        document.querySelector("#links").style.opacity = 
        burguer.classList[1] == "burguerOpen" ? 0 : 1;
        setTimeout(() => {
            document.querySelector("#links").style.display = 
            burguer.classList[1] == "burguerOpen" ? "none" : "flex";
        }, 300);
    })

    links.forEach((link, index) => {// Deixa o burguer close assim que o usuário clicar em um link no menu
        link.addEventListener('click', () => {
            window.location.hash = hashs[index];
            burguer.classList.toggle("burguerClose");
            burguer.classList.toggle("burguerOpen");
            document.querySelector("#links").style.display = 
            burguer.classList[1] == "burguerOpen" ? "none" : "flex";
        });
    });

    for (back=0; back<2; back++){// Apaga os outros dois backs (deixa só o Armando e o Eminem) 
        document.querySelector(`#introPic${back+1}`).remove();
    }
}


icon.addEventListener("click", () => { //Inútil mas vi em outros sites, então meh
    window.location.hash = "#"
});

links.forEach((link, index) => {// Verifica qual link foi clicado e pega o link no array lá de cima
    link.addEventListener('click', () => {
        window.location.hash = hashs[index];
    });
});

midias.forEach((midia, index) => {// Mesma coisa de cima só que pra link de rede social
    midia.addEventListener("click", () => {
        window.location.href = socialMedias[index];
    })
});

supports.forEach((support, index) => {// Mesma coisa dos outros, mas serve pros 'supports', SESI e FIEPA
    support.addEventListener("click", () => {
        window.location.href = supportsMedias[index];
    })
});

setInterval(() => {// Cria aquela setinha no canto da tela pra voltar pro home 
    if (scrollY > scrollTarget){
        upArrow.classList.add("upArrow");
        upArrow.classList.remove("none");
    } else{
        upArrow.classList.remove("upArrow");
        upArrow.classList.add("none");
    }
})

upArrow.addEventListener("click", () => {// Aqui verifica o click na seta que eu falei ali em cima;
    window.location.hash = "#";
})