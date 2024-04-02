window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const servicosElement = document.querySelector(".servicos");
  const servicosPosition =
    servicosElement.getBoundingClientRect().top + scrollPosition;
  const servicosOffset = Math.max(0, window.innerHeight - servicosPosition);

  document.querySelectorAll(".servicos .serv").forEach((element, index) => {
    const speed = (index + 1) * 0.05;
    element.style.transform = `translateY(${servicosOffset * speed}px)`;
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Autoplay
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },

  // If you need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Remova navigation e scrollbar se não estiverem no seu HTML
});
/*<script>
// JavaScript para o menu de navegação dot
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navDots = document.querySelector('.nav-dot-menu');

  // Função para atualizar a navegação dot
  function updateNavDots() {
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navDots.querySelectorAll('a').forEach((dot) => dot.classList.remove('active'));
    navDots.querySelectorAll('a')[index].classList.add('active');
  }

  updateNavDots();
  window.addEventListener('scroll', updateNavDots);
});
</script>*/
