import { useEffect, useMemo, useRef, useState } from "react";

export default function BlurCarousel({ images = [], height = 520 }) {
  const safeImages = useMemo(
    () =>
      (images || [])
        .filter(Boolean)
        .map((it) => (typeof it === "string" ? { src: it } : it))
        .filter((it) => it?.src),
    [images]
  );

  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const touch = useRef({ x: 0, y: 0, active: false });

  const hasMany = safeImages.length > 1;
  const current = safeImages[index] || safeImages[0];

  const prev = () => {
    if (!hasMany) return;
    setIndex((i) => (i === 0 ? safeImages.length - 1 : i - 1));
  };

  const next = () => {
    if (!hasMany) return;
    setIndex((i) => (i === safeImages.length - 1 ? 0 : i + 1));
  };

  // ✅ cada vez que cambia el src, mostramos loader
  useEffect(() => {
    if (!current?.src) return;
    setIsLoading(true);
  }, [current?.src]);

  // ✅ preload next/prev (recomendado)
  useEffect(() => {
    if (!safeImages.length) return;
    const nextIndex = (index + 1) % safeImages.length;
    const prevIndex = (index - 1 + safeImages.length) % safeImages.length;

    [safeImages[nextIndex]?.src, safeImages[prevIndex]?.src].forEach((src) => {
      if (!src) return;
      const img = new Image();
      img.src = src;
    });
  }, [index, safeImages]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (!hasMany) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMany]);

  // Touch swipe
  const onTouchStart = (e) => {
    const t = e.touches?.[0];
    if (!t) return;
    touch.current = { x: t.clientX, y: t.clientY, active: true };
  };

  const onTouchEnd = (e) => {
    if (!hasMany || !touch.current.active) return;
    const t = e.changedTouches?.[0];
    if (!t) return;

    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;

    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      dx > 0 ? prev() : next();
    }
    touch.current.active = false;
  };

  if (!current) return null;

  return (
    <div
      className="bcar"
      style={{ "--bcar-h": `${height}px` }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* background blur */}
      <div
        className="bcar__bg"
        style={{ backgroundImage: `url(${current.src})` }}
        aria-hidden="true"
      />

      {/* gradient */}
      <div className="bcar__shade" aria-hidden="true" />

      {/* ✅ LOADER OVERLAY (jimu) */}
      {isLoading && (
        <div className="bcar__loaderOverlay" aria-hidden="true">
          <div className="loader">
            <div className="justify-content-center jimu-primary-loading"></div>
          </div>
        </div>
      )}

      {/* main image */}
      <img
        key={current.src} // ✅ evita que quede la anterior pintada
        className={`bcar__img ${isLoading ? "is-loading" : "is-loaded"}`}
        src={current.src}
        alt={current.alt || ""}
        style={current.style}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        loading="eager"
        decoding="async"
        draggable="false"
      />

      {/* controls */}
      {hasMany && (
        <>
          <button
            className="bcar__btn bcar__btn--left"
            onClick={prev}
            aria-label="Anterior"
            type="button"
          >
            ‹
          </button>

          <button
            className="bcar__btn bcar__btn--right"
            onClick={next}
            aria-label="Siguiente"
            type="button"
          >
            ›
          </button>

          <div className="bcar__dots" aria-label="Indicadores">
            {safeImages.map((_, i) => (
              <button
                key={i}
                className={`bcar__dot ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                aria-current={i === index ? "true" : "false"}
                type="button"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}