import useRevealOnScroll from "../hooks/useRevealOnScroll";
import BlurCarousel from "../components/BlurCarousel";

export default function ProyectoViveroGreen() {
  useRevealOnScroll();

  const images = [
    // Admin
    { src: "/vivero1.png", alt: "Vivero Green - 1" },
    { src: "/vivero2.png", alt: "Vivero Green - 2" },
    { src: "/vivero3.png", alt: "Vivero Green - 3", style: { paddingLeft: "9rem", paddingRight: "9rem" } },
    { src: "/vivero4.png", alt: "Vivero Green - 4" },
    { src: "/vivero5.png", alt: "Vivero Green - 5" },
    { src: "/vivero6.png", alt: "Vivero Green - 6" },
    { src: "/vivero7.png", alt: "Vivero Green - 7", style: { paddingLeft: "9rem", paddingRight: "9rem" } },
    { src: "/vivero8.png", alt: "Vivero Green - 8" },
    { src: "/vivero9.png", alt: "Vivero Green - 9" },
  ];

  return (
    <div className="">
      {/* HERO */}
      <section className="hero">
        <div className="hero__container hero__inner">
          <h1 className="hero__title">Vivero-Green</h1>
          <p className="hero__subtitle">
            Tienda virtual de plantas y productos de jardinería
          </p>
        </div>
      </section>

      {/* CARRUSEL ÚNICO */}
      <section className="about proy">
        <div className="about__container reveal">
          <BlurCarousel images={images} height={650} />
        </div>

        <div className="about__container reveal">
          <p>
            Plataforma completa con panel de administración, vista de cliente y
            diseño totalmente responsivo para una experiencia óptima en
            dispositivos móviles y de escritorio.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <section className="footer reveal">
        <div className="container ta-center">
          <h2 className="footer__title">¿Te gusta lo que ves?</h2>
          <p className="footer__subtitle">
            Hablemos sobre tu próximo proyecto y cómo puedo ayudarte a alcanzar
            tus objetivos
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
