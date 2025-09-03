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

// Animação da grade de imagens com rolagem infinita
const gradeMovel = document.querySelector('.grade__movel');

// Verifica se o elemento existe na página para evitar erros
if (gradeMovel) {
  const container = gradeMovel.parentElement; // O elemento que tem o overflow: hidden

  // --- 1. Garantir que há conteúdo suficiente ---
  // Clonamos as imagens originais até que a altura total da grade
  // seja pelo menos o dobro da altura do contêiner visível.
  // Isso resolve o problema do "espaçamento grande".
  const itemsOriginais = Array.from(gradeMovel.children);
  const containerHeight = container.offsetHeight;

  if (itemsOriginais.length > 0) {
    while (gradeMovel.offsetHeight < containerHeight * 2) {
      itemsOriginais.forEach(item => {
        gradeMovel.appendChild(item.cloneNode(true));
      });
    }
  }

  // --- 2. Lógica de Animação Suave (sem saltos) ---
  let posicaoScroll = 0;
  const velocidade = 0.5; // Ajuste para controlar a velocidade (valores menores = mais lento)
  let animacaoAtiva = true; // Usado para pausar a animação

  // Função que anima a grade
  function animarGrade() {
    // Só executa a lógica se a animação estiver ativa
    if (animacaoAtiva) {
      posicaoScroll += velocidade;

      const primeiroItem = gradeMovel.firstElementChild;
      
      // Calcula a altura real de um item da grade, incluindo o espaçamento (gap)
      const estiloGrade = window.getComputedStyle(gradeMovel);
      const gap = parseFloat(estiloGrade.gap) || 0;
      const alturaItem = primeiroItem.offsetHeight + gap;

      // Quando o primeiro item já rolou completamente para fora da tela...
      if (posicaoScroll >= alturaItem) {
        // ...nós o movemos para o final da lista.
        gradeMovel.appendChild(primeiroItem);
        // ...e ajustamos a posição do scroll para que a mudança seja imperceptível.
        posicaoScroll -= alturaItem;
      }

      // Aplica a transformação para mover a grade para CIMA.
      gradeMovel.style.transform = `translateY(-${posicaoScroll}px)`;
    }

    // Pede ao navegador para chamar a função `animarGrade` novamente
    // na próxima atualização de tela, criando um loop de animação otimizado.
    requestAnimationFrame(animarGrade);
  }

  // Bônus: Pausa a animação quando o mouse está sobre a galeria
  container.addEventListener('mouseenter', () => {
    animacaoAtiva = false;
  });
  container.addEventListener('mouseleave', () => {
    animacaoAtiva = true;
  });

  // Inicia a animação
  requestAnimationFrame(animarGrade);
}
