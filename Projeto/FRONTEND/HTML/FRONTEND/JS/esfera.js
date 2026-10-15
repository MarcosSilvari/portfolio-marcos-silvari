const link = document.getElementById("link");
const orbe = document.getElementById("orbe");

link.addEventListener("click", function (evento) {
  // 1. Impede o link de navegar na hora (senão a animação não aparece)
  evento.preventDefault();

  // 2. Evita clicar duas vezes durante a animação
  if (orbe.classList.contains("clicou")) return;

  // 3. Liga a animação de pulso na orbe inteira (esfera + efeitos)
  orbe.classList.add("clicou");

  // 4. Pega o destino do href e espera a animação acabar (900ms) para ir
  const destino = link.getAttribute("href");
  setTimeout(function () {
    window.location.href = destino;
  }, 900);
});