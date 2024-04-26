$(document).ready(function () {
  // Seu código aqui
});
var offcanvasElement = document.getElementById("offcanvasNavbar");
offcanvasElement.addEventListener("shown.bs.offcanvas", function () {
  document.body.style.overflow = "visible";
});

offcanvasElement.addEventListener("hidden.bs.offcanvas", function () {
  document.body.style.overflow = "auto";
});

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video-container video");

  if (video) {
    video.play().catch((error) => {
      console.error("Autoplay was prevented.");
      // Cria e mostra um botão de play caso o autoplay não funcione
      const playButton = document.createElement("button");
      playButton.innerText = "Play";
      playButton.classList.add("play-video-button"); // Adicione uma classe para estilização
      playButton.addEventListener("click", () => {
        video.play();
      });

      // Adiciona o botão próximo ao vídeo ou em um local visível
      video.parentNode.insertBefore(playButton, video.nextSibling);
    });
  }
});
