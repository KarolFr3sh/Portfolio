document.addEventListener("DOMContentLoaded", () => {
  // ==== Fade-in scroll ====
  const faders = document.querySelectorAll(".fade-in");
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px"
  });
  faders.forEach(fader => appearOnScroll.observe(fader));

  // ==== Menu activo ====
  const links = document.querySelectorAll('.main-nav .menu a');
  links.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
  });

  // ==== Botón volver arriba ====
  const toTopBtn = document.createElement("button");
  toTopBtn.innerHTML = `<i class="fas fa-chevron-up"></i>`;
  toTopBtn.className = "back-to-top";
  document.body.appendChild(toTopBtn);
  window.addEventListener("scroll", () => {
    toTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
  });
  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ==== Filtro por categoría ====
  const filterButtons = document.querySelectorAll(".filter");
  const projectCards = document.querySelectorAll(".project-card");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      const category = button.getAttribute("data-category");
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        if (category === "all" || cardCategory === category) {
          card.removeAttribute("hidden");
        } else {
          card.setAttribute("hidden", true);
        }
      });
    });
  });

  // ==== Redirección en formulario ====
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function () {
      setTimeout(() => window.location.href = 'gracias.html', 1000);
    });
  }

  // ==== Partículas.js ====
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#f65f59" },
        shape: { type: "circle", stroke: { width: 0 }, polygon: { nb_sides: 5 } },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#f65f59", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, out_mode: "out" }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 200 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }

  // ==== Cortina (si existe) ====
  const cortina = document.querySelector(".cortina");
  if (cortina) {
    setTimeout(() => cortina.classList.add("abrir"), 1000);
  }

  // ==== Menú hamburguesa ====
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-nav .menu');
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('show');
      document.body.classList.toggle('menu-opened');
    });
  }

  // ==== Ripple efecto ====
  document.addEventListener("click", (e) => {
    const ripple = document.createElement("span");
    ripple.className = "click-ripple";
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
