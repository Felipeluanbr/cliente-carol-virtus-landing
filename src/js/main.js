// --- Lógica para o Acordeão do FAQ ---
// Seleciona apenas os botões dentro da seção de perguntas para evitar conflitos
const faqButtons = document.querySelectorAll(".question button");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // O 'p' com a resposta é o próximo elemento irmão do botão
    const answer = button.nextElementSibling;
    // O ícone está dentro do botão, usamos querySelector para ser mais robusto
    const icon = button.querySelector("i");

    // Adiciona/remove a classe 'show' para mostrar/esconder a resposta
    if (answer) {
      answer.classList.toggle("show");
    }
    // Adiciona/remove a classe 'rotate' para girar o ícone
    if (icon) {
      icon.classList.toggle("rotate");
    }
  });
});

// --- Lógica para o Carrossel de Depoimentos ---
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
