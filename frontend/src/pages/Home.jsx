import useRevealOnScroll from "../hooks/useRevealOnScroll";

export default function Home() {
  useRevealOnScroll();

  return (
    <div className="stack gap-lg">
      <section className="hero">
        <div className="hero__container">
          <div className="hero__inner">
            <h1 className="hero__title">
              Páginas web para
              <span className="hero__accent">negocios reales</span>
            </h1>

            <p className="services__subtitle">
              Soluciones simples, claras y pensadas para que tu pyme, comercio o emprendimiento
              se vea mejor, venda mejor y trabaje más ordenado, desde una página web hasta un sistema a medida.
            </p>

            <div className="hero__actions">
              <a href="/portafolio" className="btn btn--lg btn--accent">
                Ver trabajos realizados
              </a>

              <a
                href="https://wa.me/5493454936747?text=Hola!%20Quiero%20consultar%20por%20una%20p%C3%A1gina%20web%20para%20mi%20negocio."
                target="_blank"
                rel="noreferrer"
                className="btn btn--lg btn--outline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about__container">
          <div className="about__grid">
            <div className="about__text reveal">
              <h2 className="about__title">Tu negocio también necesita verse bien online</h2>

              <div className="about__desc">
                <p>
                  Hoy muchas personas buscan en internet antes de comprar, pedir un turno
                  o consultar por un servicio. Si tu negocio no tiene una página clara,
                  moderna y fácil de usar, podés estar perdiendo oportunidades todos los días.
                </p>

                <p>
                  Mi trabajo es ayudarte a mostrar lo que hacés de forma profesional:
                  tus servicios, productos, ubicación, horarios, trabajos realizados y formas
                  de contacto. Todo pensado para que tus clientes entiendan rápido qué ofrecés
                  y puedan escribirte sin vueltas.
                </p>
              </div>
            </div>

            <div className="about__image reveal">
              <img
                src="/imagen.jpg"
                alt="Desarrollador trabajando en soluciones web para negocios"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services__container">
          <div className="services__header">
            <h2 className="services__title">¿Qué puedo hacer por tu negocio?</h2>

            <p className="services__subtitle">
              Soluciones simples, claras y pensadas para que tu pyme, comercio o emprendimiento
              se vea mejor, venda mejor y trabaje más ordenado.
            </p>
          </div>

          <div className="services__grid">
            <article className="card reveal">
              <div className="card__content">
                <div className="card__icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h10" />
                  </svg>
                </div>

                <h3 className="card__title">Página web para tu negocio</h3>

                <p className="card__text">
                  Una página profesional para mostrar quién sos, qué ofrecés, dónde estás
                  y cómo pueden contactarte. Ideal para generar confianza y recibir consultas.
                </p>
              </div>
            </article>

            <article className="card reveal">
              <div className="card__content">
                <div className="card__icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2l1.5 4h9L18 2" />
                    <path d="M4 6h16l-1.5 14h-13z" />
                    <path d="M9 11h6" />
                    <path d="M9 15h4" />
                  </svg>
                </div>

                <h3 className="card__title">Catálogo online</h3>

                <p className="card__text">
                  Mostrá tus productos o servicios en una web ordenada, con categorías,
                  fotos, precios y botón directo para que te consulten por WhatsApp.
                </p>
              </div>
            </article>

            <article className="card reveal">
              <div className="card__content">
                <div className="card__icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M8 8h8" />
                    <path d="M8 12h8" />
                    <path d="M8 16h5" />
                  </svg>
                </div>

                <h3 className="card__title">Sistemas simples de gestión</h3>

                <p className="card__text">
                  Herramientas para organizar clientes, pedidos, turnos, stock, ventas
                  o trabajos. Pensado para negocios que quieren dejar de depender del cuaderno.
                </p>
              </div>
            </article>

            <article className="card reveal">
              <div className="card__content">
                <div className="card__icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2z" />
                    <path d="M8 9h8" />
                    <path d="M8 13h6" />
                    <path d="M8 17h4" />
                  </svg>
                </div>

                <h3 className="card__title">Software a medida</h3>

                <p className="card__text">
                  Desarrollo sistemas personalizados para negocios que necesitan organizar mejor
                  su trabajo: clientes, ventas, stock, turnos, pagos, pedidos, reparaciones o procesos internos.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services__container">
          <div className="services__header">
            <h2 className="services__title">Ideas según tu tipo de negocio</h2>

            <p className="services__subtitle">
              No necesitás saber de tecnología. Yo te ayudo a encontrar qué solución
              puede servirte según cómo trabajás hoy.
            </p>
          </div>

          <div className="ideas__grid">
            <article className="card reveal">
              <div className="card__content">
                <h3 className="card__title">Para comercios</h3>

                <p className="card__text">
                  Catálogo de productos, consultas por WhatsApp, ubicación, horarios,
                  promociones y una imagen más profesional para tus clientes.
                </p>
              </div>
            </article>

            <article className="card reveal">
              <div className="card__content">
                <h3 className="card__title">Para servicios</h3>

                <p className="card__text">
                  Página con servicios, trabajos realizados, formulario de contacto,
                  botón de WhatsApp y secciones pensadas para generar confianza.
                </p>
              </div>
            </article>

            <article className="card reveal">
              <div className="card__content">
                <h3 className="card__title">Para negocios que quieren ordenarse</h3>

                <p className="card__text">
                  Sistemas para registrar clientes, ventas, turnos, pagos, reparaciones,
                  stock o cualquier proceso que hoy estés manejando de forma manual.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="footer reveal">
        <div className="footer__content">
          <h2 className="footer__title">¿Querés mejorar o digitalizar tu negocio?</h2>

          <p className="footer__subtitle">
            Contame qué hacés, cómo trabajás y te ayudo a pensar una solución simple:
            una página web, un catálogo online o un sistema a medida para organizar tu negocio.
          </p>

          <div className="footer__buttons">
            <a
              href="https://wa.me/5493454936747?text=Hola!%20Quiero%20consultar%20por%20una%20p%C3%A1gina%20web%20o%20software%20a%20medida%20para%20mi%20negocio."
              target="_blank"
              rel="noreferrer"
              className="footer__btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>

              <span>Hablar por WhatsApp</span>
            </a>
          </div>

          <div className="footer__socials">
            <a
              href="https://github.com/ValenTorales"
              target="_blank"
              rel="noreferrer"
              className="footer__icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/valentin-torales-806165259/"
              target="_blank"
              rel="noreferrer"
              className="footer__icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </a>

            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMScTSvvqdtBGWXlnDnQMXvvTFwRldKBtSZKmXMTlFDRqMGphQbTKmQjvbpDrNLMXwCbHQb"
              target="_blank"
              rel="noreferrer"
              className="footer__icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}