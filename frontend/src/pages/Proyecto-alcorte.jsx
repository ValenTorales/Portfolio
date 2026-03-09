import useRevealOnScroll from "../hooks/useRevealOnScroll";
import BlurCarousel from "../components/BlurCarousel";
import BotonFlotante from "../components/BotonFlotante";

export default function ProyectoAlcorte() {
  useRevealOnScroll();

  const images = [
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/f_webp,q_auto/v1771705720/barberia1_edqfoh.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705720/barberia1_edqfoh.png",
      alt: "Alcorte - 1" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/f_webp,q_auto/v1771705721/barberia2_q9mchq.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705721/barberia2_q9mchq.png",
      alt: "Alcorte - 2" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/f_webp,q_auto/v1771705721/barberia3_nnjjrx.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705721/barberia3_nnjjrx.png",
      alt: "Alcorte - 3" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/f_webp,q_auto/v1771705722/barberia4_cvmyy7.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705722/barberia4_cvmyy7.png",
      alt: "Alcorte - 4" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/f_webp,q_auto/v1771705723/barberia5_vus0aa.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705723/barberia5_vus0aa.png",
      alt: "Alcorte - 5" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/f_webp,q_auto/v1771705724/barberia6_trztoh.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705724/barberia6_trztoh.png",
      alt: "Alcorte - 6" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/f_webp,q_auto/v1771705725/barberia7_qts9nk.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705725/barberia7_qts9nk.png",
      alt: "Alcorte - 7" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/f_webp,q_auto/v1771705726/barberia8_nvcjaj.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705726/barberia8_nvcjaj.png",
      alt: "Alcorte - 8" },
  ];

  return (
    <div className="">
      <section className="hero">
        <div className="hero__container hero__inner">
          <h1 className="hero__title">Alcorte Studio - Web</h1>
          <p className="hero__subtitle">
            Plataforma web para gestión de turnos en una barbería, permitiendo a los clientes reservar citas en línea y al personal administrar horarios.
          </p>
        </div>
      </section>
      <BotonFlotante />
      {/* Carrusel */}
      <section className="about proy">
        <div className="about__container reveal">
          <BlurCarousel images={images} height={650} />
        </div>

        <div className="about__container reveal">
          <p>
            Sistema de reservas en línea que permite a los clientes seleccionar servicios, elegir horarios disponibles y recibir confirmaciones automáticas por correo electrónico.
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
