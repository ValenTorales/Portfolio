import useRevealOnScroll from "../hooks/useRevealOnScroll";

export default function Portfolio() {
  useRevealOnScroll();

  return (
    <div className="page-portfolio">
      <section className="hero">
        <div className="hero__container hero__inner">
          <h1 className="hero__title">Mi Portfolio</h1>
          <p className="hero__subtitle">
            Una selección de proyectos que demuestran mi experiencia en desarrollo web moderno
          </p>
        </div>
      </section>

      <section className="hero__container">
        <div className="destacados">
          <h2>Proyectos Destacados</h2>

          <div className="grid grid-2-lg">
            {/* ===== Proyecto 1 ===== */}
            <article className="dest project reveal">
              <div className="project__media">
                <img
                  src="/jervalt1.png"
                  alt="Jervalt - Web para Ferretería"
                  className="project__img"
                />
                <div className="project__overlay">
                  <a
                    className="btn btn--sm btn--secondary"
                    href="/proyecto-jervalt"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <path d="M15 3h6v6" />
                      <path d="M10 14L21 3" />
                    </svg>
                    <span>Ver Proyecto</span>
                  </a>

                  <a
                    className="btn btn--sm btn--secondary"
                    href="https://github.com/ValenTorales/Jervalt"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3" />
                      <path d="M15 21v-3.5c0-1 .1-1.4 -.5-2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2V21" />
                    </svg>
                    <span>Código</span>
                  </a>
                </div>
              </div>

              <div className="dest__header">
                <h3 className="dest__title">Jervalt - Web para Ferretería</h3>
              </div>

              <div className="dest__content">
                <p className="muted">
                  Plataforma web para una ferretería local, que incluye información relevante,
                  catálogo de productos y panel del administrador.
                </p>

                <div className="about__chips">
                  <span className="chip">React.js</span>
                  <span className="chip">Axios</span>
                  <span className="chip">Node.js</span>
                  <span className="chip">SQLite</span>
                </div>
              </div>
            </article>

            {/* ===== Proyecto 2 ===== */}
            <article className="dest project reveal">
              <div className="project__media">
                <img
                  src="/barberia1.png"
                  alt="AlCorte Studio - Web para Barbería"
                  className="project__img"
                />
                <div className="project__overlay">
                  <a
                    className="btn btn--sm btn--secondary"
                    href="/proyecto-alcorte"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <path d="M15 3h6v6" />
                      <path d="M10 14L21 3" />
                    </svg>
                    <span>Ver Proyecto</span>
                  </a>

                  <a
                    className="btn btn--sm btn--secondary"
                    href="https://github.com/ValenTorales/Barbershop_Appointments"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3" />
                      <path d="M15 21v-3.5c0-1 .1-1.4 -.5-2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2V21" />
                    </svg>
                    <span>Código</span>
                  </a>
                </div>
              </div>

              <div className="dest__header">
                <h3 className="dest__title">AlCorte Studio - Web para Barbería</h3>
              </div>

              <div className="dest__content">
                <p className="muted">
                  Plataforma web para gestión de turnos en una barbería, permitiendo a los
                  clientes reservar citas en línea y al personal administrar horarios.
                </p>

                <div className="about__chips">
                  <span className="chip">React.js</span>
                  <span className="chip">Node.js</span>
                  <span className="chip">SQLite</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about__container reveal">
          <h2>Otros Proyectos</h2>

          <div className="grid grid-2-md grid-3-lg">
            <article className="dest project project--compact">
              <div className="project__media">
                <img
                  src="/cuentas1.png"
                  alt="Gestión de Cuentas Corrientes"
                  className="project__img --h48"
                />
              </div>

              <div className="dest__header">
                <h3 className="dest__title sm">Gestión de Cuentas Corrientes</h3>
              </div>

              <div className="dest__content">
                <p className="muted small">
                  Software simple, de una sola pagina, para gestionar cuentas corrientes de clientes
                </p>

                <div className="about__chips">
                  <span className="chip">React.js</span>
                  <span className="chip">Node.js</span>
                </div>

                <div className="btns-project">
                  <a
                    className="btn btn--sm btn--outline btn__project"
                    href="/proyecto-cuentas-corrientes"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <path d="M15 3h6v6" />
                      <path d="M10 14L21 3" />
                    </svg>
                    <span>Ver</span>
                  </a>
                </div>
              </div>
            </article>

            <article className="dest project project--compact">
              <div className="project__media">
                <img
                  src="/P1.png"
                  alt="Tienda Virtual - Vivero Green"
                  className="project__img --h48"
                />
              </div>

              <div className="dest__header">
                <h3 className="dest__title sm">Tienda Virtual - Vivero Green</h3>
              </div>

              <div className="dest__content">
                <p className="muted small">
                  Tienda virtual para un vivero, con funcionalidades de carrito de compras, gestión de
                  productos, consultas y usuarios.
                </p>

                <div className="about__chips">
                  <span className="chip">React.js</span>
                  <span className="chip">Node.js</span>
                </div>

                <div className="btns-project">
                  <a
                    className="btn btn--sm btn--outline btn__project"
                    href="/proyecto-vivero-green"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <path d="M15 3h6v6" />
                      <path d="M10 14L21 3" />
                    </svg>
                    <span>Ver</span>
                  </a>
                </div>
              </div>
            </article>

            <article className="dest project project--compact">...</article>
          </div>
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
            href="https://wa.me/5493454936747?text=Hola%20!%20Quiero%20iniciar%20mi%20proyecto."
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
