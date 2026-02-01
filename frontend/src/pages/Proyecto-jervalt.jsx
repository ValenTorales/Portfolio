import useRevealOnScroll from "../hooks/useRevealOnScroll";
import BlurCarousel from "../components/BlurCarousel";

export default function ProyectoJervalt() {
  useRevealOnScroll();

  const images = [
    { src: "/jervalt1.png", alt: "Jervalt - 1" },
    { src: "/jervalt2.png", alt: "Jervalt - 2" },
    { src: "/jervalt3.png", alt: "Jervalt - 3" },
    { src: "/jervalt4.png", alt: "Jervalt - 4" },
    { src: "/jervalt5.png", alt: "Jervalt - 5" },
  ];

  return (
    <div className="">
      <section className="hero">
        <div className="hero__container hero__inner">
          <h1 className="hero__title">Jervalt - Web</h1>
          <p className="hero__subtitle">
            Pagina web para un corralón-ferretería, en el cual se pueden ver los productos y servicios que ofrecen, además de un formulario de contacto y panel del administrador.
          </p>
        </div>
      </section>

      {/* Carrusel */}
      <section className="about proy">
        <div className="about__container reveal">
          <BlurCarousel images={images} height={650} />
        </div>

        <div className="about__container reveal">
          <p>
            Proyecto desarrollado con React.js en el frontend y Node.js en el backend, utilizando SQLite como base de datos. Incluye un panel de administración para gestionar productos y catalogo.
          </p>
        </div>
      </section>

      <section className="footer reveal">
        <div className="container ta-center">
          <h2 className="footer__title">¿Te gusta lo que ves?</h2>
          <p className="footer__subtitle">
            Hablemos sobre tu próximo proyecto y cómo puedo ayudarte a alcanzar tus objetivos
          </p>
          <a
            className="footer__btn"
            href="https://wa.me/5493454936747?text=Hola%20!%20Vengo%20del%20sitio%20Vivero%20Green."
            target="_blank"
            rel="noreferrer"
          >
            Iniciar Proyecto
          </a>
        </div>
      </section>
    </div>
  );
}
