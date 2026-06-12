import useRevealOnScroll from "../hooks/useRevealOnScroll";

export default function Planes() {
  useRevealOnScroll();

  return (
    <div className="">
      <section className="hero">
        <div className="hero__container hero__inner">
          <h1 className="hero__title">Planes de Desarrollo de Paginas Web</h1>
          <p className="hero__subtitle">
            Desarrollo de paginas web para clientes, con el objetivo de brindar una presencia en línea efectiva y atractiva.
          </p>
        </div>
      </section>

      <section className="plans section">
        <div className="plans__container">
            <div className="plans__grid grid grid-3-lg">

            <article className="card plan-card reveal">
                <div className="card__content plan-card__content">
                <span className="plan-card__badge">Básico</span>

                <h2 className="plan-card__title">Landing Page</h2>

                <div className="plan-card__price">
                    Desde $120.000
                    <span>pago único</span>
                </div>

                <ul className="plan-card__list">
                    <li>Página de una sola sección larga.</li>
                    <li>Diseño adaptado a celular, tablet y computadora.</li>
                    <li>Secciones de inicio, servicios, beneficios, ubicación y contacto.</li>
                    <li>Formulario de contacto.</li>
                    <li>Integración con redes sociales.</li>
                    <li>Mapa de ubicación.</li>
                </ul>

                <a href="https://wa.me/5493454936747?text=Hola%2C%20quiero%20consultar%20por%20una%20p%C3%A1gina%20web" target="_blank" className="btn btn--outline btn--lg plan-card__btn">
                    Consultar plan
                </a>
                </div>
            </article>

            <article className="card plan-card plan-card--featured reveal">
                <div className="card__content plan-card__content">
                <span className="plan-card__badge plan-card__badge--featured">
                    Recomendado
                </span>

                <h2 className="plan-card__title">Sitio Web Institucional</h2>

                <div className="plan-card__price">
                    Desde $280.000
                    <span>pago único</span>
                </div>

                <ul className="plan-card__list">
                    <li>Hasta 5 páginas internas.</li>
                    <li>Inicio, servicios, nosotros, galería/trabajos, contacto.</li>
                    <li>Diseño personalizado según la identidad del negocio.</li>
                    <li>Botón de WhatsApp visible.</li>
                    <li>Formulario de contacto.</li>
                    <li>Google Maps.</li>
                    <li>Carga de imágenes y textos.</li>
                    <li>Optimización básica para Google.</li>
                    <li>Diseño responsive.</li>
                    <li>Asesoramiento para dominio y hosting.</li>
                </ul>

                <a href="https://wa.me/5493454936747?text=Hola%2C%20quiero%20consultar%20por%20una%20p%C3%A1gina%20web" target="_blank" className="btn btn--accent btn--lg plan-card__btn">
                    Elegir este plan
                </a>
                </div>
            </article>

            <article className="card plan-card reveal">
                <div className="card__content plan-card__content">
                <span className="plan-card__badge">Premium</span>

                <h2 className="plan-card__title">Web con Catálogo o Funciones Especiales</h2>

                <div className="plan-card__price">
                    Desde $460.000
                    <span>pago único</span>
                </div>

                <ul className="plan-card__list">
                    <li>Sitio web completo.</li>
                    <li>Catálogo de productos o servicios.</li>
                    <li>Categorías y buscador.</li>
                    <li>Botón de consulta por WhatsApp por cada producto/servicio.</li>
                    <li>Página de detalle para productos o servicios.</li>
                    <li>Panel básico para administrar contenido, opcional según el caso.</li>
                    <li>Formulario de contacto avanzado.</li>
                    <li>Diseño personalizado.</li>
                    <li>Optimización responsive.</li>
                    <li>Publicación online.</li>
                    <li>Capacitación básica para usarlo.</li>
                </ul>

                <a href="https://wa.me/5493454936747?text=Hola%2C%20quiero%20consultar%20por%20una%20p%C3%A1gina%20web" target="_blank" className="btn btn--outline btn--lg plan-card__btn">
                    Consultar premium
                </a>
                </div>
            </article>

            </div>
        </div>
        </section>
        <section className="maintenance-section" id="mantenimiento">
            <div className="maintenance-container">
                <div className="maintenance-content">
                <span className="section-tag">Mantenimiento web</span>

                <h2>Mantené tu página actualizada, segura y funcionando</h2>

                <p>
                    Además del desarrollo de sitios web, también ofrezco mantenimiento mensual
                    para que tu página siga online, actualizada y lista para recibir consultas.
                </p>

                <div className="maintenance-features">
                    <div className="maintenance-item">
                    <span>✓</span>
                    <p>Cambios menores de texto e imágenes</p>
                    </div>

                    <div className="maintenance-item">
                    <span>✓</span>
                    <p>Revisión general del sitio</p>
                    </div>

                    <div className="maintenance-item">
                    <span>✓</span>
                    <p>Soporte por WhatsApp</p>
                    </div>

                    <div className="maintenance-item">
                    <span>✓</span>
                    <p>Backup y control básico</p>
                    </div>
                </div>

                <a
                    href="https://wa.me/5493454936747?text=Hola%2C%20quiero%20consultar%20por%20el%20mantenimiento%20de%20mi%20p%C3%A1gina%20web"
                    target="_blank"
                    className="maintenance-btn"
                >
                    Consultar mantenimiento
                </a>
                </div>

                <div className="maintenance-card">
                <h3>Plan mensual</h3>
                <p className="maintenance-price">Desde $20.000 ARS</p>

                <ul>
                    <li>Actualización de contenido</li>
                    <li>Correcciones menores</li>
                    <li>Revisión mensual</li>
                    <li>Soporte técnico básico</li>
                </ul>

                <p className="maintenance-note">
                    Ideal para negocios que ya tienen una web y quieren mantenerla cuidada.
                </p>
                </div>
            </div>
            </section>
    </div>
  );
}