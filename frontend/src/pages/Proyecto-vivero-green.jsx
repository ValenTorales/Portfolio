import useRevealOnScroll from "../hooks/useRevealOnScroll";
import BlurCarousel from "../components/BlurCarousel";
import BotonFlotante from "../components/BotonFlotante";

export default function ProyectoViveroGreen() {
  useRevealOnScroll();

  const images = [
    // Admin
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705904/vivero1_vtsqpn.png", alt: "Vivero Green - 1" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705906/vivero2_hpwrer.png", alt: "Vivero Green - 2" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705908/vivero3_kthlvh.png", alt: "Vivero Green - 3", style: { paddingLeft: "9rem", paddingRight: "9rem" } },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705909/vivero4_hfjlwq.png", alt: "Vivero Green - 4" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705912/vivero5_ujudyn.png", alt: "Vivero Green - 5" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705913/vivero6_rdoruc.png", alt: "Vivero Green - 6" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705915/vivero7_ll2804.png", alt: "Vivero Green - 7", style: { paddingLeft: "9rem", paddingRight: "9rem" } },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705916/vivero8_gsqgub.png", alt: "Vivero Green - 8" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705916/vivero9_cnll4w.png", alt: "Vivero Green - 9" },
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
      <BotonFlotante />
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
            href="https://wa.me/5493454936747?text=Hola!%20Quiero%20iniciar%20mi%20proyecto."
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
