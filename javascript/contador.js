 // Função para animar os números
 function animateCounters(counter) {
    const targetValue = parseInt(counter.getAttribute("data-target"), 10); // Valor final
    const duration = 2000; // Duração da animação (2 segundos)
    const increment = targetValue / (duration / 16); // Incremento por frame (~60fps)
    let currentValue = 0;

    const updateCounter = () => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue; // Garante que não ultrapasse o valor final
        clearInterval(interval); // Para a animação
      }
      counter.textContent = `+${Math.floor(currentValue)}`; // Atualiza o texto do número
    };

    const interval = setInterval(updateCounter, 16); // Atualiza a cada 16ms
  }

  // Configurando o Intersection Observer
  function initIntersectionObserver() {
    const counters = document.querySelectorAll(".item--title"); // Seleciona os números

    const observerOptions = {
      root: null, // Observa em relação ao viewport
      threshold: 0.1, // Ativa quando 10% do elemento é visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // O elemento está visível
          animateCounters(entry.target);
          observer.unobserve(entry.target); // Para observar novamente após a animação
        }
      });
    }, observerOptions);

    counters.forEach((counter) => observer.observe(counter));
  }

  // Inicia o Intersection Observer quando o DOM está pronto
  window.addEventListener("DOMContentLoaded", initIntersectionObserver);