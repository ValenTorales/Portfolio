import useRevealOnScroll from "../hooks/useRevealOnScroll";
import BlurCarousel from "../components/BlurCarousel";

export default function ProyectoAlcorte() {
  useRevealOnScroll();

  const images = [
    { src: "/barberia1.png", alt: "Alcorte - 1" },
    { src: "/barberia2.png", alt: "Alcorte - 2" },
    { src: "/barberia3.png", alt: "Alcorte - 3" },
    { src: "/barberia4.png", alt: "Alcorte - 4" },
    { src: "/barberia5.png", alt: "Alcorte - 5" },
    { src: "/barberia6.png", alt: "Alcorte - 6" },
    { src: "/barberia7.png", alt: "Alcorte - 7" },
    { src: "/barberia8.png", alt: "Alcorte - 8" },
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
