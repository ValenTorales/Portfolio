import useRevealOnScroll from "../hooks/useRevealOnScroll";
import BlurCarousel from "../components/BlurCarousel";
import BotonFlotante from "../components/BotonFlotante";

export default function ProyectoListas() {
  useRevealOnScroll();

  const images = [
    // Admin
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_1400,f_webp,q_auto/v1781142507/Listas1_rffeez.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1781142507/Listas1_rffeez.png",
      alt: "Listas - 1" },
    { src: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_1400,f_webp,q_auto/v1781142508/Listas2_unjwdw.png",
      bgSrc: "https://res.cloudinary.com/dxa7jp1ew/image/upload/w_400,f_auto,q_auto/v1781142508/Listas2_unjwdw.png",
      alt: "Listas - 2" },
  ];

  return (
    <div className="">
      {/* HERO */}
      <section className="hero">
        <div className="hero__container hero__inner">
          <h1 className="hero__title">Listas de Productos</h1>
          <p className="hero__subtitle">
            Software de gestión de listas de productos
          </p>
        </div>
      </section>
      <BotonFlotante />
      {/* CARRUSEL ÚNICO */}
      <section className="about proy">
        <div className="about__container reveal">
          <BlurCarousel images={images} height={650} />
        </div>

        <div className="about__container reveal base">
          <p>
            El sistema es una <span className="bold">aplicación de escritorio</span> para Windows pensada para que una ferretería pueda tener sus productos y precios ordenados de forma simple.
          </p>
          <p>
            La idea principal es que el cliente no tenga que depender de muchas planillas sueltas o de buscar precios manualmente. Abre el programa, entra a una categoría y encuentra rápido el producto que necesita.
          </p>
          <p>
            Este software permite a los usuarios <span className="bold">gestionar sus listas de productos</span> de manera eficiente, ofreciendo una interfaz intuitiva para agregar, editar y eliminar productos, así como para organizar las listas por categorías. Además, cuenta con funciones de <span className="bold">búsqueda inteligente</span> para facilitar la navegación y el acceso rápido a la información.
          </p>
          <p>
            El sistema está hecho con tecnologías livianas, pensadas para una <span className="bold">aplicación simple</span> de escritorio. Es liviano, no necesita internet, es facil de instalar, funciona muy bien en PCs comunes y tiene una interfaz clara y fácil de usar.
          </p>
          <p>
            A futuro, se podrían agregar funciones como exportar las listas a Excel o PDF, o incluso una versión web para acceder desde cualquier dispositivo, control de stock, ventas, etc. Pero por ahora, el foco está en <span className="bold">ofrecer una solución práctica y eficiente</span> para la gestión de productos en una ferretería.
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
