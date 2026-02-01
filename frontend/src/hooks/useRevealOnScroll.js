import { useEffect } from "react";

export default function useRevealOnScroll(
  selector = ".reveal",
  options = { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
){
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach(el => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");   // aparece (animación de entrada)
        } else {
          e.target.classList.remove("is-visible"); // se oculta para poder re-entrar
        }
      });
    }, options);

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector, options]);
}
