import useRevealOnScroll from "../hooks/useRevealOnScroll";
import BlurCarousel from "../components/BlurCarousel";
import BotonFlotante from "../components/BotonFlotante";

export default function ProyectoAguas() {
  useRevealOnScroll();

  const images = [
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705716/aguas1_hehke3.png", alt: "Aguas - 1" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705715/aguas2_g9ozvb.png", alt: "Aguas - 2" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705716/aguas3_vjwupg.png", alt: "Aguas - 3" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705717/aguas4_gmmfzp.png", alt: "Aguas - 4" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705717/aguas5_mftbn3.png", alt: "Aguas - 5" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705717/aguas6_nbxvhm.png", alt: "Aguas - 6" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/v1771705718/aguas7_bfqujw.png", alt: "Aguas - 7" },
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

        <div className="about__container reveal">
          <p>
            Dentro de este sistema nuestro cliente puede tener un control total sobre su base de datos de clientes, permitiéndole agregar, editar y eliminar información de manera sencilla. Además, el sistema genera facturas automáticas basadas en el consumo registrado, lo que facilita la gestión financiera y mejora la experiencia del cliente al ofrecer opciones de pago en línea como asi tambien una sección de reclamos.
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
