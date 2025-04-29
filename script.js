console.log("Página de vendas carregada.");
 /* slider dos depoimentos */
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  document.querySelector('.next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
  });

  document.querySelector('.prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
  });


  const perguntas = document.querySelectorAll(".faq-pergunta");

  perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", () => {
      pergunta.classList.toggle("active");
      const resposta = pergunta.nextElementSibling;
      resposta.classList.toggle("open");
    });
  });
