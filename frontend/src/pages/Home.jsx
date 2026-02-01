import useRevealOnScroll from "../hooks/useRevealOnScroll";

export default function Home() {
  useRevealOnScroll();
  return (
    <div className="stack gap-lg">
      <section className="hero">
        <div className="hero__container">
          <div className="hero__inner">
            <h1 className="hero__title">
              Desarrollador Web
              <span className="hero__accent">Freelancer</span>
            </h1>

            <p className="hero__subtitle">
              Creo experiencias web modernas y funcionales que impulsan tu negocio hacia el éxito digital
            </p>

            <div className="hero__actions">
              <a href="/portafolio" className="btn btn--lg btn--accent">Ver Portfolio</a>

              <a href="https://wa.me/5493454936747?text=Hola%20!%20Quiero%20iniciar%20mi%20proyecto." target="_blank" className="btn btn--lg btn--outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                <span>Contactar</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about__container">
          <div className="about__grid">
            <div className="about__text reveal">
              <h2 className="about__title">Sobre Mí</h2>

              <div className="about__desc">
                <p>
                  Soy un desarrollador web freelancer apasionado por crear soluciones digitales innovadoras.
                  Con más de 2 años de experiencia, me especializo en desarrollo frontend y backend utilizando
                  las tecnologías más modernas.
                </p>
                <p>
                  Mi enfoque se centra en entregar proyectos de alta calidad que no solo cumplan con los requisitos
                  técnicos, sino que también proporcionen una experiencia excepcional al usuario final.
                </p>
              </div>

              <div className="about__chips">
                <span className="chip">React</span>
                <span className="chip">Next.js</span>
                <span className="chip">TypeScript</span>
                <span className="chip">JavaScript</span>
                <span className="chip">Node.js</span>
                <span className="chip">MySQL</span>
              </div>
            </div>

            <div className="about__image reveal">
              <img
                src="/imagen.jpg"
                alt="Foto profesional del desarrollador"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="services">
        <div className="services__container">
          <div className="services__header">
            <h2 className="services__title">Servicios</h2>
            <p className="services__subtitle">
              Ofrezco soluciones completas de desarrollo web adaptadas a las necesidades de tu proyecto
            </p>
          </div>

          <div className="services__grid">
            {/* Card 1 */}
            <article className="card reveal">
              <div className="card__content">
                <div className="card__icon">
                  {/* Code icon */}
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
                       stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l-6-6l6-6" />
                    <path d="M15 6l6 6l-6 6" />
                  </svg>
                </div>
                <h3 className="card__title">Desarrollo Frontend</h3>
                <p className="card__text">
                  Interfaces modernas y responsivas con React y las mejores prácticas de UX/UI
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="card reveal">
              <div className="card__content">
                <div className="card__icon">
                  {/* Zap icon */}
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
                       stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 3L4 14h7l-1 7l9-11h-7l1-7z" />
                  </svg>
                </div>
                <h3 className="card__title">Desarrollo Backend</h3>
                <p className="card__text">
                  APIs robustas y escalables con Node.js, bases de datos y arquitecturas modernas
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="card reveal">
              <div className="card__content">
                <div className="card__icon">
                  {/* Palette icon */}
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none"
                       stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a9 9 0 1 0 0 18c2 0 3-1 3-2.5c0-1-1-1.5-1-2.5s1-1.5 2-1.5h1a4 4 0 0 0 0-8a9 9 0 0 0-5-1z" />
                    <circle cx="7.5" cy="10.5" r="1" />
                    <circle cx="10" cy="7.5" r="1" />
                    <circle cx="14" cy="7.5" r="1" />
                    <circle cx="16.5" cy="10.5" r="1" />
                  </svg>
                </div>
                <h3 className="card__title">Diseño Web</h3>
                <p className="card__text">
                  Diseños atractivos y funcionales que reflejan la identidad de tu marca
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
          <footer className="footer reveal">
      <div className="footer__content">
        <h2 className="footer__title">¿Listo para tu próximo proyecto?</h2>
        <p className="footer__subtitle">
          Trabajemos juntos para hacer realidad tu visión digital
        </p>

        <div className="footer__buttons">
          <a href="https://wa.me/5493454936747?text=Hola%20!%20Quiero%20iniciar%20mi%20proyecto." target="_blank" className="footer__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
            <span>Enviar un WhatsApp</span>
          </a>
        </div>

        <div className="footer__socials">
          <a href="https://github.com/ValenTorales" target="_blank" className="footer__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            ><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/valentin-torales-806165259/" target="_blank" className="footer__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkkHCblqvBrFbMmkzpwDZmsvzlmhMgkqztQkCKPzdXMRRMVklLLgtzQGVqqwTsVsztLmXx" target="_blank" className="footer__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
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
