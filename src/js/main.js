const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faq = button.nextElementSibling;
    const icon = button.children[1];

    faq.classList.toggle("show");
    icon.classList.toggle("rotate");
  });
});

// Seleciona o elemento do carrossel
const slider = document.querySelector(".slide");

// Verifica se o slider existe na página
if (slider) {
  // Pega todos os filhos diretos (os cards) e transforma em um array
  const slideContent = Array.from(slider.children);

  // Duplica cada card e adiciona ao final do slider para criar o loop
  slideContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    slider.appendChild(duplicatedItem);
  });
}

// --- Lógica para os sliders da grade de imagens ---
// Seleciona todos os 'tracks' dos sliders da grade
const gradeTracks = document.querySelectorAll(".grade__track");

// Itera sobre cada track para duplicar seu conteúdo
gradeTracks.forEach((track) => {
  // Pega todos os filhos (as imagens) e transforma em um array
  const trackContent = Array.from(track.children);

  // Duplica cada imagem e adiciona ao final do track para o loop infinito
  trackContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    track.appendChild(duplicatedItem);
  });
});
