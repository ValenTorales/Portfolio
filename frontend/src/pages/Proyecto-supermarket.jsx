import useRevealOnScroll from "../hooks/useRevealOnScroll";
import BlurCarousel from "../components/BlurCarousel";
import BotonFlotante from "../components/BotonFlotante";

export default function ProyectoSupermarket() {
  useRevealOnScroll();

  const images = [
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_1400,f_webp,q_auto/v1771705896/market1_egytn4.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705896/market1_egytn4.png",
      alt: "Supermarket - 1" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_1400,f_webp,q_auto/v1771705897/market2_tkpruv.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705897/market2_tkpruv.png",
      alt: "Supermarket - 2" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_1400,f_webp,q_auto/v1771705897/market3_tz3ldk.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705897/market3_tz3ldk.png",
      alt: "Supermarket - 3" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_1400,f_webp,q_auto/v1771705898/market4_qndzej.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705898/market4_qndzej.png",
      alt: "Supermarket - 4" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_1400,f_webp,q_auto/v1771705899/market5_hpoblu.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1771705899/market5_hpoblu.png",
      alt: "Supermarket - 5" },
  ];

  return (
    <div className="">
      <section className="hero">
        <div className="hero__container hero__inner">
          <h1 className="hero__title">Software Supermarket - Gestión de Supermercados</h1>
          <p className="hero__subtitle">
            Software de gestión para supermercados, con funcionalidades de inventario, ventas,
            clientes y reportes.
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
            Dentro de este sistema nuestro cliente puede tener un control total sobre su inventario, permitiéndole agregar, editar y eliminar productos de manera sencilla. Además, el sistema registra todas las ventas realizadas, lo que facilita la gestión financiera y mejora la experiencia del cliente.
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
