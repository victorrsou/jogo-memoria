// Seleção
const cards = document.querySelectorAll(".card");
const oneCard = document.querySelector("#carta");

const faceUp = "./img/10-animais-selvagens-que-parecem-cachorros-domesticos.jpg"
const faceDown = "./img/pngtree-gold-texture-background-business-card-squared-wire-vector-png-image_22123266.jpg"
// Funções



// Eventos
cards.forEach((card) => {
    card.addEventListener("click", () => {
       const imagem = card.querySelector("img");

       if (!card.classList.contains("facedown")) {
        imagem.src = faceUp;
        card.classList.add("facedown");
       } else {
        imagem.src = faceDown;
        card.classList.remove("facedown");
       }
    })
});