import useRevealOnScroll from "../hooks/useRevealOnScroll";
import BlurCarousel from "../components/BlurCarousel";

export default function ProyectoAguas() {
  useRevealOnScroll();

  const images = [
    { src: "/aguas1.png", alt: "Aguas - 1" },
    { src: "/aguas2.png", alt: "Aguas - 2" },
    { src: "/aguas3.png", alt: "Aguas - 3" },
    { src: "/aguas4.png", alt: "Aguas - 4" },
    { src: "/aguas5.png", alt: "Aguas - 5" },
    { src: "/aguas6.png", alt: "Aguas - 6" },
    { src: "/aguas7.png", alt: "Aguas - 7" },
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
