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

        <div className="about__container reveal base">
          <p>
            Este <span className="bold">sistema de gestión para supermercados es una aplicación web</span> diseñada para ayudar a los propietarios y gerentes de supermercados a administrar eficientemente sus operaciones diarias.
          </p>
          <p>
            El software ofrece una amplia gama de funcionalidades, incluyendo la gestión de inventario, el seguimiento de ventas, la administración de clientes y la generación de reportes detallados. Con una <span className="bold">interfaz intuitiva y fácil de usar</span>, este sistema permite a los usuarios optimizar sus procesos comerciales, mejorar la experiencia del cliente y tomar decisiones informadas basadas en datos precisos.
          </p>
          <p>
            A diferencia de un <span className="bold">software instalable</span>, esta aplicación web se accede a través de un navegador, lo que significa que <span className="bold">no requiere instalación local</span> y puede ser utilizada desde <span className="bold">cualquier dispositivo con conexión a Internet</span>. Esto proporciona flexibilidad y accesibilidad para los usuarios, permitiéndoles gestionar su supermercado de manera eficiente desde cualquier lugar.
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
