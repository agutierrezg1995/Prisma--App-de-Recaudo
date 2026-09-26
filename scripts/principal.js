/* =========================================================
   PRISMA$ — LANDING INTERACTIONS
   ========================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- ICON SET (lineal, un solo estilo) ---------- */
  var ICONS = {
    wallet: '<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 9h18"/><circle cx="16.5" cy="12.5" r="1.2"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    "bar-chart": '<path d="M6 20V10M12 20V4M18 20v-7"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/>',
    "eye-off": '<path d="M2 2l20 20"/><path d="M6.7 6.7A10 10 0 0 0 2 12s4 7 10 7a10 10 0 0 0 4.1-.9"/><path d="M9.9 5.2A10 10 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-3 3.6"/><path d="M14.1 14.1a3 3 0 0 1-4.2-4.2"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    receipt: '<path d="M4 2v20l2.5-1.5L9 22l3-1.5 3 1.5 2.5-1.5L20 22V2l-2.5 1.5L15 2l-3 1.5L9 2 6.5 3.5 4 2Z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>',
    activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    whatsapp: '<path d="M12 2a10 10 0 0 0-8.5 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z"/><path d="M17.7 14.5c-.35-.2-2.05-1-2.4-1.15-.35-.15-.6-.2-.85.2s-1 1.2-1.2 1.45-.4.25-.8.05a9.6 9.6 0 0 1-3.3-2.03 9.8 9.8 0 0 1-1.3-2.35c-.25-.35 0-.55.15-.75s.5-.6.7-.95a3.8 3.8 0 0 0 .4-1c0-.15 0-.35-.2-.65s-1-2.4-1.15-3.05-.6-.7-.9-.7h-.75a1.75 1.75 0 0 0-1.25.55 5.2 5.2 0 0 0-1.55 3.8 9 9 0 0 0 1.75 5.25c.25.3 3 4.6 7.4 6.3 2.15.85 2.6.7 3.4.65a3.4 3.4 0 0 0 2-1.35 3.3 3.3 0 0 0 .4-2c-.15-.2-.5-.3-.85-.45Z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    "arrow-up-right": '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
    "arrow-down": '<path d="M12 5v14"/><path d="m6 13 6 6 6-6"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/>',
    smartphone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
    shield: '<path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    "message-circle": '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5h-5l-4 3 1.4-4.2A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2h.01a6 6 0 0 1 2-2Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>'
  };

  function iconSVG(name) {
    var body = ICONS[name] || ICONS.activity;
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + "</svg>";
  }

  document.querySelectorAll("[data-icon]").forEach(function (el) {
    el.innerHTML = iconSVG(el.getAttribute("data-icon"));
  });

  /* ---------- YEAR ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- NAVBAR SCROLL STATE ---------- */
  var navbar = document.querySelector("[data-navbar]");
  var stickyCta = document.querySelector("[data-sticky-cta]");

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (navbar) navbar.classList.toggle("is-scrolled", y > 20);
    if (stickyCta) stickyCta.classList.toggle("is-visible", y > 700 && window.innerWidth <= 767);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  /* ---------- MOBILE MENU ---------- */
  var menuToggle = document.querySelector("[data-menu-toggle]");
  var navMenu = document.getElementById("nav-menu");

  function closeMenu(restoreFocus) {
    if (!menuToggle || !navMenu) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    navMenu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    if (restoreFocus) menuToggle.focus();
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      var open = menuToggle.getAttribute("aria-expanded") === "true";
      if (open) {
        closeMenu(false);
      } else {
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Cerrar menú");
        navMenu.classList.add("is-open");
        document.body.classList.add("no-scroll");
      }
    });
    navMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { closeMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu(true);
    });
    navMenu.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      if (menuToggle.getAttribute("aria-expanded") !== "true") return;
      var items = navMenu.querySelectorAll("a[href]");
      if (!items.length) return;
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  /* ---------- SCROLL SPY ---------- */
  var spyLinks = Array.prototype.slice.call(document.querySelectorAll("[data-spy]"));
  var spyMap = {};
  spyLinks.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var sec = document.getElementById(id);
    if (sec) spyMap[id] = link;
  });

  var spySections = Object.keys(spyMap).map(function (id) { return document.getElementById(id); });
  if ("IntersectionObserver" in window && spySections.length) {
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          spyLinks.forEach(function (l) { l.classList.remove("is-active"); });
          var active = spyMap[entry.target.id];
          if (active) active.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    spySections.forEach(function (s) { spyObserver.observe(s); });
  }

  /* ---------- SCROLL REVEALS ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseInt(el.getAttribute("data-delay") || "0", 10);
        setTimeout(function () { el.classList.add("is-visible"); }, delay);
        obs.unobserve(el);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- HERO ENTRANCE ---------- */
  var hero = document.querySelector(".hero");
  if (hero) {
    requestAnimationFrame(function () {
      setTimeout(function () { hero.classList.add("hero--ready"); }, 60);
    });
  }

  /* ---------- PARALLAX (prismas / glows) ---------- */
  var parallaxEls = document.querySelectorAll(".bg-decor .glow");
  if (!reduceMotion && parallaxEls.length) {
    var rafId = null;
    window.addEventListener("scroll", function () {
      if (rafId) return;
      rafId = requestAnimationFrame(function () {
        var y = window.scrollY || 0;
        parallaxEls.forEach(function (el, i) {
          var speed = (i % 2 === 0 ? 0.04 : 0.07);
          el.style.transform = "translateY(" + (y * speed) + "px)";
        });
        rafId = null;
      });
    }, { passive: true });
  }

  /* ---------- HERO SLIDER ---------- */
  var slider = document.querySelector("[data-slider]");
  if (slider) {
    var track = slider.querySelector("[data-slider-track]");
    var slides = Array.prototype.slice.call(track.querySelectorAll(".slide"));
    var dotsWrap = slider.querySelector("[data-slider-dots]");
    var progressBar = slider.querySelector("[data-slider-progress]");
    var counterEl = slider.querySelector("[data-slider-count]");
    var DURATION = 6000;
    var index = 0;
    var running = false;
    var startTs = 0;
    var elapsed = 0;
    var rafId = null;
    var hovered = false;

    slides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Ir al slide " + (i + 1));
      dot.addEventListener("click", function () { goTo(i); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);

    function render(dir) {
      slides.forEach(function (s, i) {
        s.classList.toggle("is-active", i === index);
        s.classList.toggle("is-prev", dir === "prev" && i === index);
        s.setAttribute("aria-hidden", i === index ? "false" : "true");
      });
      dots.forEach(function (d, i) {
        d.classList.toggle("is-active", i === index);
        d.setAttribute("aria-current", i === index ? "true" : "false");
      });
      if (counterEl) counterEl.textContent = String(index + 1).padStart(2, "0");
    }

    function resetProgress() {
      elapsed = 0;
      startTs = performance.now();
      if (progressBar) progressBar.style.width = "0%";
    }

    function goTo(i, dir) {
      var n = slides.length;
      index = (i + n) % n;
      render(dir);
      resetProgress();
    }

    function tick(now) {
      if (!running) return;
      if (!startTs) startTs = now;
      elapsed += now - startTs;
      startTs = now;
      var pct = Math.min(elapsed / DURATION, 1);
      if (progressBar && !reduceMotion) progressBar.style.width = (pct * 100) + "%";
      if (pct >= 1) {
        goTo(index + 1, "next");
      }
      rafId = requestAnimationFrame(tick);
    }

    function play() {
      if (reduceMotion) return;
      if (running) return;
      running = true;
      startTs = 0;
      rafId = requestAnimationFrame(tick);
    }
    function pause() {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    }

    slider.querySelector("[data-slider-prev]").addEventListener("click", function () { goTo(index - 1, "prev"); });
    slider.querySelector("[data-slider-next]").addEventListener("click", function () { goTo(index + 1, "next"); });

    slider.addEventListener("mouseenter", function () { hovered = true; pause(); });
    slider.addEventListener("mouseleave", function () { hovered = false; play(); });
    slider.addEventListener("focusin", pause);
    slider.addEventListener("focusout", function (e) {
      if (!slider.contains(e.relatedTarget)) play();
    });

    slider.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(index - 1, "prev"); }
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(index + 1, "next"); }
    });

    /* swipe */
    var startX = 0, isDown = false;
    slider.addEventListener("pointerdown", function (e) { isDown = true; startX = e.clientX; });
    slider.addEventListener("pointerup", function (e) {
      if (!isDown) return;
      isDown = false;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 50) goTo(index + (dx < 0 ? 1 : -1), dx < 0 ? "next" : "prev");
    });
    slider.addEventListener("pointercancel", function () { isDown = false; });

    render();
    resetProgress();
    if (!reduceMotion) play();

    /* pausa al salir del viewport (eficiencia) */
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { if (!hovered) play(); }
          else pause();
        });
      }, { threshold: 0.15 }).observe(slider);
    }
  }

  /* ---------- TABS ---------- */
  var tablist = document.querySelector(".tabs");
  if (tablist) {
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll("[data-tab]"));
    var panels = Array.prototype.slice.call(document.querySelectorAll("[data-panel]"));

    function activateTab(tab) {
      var name = tab.getAttribute("data-tab");
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
      });
      panels.forEach(function (p) {
        var on = p.getAttribute("data-panel") === name;
        p.classList.toggle("is-active", on);
        if (on) { p.removeAttribute("hidden"); } else { p.setAttribute("hidden", ""); }
      });
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { activateTab(tab); });
      tab.addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
        if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === "Home") next = tabs[0];
        if (e.key === "End") next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); next.focus(); activateTab(next); }
      });
    });
  }

  /* ---------- CARRUSELES EN BUCLE INFINITO (beneficios + product experience) ----------
     Problema que resuelve: el carrusel anterior scrolleaba hasta el último elemento real
     y dejaba huecos vacíos a la derecha (translateX máximo = última tarjeta, sin relleno).
     Solución: se clona el juego original al final de la pista y se recorre 0..N; al llegar
     al clon de la primera tarjeta se salta a 0 sin transición. Resultado: 1,2,3,1,2,3…
     sin cortes ni espacios vacíos, y sin scroll lateral.                            */
  function initBucleInfinito(rootSel, trackSel, prevSel, nextSel, cfg) {
    var opts = cfg || {};
    var root = document.querySelector(rootSel);
    if (!root) return null;
    var track = root.querySelector(trackSel);
    if (!track) return null;

    var originales = Array.prototype.slice.call(track.children);
    if (originales.length < 2) return null;

    var prev = root.querySelector(prevSel);
    var next = root.querySelector(nextSel);
    var total = originales.length;
    var idx = 0;
    var hover = false;
    var timer = null;
    var resizeT = null;
    var overflow = true;

    /* Clon del set original: rellena la pista para que nunca haya huecos.
       aria-hidden + inert para que los clones no se lean ni reciban el foco. */
    originales.forEach(function (card) {
      var clon = card.cloneNode(true);
      clon.setAttribute("aria-hidden", "true");
      clon.setAttribute("inert", "");
      clon.classList.add("is-clone");
      Array.prototype.forEach.call(
        clon.querySelectorAll("a, button, summary, input, select, textarea"),
        function (el) { el.setAttribute("tabindex", "-1"); }
      );
      track.appendChild(clon);
    });

    function gap() {
      return parseFloat(window.getComputedStyle(track).columnGap) || 24;
    }
    function paso() {
      var ancho = originales[0].getBoundingClientRect().width;
      return ancho > 0 ? ancho + gap() : 0;
    }
    function mide() {
      overflow = track.scrollWidth > root.clientWidth + 2;
      root.classList.toggle("is-overflowing", overflow);
      if (!overflow) {
       detener();
        idx = 0;
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        void track.offsetWidth;
        track.style.transition = "";
        if (opts.onChange) opts.onChange(0);
      }
    }
    function detener() {
      if (timer) { clearInterval(timer); timer = null; }
    }
    function saltaA(i) {
      /* Reinicio invisible del bucle: quita la transición, salta y la restituye. */
      idx = i;
      track.style.transition = "none";
      track.style.transform = "translateX(" + (-i * paso()) + "px)";
      void track.offsetWidth;
      track.style.transition = "";
    }
    function go(i, sinTransicion) {
      if (!overflow) return;
      if (sinTransicion) saltaA(i);
      else {
        idx = i;
        track.style.transform = "translateX(" + (-i * paso()) + "px)";
      }
      if (opts.onChange) opts.onChange(idx % total);
    }
    function avanza() {
      /* Avanza una tarjeta; al llegar al set clonado (idx === total) salta a 0 sin transición. */
      if (idx >= total) saltaA(0);
      else go(idx + 1);
      if (opts.onChange) opts.onChange(idx % total);
    }
    function reinicia() {
      detener();
      if (opts.autoplay === false || reduceMotion || !overflow) return;
      timer = setInterval(function () {
        if (hover || document.hidden) return;
        avanza();
      }, opts.autoplay || 4000);
    }
    function alRedimensionar() {
      if (resizeT) clearTimeout(resizeT);
      resizeT = setTimeout(function () {
        mide();
        if (overflow) saltaA(idx % total);
        reinicia();
      }, 150);
    }

    if (prev) prev.addEventListener("click", function () {
      if (idx <= 0) { saltaA(total); go(total - 1); }
      else go(idx - 1);
      reinicia();
    });
    if (next) next.addEventListener("click", function () { avanza(); reinicia(); });
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (idx <= 0) { saltaA(total); go(total - 1); }
        else go(idx - 1);
        reinicia();
      }
      if (e.key === "ArrowRight") { e.preventDefault(); avanza(); reinicia(); }
    });
    root.addEventListener("mouseenter", function () { hover = true; });
    root.addEventListener("mouseleave", function () { hover = false; });
    track.addEventListener("focusin", function () { hover = true; });
    track.addEventListener("focusout", function () { hover = false; });
    window.addEventListener("resize", alRedimensionar);

    mide();
    if (overflow) { go(0, true); reinicia(); }
    return { go: go, reinicia: reinicia, total: total };
  }

  /* Los dots se crean ANTES del carrusel: si se crearan después, contarían también
     las tarjetas clonadas y quedarían el doble de indicadores. */
  var benefitsDots = document.querySelector("[data-benefits-dots]");
  var benefitsLoop = null;
  if (benefitsDots) {
    var bTrack = document.querySelector("[data-benefits-track]");
    var bCards = bTrack ? Array.prototype.slice.call(bTrack.children) : [];
    bCards.forEach(function (card, i) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Ir al beneficio " + (i + 1) + " de " + bCards.length);
      dot.addEventListener("click", function () {
        if (benefitsLoop) { benefitsLoop.go(i); benefitsLoop.reinicia(); }
      });
      benefitsDots.appendChild(dot);
    });
    benefitsDots.children[0] && benefitsDots.children[0].classList.add("is-active");
  }

  benefitsLoop = initBucleInfinito(
    "[data-benefits]", "[data-benefits-track]",
    "[data-benefits-prev]", "[data-benefits-next]",
    {
      autoplay: 4500,
      onChange: function (i) {
        if (!benefitsDots) return;
        Array.prototype.forEach.call(benefitsDots.children, function (b, j) {
          b.classList.toggle("is-active", j === i);
        });
      }
    }
  );

  initBucleInfinito(
    "[data-showcase]", "[data-showcase-track]",
    "[data-showcase-prev]", "[data-showcase-next]",
    { autoplay: 4000 }
  );

  /* ---------- TEMA CLARO / OSCURO (P8) ----------
     El botón muestra sol/luna superpuestos y CSS decide cuál se ve según
     html[data-theme]; aquí solo se sincroniza el estado accesible. */
  var themeToggle = document.querySelector("[data-theme-toggle]");
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", t === "light" ? "Activar tema oscuro" : "Activar tema claro");
      themeToggle.setAttribute("aria-pressed", t === "light" ? "true" : "false");
    }
    try { localStorage.setItem("prisma-theme", t); } catch (e) { /* almacenamiento no disponible */ }
  }
  var savedTheme = null;
  try { savedTheme = localStorage.getItem("prisma-theme"); } catch (e) { /* ignorar */ }
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var nextTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(nextTheme);
    });
  }

  /* ---------- COUNTERS (demostrativos) ---------- */
  var analyticsPanel = document.querySelector(".analytics__panel");
  function formatNumber(n) {
    return new Intl.NumberFormat("es-CO").format(Math.round(n));
  }
  function runCounters() {
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var prefix = el.getAttribute("data-prefix") || "";
      if (reduceMotion) { el.textContent = prefix + formatNumber(target); return; }
      var start = performance.now();
      var dur = 1500;
      function step(now) {
        var p = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + formatNumber(target * eased);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  if (analyticsPanel && "IntersectionObserver" in window) {
    var counted = false;
    new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !counted) {
          counted = true;
          runCounters();
          obs.disconnect();
        }
      });
    }, { threshold: 0.05 }).observe(analyticsPanel);
  } else {
    runCounters();
  }

  /* ---------- TIMELINE PROGRESS ---------- */
  var timeline = document.querySelector("[data-timeline]");
  if (timeline) {
    var steps = Array.prototype.slice.call(timeline.querySelectorAll(".timeline__step"));
    function updateTimeline() {
      var rect = timeline.getBoundingClientRect();
      var vh = window.innerHeight;
      var total = rect.height + vh * 0.4;
      var seen = vh * 0.75 - rect.top;
      var pct = Math.max(0, Math.min(seen / total, 1));
      timeline.style.setProperty("--progress", (pct * 100) + "%");
      var litCount = Math.round(pct * steps.length);
      steps.forEach(function (s, i) { s.classList.toggle("is-lit", i < litCount); });
    }
    updateTimeline();
    window.addEventListener("scroll", updateTimeline, { passive: true });
    window.addEventListener("resize", updateTimeline);
  }

  /* ---------- DEMO FORM (SPEC 39.1 + §45: datos de contacto y validaciones) ---------- */
  var WA_NUMBER = "573183366064"; /* WhatsApp principal del negocio (código de país + número, sin "+" ni espacios) */

  function demoFieldMessage(el) {
    if (el.validity.valueMissing) return "Este campo es obligatorio.";
    if (el.type === "email" && el.validity.typeMismatch)
      return "Escribe un correo electrónico válido, por ejemplo nombre@empresa.com.";
    if (el.name === "telefono" && el.validity.patternMismatch)
      return "Escribe un teléfono válido: números y, opcionalmente, + ( ) espacios o guiones, desde 7 dígitos.";
    if (el.validity.tooShort) return "Este campo necesita más caracteres.";
    return "";
  }

  document.querySelectorAll("[data-demo-form]").forEach(function (form) {
    var submitBtn = form.querySelector("[type='submit']");
    form.querySelectorAll("[required], input, select, textarea").forEach(function (el) {
      el.addEventListener("invalid", function () {
        var msg = demoFieldMessage(el);
        if (msg) el.setCustomValidity(msg);
      });
      el.addEventListener("input", function () { el.setCustomValidity(""); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (typeof form.checkValidity !== "function" || form.checkValidity()) {
        var data = {};
        Array.prototype.forEach.call(form.elements, function (el) {
          if (el.name && !el.disabled && el.type !== "submit") data[el.name] = el.value.trim();
        });
        var lines = [
          "Hola, me interesa una demo de Prisma$.",
          "Nombre: " + (data.nombre || "-"),
          "Correo: " + (data.correo || "-"),
          "Teléfono: " + (data.telefono || "-"),
          "Negocio: " + (data.empresa || "-"),
          "Ciudad: " + (data.ciudad || "-")
        ];
        if (data.mensaje) lines.push("Necesidad: " + data.mensaje);
        var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
        var status = form.querySelector("[data-demo-status]");
        if (status) {
          status.textContent = "Abriendo WhatsApp con tu solicitud…";
          status.className = "form__status form__field--full";
        }
        if (WA_NUMBER.indexOf("REEMPLAZAR") === -1) {
          window.open(url, "_blank", "noopener");
          showToast("Solicitud lista.", "Revisa WhatsApp para enviar tu mensaje.");
          if (submitBtn) {
            submitBtn.disabled = true;
            setTimeout(function () { submitBtn.disabled = false; }, 2000);
          }
        } else if (status) {
          status.textContent = "Aún configuramos nuestro WhatsApp. Puedes volver a intentarlo en unos días o escribir por otro medio.";
        }
      } else {
        var errStatus = form.querySelector("[data-demo-status]");
        if (errStatus) {
          errStatus.textContent = "Revisa los campos marcados y vuelve a enviar.";
          errStatus.className = "form__status form__field--full form__status--error";
        }
        form.reportValidity();
      }
    });
  });

  /* ---------- FOOTER CONTACTO + WHATSAPP FAB (SPEC 39.8 / DUDE-18) ----------
     Estructura e iconos entregados hoy. Los datos reales (número, correo,
     handles) los aporta el negocio antes de publicar: MISMA política §35
     que DUDE-01. Mientras `[REEMPLAZAR]` no se sustituya, el fab contactable
     queda oculto para no mostrar una URL inventada. */
  var CONTACT = {
    wa: WA_NUMBER,
    waMessage: "Hola, quiero más información sobre Prisma$ Control de Recaudo.",
    email: "davidgrijalba8@gmail.com", /* Correo del negocio (datos de contacto.md, 2026-09-19) */
    social: [] /* TODO negocio: [{ icon:"instagram", label:"Instagram", url:"https://.../[HANDLE]" }, …] */
  };

  function contactReady() {
    return CONTACT.wa.indexOf("REEMPLAZAR") === -1;
  }
  function emailReady() {
    return CONTACT.email.indexOf("REEMPLAZAR") === -1;
  }
  function contactBlockReady() {
    return contactReady() || emailReady() || CONTACT.social.length > 0;
  }

  /* El bloque de contacto del footer solo se muestra con al menos un canal real */
  var contactBlock = document.querySelector("[data-contact-block]");
  if (contactBlock && contactBlockReady()) contactBlock.removeAttribute("hidden");

  /* WhatsApp fab y enlaces de WhatsApp del footer */
  document.querySelectorAll("[data-wa-fab]").forEach(function (el) {
    if (!contactReady()) return;
    var msg = (el.getAttribute("data-wa-message") || CONTACT.waMessage).trim();
    el.setAttribute("href", "https://wa.me/" + CONTACT.wa + "?text=" + encodeURIComponent(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
    el.removeAttribute("hidden");
  });

  /* Enlaces de WhatsApp con mensaje propio (data-wa-cta="…").
     Centraliza el número: el HTML trae un href de respaldo para sin JS y
     aquí se reconstruye con el número real, igual que el fab. */
  document.querySelectorAll("[data-wa-cta]").forEach(function (el) {
    if (!contactReady()) return;
    var msg = (el.getAttribute("data-wa-cta") || "").trim();
    if (!msg) return;
    el.setAttribute("href", "https://wa.me/" + CONTACT.wa + "?text=" + encodeURIComponent(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  /* Enlaces de correo del footer */
  document.querySelectorAll("[data-wa-email]").forEach(function (el) {
    if (emailReady()) {
      el.setAttribute("href", "mailto:" + CONTACT.email);
      el.textContent = CONTACT.email;
      el.removeAttribute("hidden");
    }
  });

  /* Redes sociales del footer (solo si el negocio entregó datos) */
  var socialWrap = document.querySelector("[data-social]");
  if (socialWrap && CONTACT.social.length) {
    socialWrap.removeAttribute("hidden");
    CONTACT.social.forEach(function (s) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.setAttribute("href", s.url);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
      a.setAttribute("aria-label", "Síguenos en " + s.label);
      a.innerHTML = iconSVG(s.icon);
      li.appendChild(a);
      socialWrap.appendChild(li);
    });
  }
/* ---------- CARD DETAIL (SPEC 39.6): aria-expanded + Escape cierra ---------- */
  document.querySelectorAll("[data-card-detail]").forEach(function (detail) {
    var summary = detail.querySelector("summary");
    if (!summary) return;
    summary.setAttribute("role", "button");
    summary.setAttribute("aria-expanded", "false");
    summary.addEventListener("click", function () {
      summary.setAttribute("aria-expanded", detail.open ? "true" : "false");
    });
    detail.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && detail.open) {
        detail.open = false;
        summary.setAttribute("aria-expanded", "false");
        summary.focus();
      }
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    document.querySelectorAll("[data-card-detail][open]").forEach(function (detail) {
      var summary = detail.querySelector("summary");
      detail.open = false;
      if (summary) summary.setAttribute("aria-expanded", "false");
    });
  });

/* ---------- TOPBAR (announcement, §40) ---------- */
  var topbarClose = document.querySelector("[data-topbar-close]");
  if (topbarClose) {
    topbarClose.addEventListener("click", function () {
      document.documentElement.classList.add("announce-closed");
      topbarClose.setAttribute("aria-hidden", "true");
    });
  }

  /* ---------- SCROLL PROGRESS (§40) ---------- */
  var scrollBar = document.querySelector("[data-scroll-bar]");
  if (scrollBar && "IntersectionObserver" in window) {
    var onScrollProgress = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? (window.scrollY || 0) / max : 0;
      scrollBar.style.setProperty("--progress", p.toFixed(4));
    };
    onScrollProgress();
    window.addEventListener("scroll", onScrollProgress, { passive: true });
    window.addEventListener("resize", onScrollProgress);
  }

  /* ---------- NAV INDICATOR (píldora activa, §40) ---------- */
  var navIndicator = document.querySelector("[data-nav-indicator]");
  var navList = document.querySelector(".navbar__list");
  function moveIndicator() {
    if (!navIndicator || !navList) return;
    var active = navList.querySelector(".navbar__link.is-active");
    if (!active) return;
    navIndicator.style.setProperty("--nav-x", active.offsetLeft + "px");
    navIndicator.style.setProperty("--nav-w", active.offsetWidth + "px");
  }
  if (navIndicator) {
    moveIndicator();
    window.addEventListener("resize", moveIndicator);
    if ("MutationObserver" in window) {
      new MutationObserver(moveIndicator).observe(navList, { attributes: true, subtree: true, attributeFilter: ["class"] });
    }
  }

  /* ---------- MAGNETIC BUTTONS (§40) ---------- */
  var finePoint = window.matchMedia("(hover: hover) and (pointer: fine)");
  if (!reduceMotion && finePoint.matches) {
    document.querySelectorAll("[data-magnetic]").forEach(function (btn) {
      btn.style.transition = "transform 0.25s var(--ease)";
      btn.addEventListener("pointermove", function (e) {
        var r = btn.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2);
        var dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = "translate(" + (dx * 0.16) + "px, " + (dy * 0.28) + "px)";
      });
      btn.addEventListener("pointerleave", function () { btn.style.transform = ""; });
    });
  }

  /* ---------- TILT 3D en showcase (§40) ---------- */
  if (!reduceMotion && finePoint.matches) {
    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      card.style.transition = "transform 0.35s var(--ease)";
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "perspective(820px) rotateX(" + (py * -5) + "deg) rotateY(" + (px * 5) + "deg) translateY(-4px)";
      });
      card.addEventListener("pointerleave", function () { card.style.transform = ""; });
    });
  }

  /* ---------- BACK TO TOP (§40) ---------- */
  var toTop = document.querySelector("[data-to-top]");
  if (toTop) {
    var onScrollBack = function () {
      toTop.classList.toggle("is-visible", (window.scrollY || 0) > 1400);
    };
    onScrollBack();
    window.addEventListener("scroll", onScrollBack, { passive: true });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- TOAST (§40) ---------- */
  var toast = document.querySelector("[data-toast]");
  var toastTimer = null;
  function showToast(title, text) {
    if (!toast) return;
    toast.innerHTML = iconSVG("check") +
      "<span><strong>" + title + "</strong> " + text + "</span>";
    toast.classList.add("is-visible");
    toast.removeAttribute("hidden");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("is-visible"); }, 6000);
  }

  /* ---------- F-04 PRELOADER DE MARCA (§41) ---------- */
  var preloader = document.querySelector("[data-preloader]");
  if (preloader) {
    if (reduceMotion) {
      preloader.remove();
    } else {
      var hidePreloader = function () {
        if (!document.body.contains(preloader)) return;
        preloader.classList.add("is-hidden");
        setTimeout(function () { if (document.body.contains(preloader)) preloader.remove(); }, 600);
      };
      if (document.readyState === "complete") { setTimeout(hidePreloader, 300); }
      else { window.addEventListener("load", function () { setTimeout(hidePreloader, 300); }, { once: true }); }
      setTimeout(hidePreloader, 1400);
    }
  }

  /* ---------- F-01 HERO SPOTLIGHT (luz que sigue el puntero) ---------- */
  var heroNode = document.querySelector(".hero[data-spotlight]");
  if (heroNode && !reduceMotion && finePoint.matches) {
    heroNode.style.setProperty("--mx", "70%");
    heroNode.style.setProperty("--my", "16%");
    heroNode.addEventListener("pointermove", function (e) {
      var r = heroNode.getBoundingClientRect();
      heroNode.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
      heroNode.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
    });
    heroNode.addEventListener("pointerleave", function () {
      heroNode.style.setProperty("--mx", "70%");
      heroNode.style.setProperty("--my", "16%");
    });
  }

  /* ---------- F-02 HERO WORD-ROTATE (§41) ---------- */
  var rotateBox = document.querySelector("[data-rotate]");
  if (rotateBox && !reduceMotion) {
    var rotatePhrases = [
      "Toma decisiones en tiempo real.",
      "Controla rutas y cuadres al día.",
      "Centraliza tu operación completa."
    ];
    var rotateIndex = 0;
    setInterval(function () {
      if (document.hidden) return;
      rotateBox.classList.add("is-swap");
      setTimeout(function () {
        rotateIndex = (rotateIndex + 1) % rotatePhrases.length;
        rotateBox.textContent = rotatePhrases[rotateIndex];
        rotateBox.classList.remove("is-swap");
      }, 380);
    }, 4200);
  }

  /* ---------- F-06 HERO DEVICE CON RESPUESTA AL SCROLL (§41) ---------- */
  var heroMedia = heroNode ? heroNode.querySelector(".hero__media") : null;
  if (heroMedia && !reduceMotion) {
    var heroFxRaf = null;
    var runHeroFx = function () {
      heroFxRaf = null;
      var top = window.scrollY || 0;
      if (top > (heroNode.offsetHeight + 200)) return;
      var p = Math.min(top / 700, 1);
      heroMedia.style.setProperty("--hero-y", "-" + (p * 26).toFixed(1) + "px");
      heroMedia.style.setProperty("--hero-s", (1 + p * 0.05).toFixed(4));
    };
    var onHeroScroll = function () {
      if (heroFxRaf) return;
      heroFxRaf = requestAnimationFrame(runHeroFx);
    };
    window.addEventListener("scroll", onHeroScroll, { passive: true });
    runHeroFx();
  }

  /* ---------- F-09 SCROLL CUE (§41) ---------- */
  var heroCue = document.querySelector("[data-hero-cue]");
  if (heroCue) {
    var onCueScroll = function () {
      var show = (window.scrollY || 0) < 140;
      heroCue.classList.toggle("is-hidden", !show);
    };
    onCueScroll();
    window.addEventListener("scroll", onCueScroll, { passive: true });
  }

  /* =========================================================
     §42 AUTONOMIC UX — movimiento vivo constante (G-02…G-10)
     Todo se apaga con reduced-motion o tab oculta.
     ========================================================= */
  if (!reduceMotion) {

    /* G-10 TOPBAR CÍCLICO */
    var tMsg = document.querySelector("[data-topbar-msg]");
    if (tMsg && !document.querySelector("[data-topbar-close]").hasAttribute("hidden")) {
      var tPhrases = [
        "Registra tus cobros y cuadra tu operación desde tu celular.",
        "Todo tu recaudo en un solo lugar, en tiempo real.",
        "Centraliza clientes, movimientos y reportes."
      ];
      var tIdx = 0;
      setInterval(function () {
        if (document.hidden) return;
        tMsg.classList.add("is-swap");
        setTimeout(function () {
          tIdx = (tIdx + 1) % tPhrases.length;
          tMsg.textContent = tPhrases[tIdx];
          tMsg.classList.remove("is-swap");
        }, 350);
      }, 4600);
    }

    /* G-02 SPARKLES (partículas ascendentes) */
    var sparkHosts = document.querySelectorAll(".hero");
    if (sparkHosts.length) {
      function spawnSpark() {
        var host = sparkHosts[Math.floor(Math.random() * sparkHosts.length)];
        if (!document.body.contains(host)) return;
        if (sparkHosts[0].classList && host.closest(".hero") && (window.scrollY || 0) > 600) return;
        var s = document.createElement("span");
        s.className = "spark" + (Math.random() > 0.75 ? " spark--gold" : "");
        s.style.left = (8 + Math.random() * 84) + "%";
        s.style.top = (92 + Math.random() * 6) + "%";
        s.style.opacity = 0;
        var dur = 3500 + Math.random() * 2500;
        var dx = (Math.random() - 0.5) * 60;
        s.addEventListener("animationend", function () { s.remove(); });
        host.appendChild(s);
        requestAnimationFrame(function () {
          s.animate(
            [
              { transform: "translate3d(0,0,0) scale(0.6)", opacity: 0 },
              { transform: "translate3d(" + dx / 2 + "px,-40%,0) scale(1)", opacity: 0.9, offset: 0.25 },
              { transform: "translate3d(" + dx + "px,-90vh,0) scale(0.4)", opacity: 0 }
            ],
            { duration: dur, easing: "linear" }
          );
        });
      }
      setInterval(function () { if (!document.hidden) spawnSpark(); }, 850);
      spawnSpark();
    }

    /* G-04 AURORA DRIFT (vaivén suave del foco del hero) */
    var heroFx = document.querySelector(".hero[data-spotlight]");
    if (heroFx) {
      (function loop(now) {
        requestAnimationFrame(loop);
        if (document.hidden) return;
        if (!heroFx._ptActive) {
          var t = now * 0.00012;
          heroFx.style.setProperty("--mx", (42 + Math.sin(t) * 26) + "%");
          heroFx.style.setProperty("--my", (14 + Math.cos(t * 1.3) * 8) + "%");
        }
      })(window.performance.now());
      heroFx.addEventListener("pointermove", function () {
        heroFx._ptActive = true;
        clearTimeout(heroFx._ptTimer);
        heroFx._ptTimer = setTimeout(function () { heroFx._ptActive = false; }, 9000);
      });
    }

    /* G-10 HERO PREVIEW CROSSFADE (screenshot real + arte SVG) */
    var heroSlides = document.querySelectorAll(".hero__slide");
    var heroImgBase = document.querySelector(".hero__img");
    if (heroSlides.length) {
      var hsItems = [heroImgBase].concat(Array.prototype.slice.call(heroSlides));
      var hsIdx = 0;
      setInterval(function () {
        if (document.hidden) return;
        hsIdx = (hsIdx + 1) % hsItems.length;
        hsItems.forEach(function (el, i) {
          if (el === heroImgBase) {
            el.style.opacity = hsIdx === 0 ? "" : "0";
          } else {
            el.classList.toggle("is-on", hsIdx === i);
          }
        });
      }, 5200);
    }

    /* H-01 FEED EN VIVO (Monitoreo): cascada de iluminación constante */
    var liveNotifs = document.querySelectorAll(".monitor__content .notif");
    if (liveNotifs.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var liveIdx = 0;
      setInterval(function () {
        if (document.hidden) return;
        liveNotifs.forEach(function (n, i) { n.classList.toggle("is-live", i === liveIdx); });
        liveIdx = (liveIdx + 1) % liveNotifs.length;
      }, 1600);
    }
  }

})();
