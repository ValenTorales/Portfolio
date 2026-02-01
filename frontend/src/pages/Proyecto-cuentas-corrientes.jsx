import useRevealOnScroll from "../hooks/useRevealOnScroll";
import BlurCarousel from "../components/BlurCarousel";

export default function ProyectoCuentasCorrientes() {
  useRevealOnScroll();

  const images = [
    { src: "/cuentas1.png", alt: "Cuentas Corrientes - Inicio" },
    { src: "/cuentas2.png", alt: "Cuentas Corrientes - Clientes" },
    { src: "/cuentas3.png", alt: "Cuentas Corrientes - Productos" },
    { src: "/cuentas4.png", alt: "Cuentas Corrientes - Registrar retiro" },
    { src: "/cuentas5.png", alt: "Cuentas Corrientes - Registrar pago" },
    { src: "/cuentas6.png", alt: "Cuentas Corrientes - Cuenta por cliente" },
    { src: "/cuentas7.png", alt: "Cuentas Corrientes - Resumen", style: { paddingLeft: "25rem", paddingRight: "25rem" } },
  ];

  return (
    <div className="">
      <section className="hero">
        <div className="hero__container hero__inner">
          <h1 className="hero__title">Gestion de Cuentas Corrientes</h1>
          <p className="hero__subtitle">
            Software simple, de una sola pagina, para gestionar cuentas corrientes de clientes
          </p>
        </div>
      </section>

      {/* Carrusel */}
      <section className="about proy">
        <div className="about__container reveal cc-carousel">
          <BlurCarousel images={images} height={650} />
        </div>

        <div className="about__container reveal">
          <p>Software básico, fácil de gestionar y super liviano. Instalable en cualquier sistema operativo compatible con Node.js</p>
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
