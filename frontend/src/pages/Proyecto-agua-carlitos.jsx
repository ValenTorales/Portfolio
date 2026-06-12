import useRevealOnScroll from "../hooks/useRevealOnScroll";
import BlurCarousel from "../components/BlurCarousel";
import BotonFlotante from "../components/BotonFlotante";

export default function ProyectoAguas() {
  useRevealOnScroll();

  const images = [
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_1400,f_webp,q_auto/v1771705716/aguas1_hehke3.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705716/aguas1_hehke3.png",
      alt: "Aguas - 1" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_1400,f_webp,q_auto/v1771705715/aguas2_g9ozvb.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705715/aguas2_g9ozvb.png",
      alt: "Aguas - 2" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_1400,f_webp,q_auto/v1771705716/aguas3_vjwupg.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705716/aguas3_vjwupg.png",
      alt: "Aguas - 3" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_1400,f_webp,q_auto/v1771705717/aguas4_gmmfzp.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705717/aguas4_gmmfzp.png",
      alt: "Aguas - 4" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_1400,f_webp,q_auto/v1771705717/aguas5_mftbn3.png",
      bgSrc: "https://res.cloudinary.com/dxa-seven/image/upload/w_400,f_auto,q_auto/v1-seven/aguas5_mftbn3.png",
      alt: "Aguas - 5" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_1400,f_webp,q_auto/v1771705717/aguas6_nbxvhm.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705717/aguas6_nbxvhm.png",
      alt: "Aguas - 6" },
  ];

  return (
    <div className="">
      <section className="hero">
        <div className="hero__container hero__inner">
          <h1 className="hero__title">Cooperativa de Agua Potable - Aplicación Web</h1>
          <p className="hero__subtitle">
            Aplicacion para cooperativa de agua potable, con funcionalidades para gestionar clientes, facturación, pagos en línea y reportes de consumo.
          </p>
        </div>
      </section>
      <BotonFlotante />
      {/* Carrusel */}
      <section className="about proy">
        <div className="about__container reveal">
          <BlurCarousel images={images} height={650} />
        </div>

        <div className="about__container reveal base">
          <p>
            Esta <span className="bold">aplicación web para cooperativa de agua potable</span> ofrece una solución integral para la gestión de clientes, facturación, pagos en línea y reportes de consumo. Con esta plataforma, la cooperativa puede administrar eficientemente sus operaciones diarias, brindando a los clientes una experiencia conveniente y moderna.
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
