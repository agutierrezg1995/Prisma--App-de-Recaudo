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
    check: '<path d="M20 6 9 17l-5-5"/>',
    "arrow-up-right": '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
    "arrow-down": '<path d="M12 5v14"/><path d="m6 13 6 6 6-6"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/>',
    smartphone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
    shield: '<path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>'
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

  /* ---------- PRODUCT SHOWCASE (carousel) ---------- */
  var showcase = document.querySelector("[data-showcase]");
  if (showcase) {
    var sTrack = showcase.querySelector("[data-showcase-track]");
    var sPrev = showcase.querySelector("[data-showcase-prev]");
    var sNext = showcase.querySelector("[data-showcase-next]");
    var sRaf = null;

    function sCardWidth() {
      var card = sTrack.querySelector(".showcase__card");
      if (!card) return 320;
      var gap = parseFloat(window.getComputedStyle(sTrack).columnGap) || 24;
      return card.getBoundingClientRect().width + gap;
    }
    function sStep(dir) {
      if (!sTrack) return;
      var max = sTrack.scrollWidth - sTrack.clientWidth;
      if ((dir < 0 && sTrack.scrollLeft <= 1) || (dir > 0 && sTrack.scrollLeft >= max - 1)) return;
      sTrack.scrollBy({ left: dir * sCardWidth(), behavior: reduceMotion ? "auto" : "smooth" });
    }
    function sUpdate() {
      if (!sTrack) return;
      var max = sTrack.scrollWidth - sTrack.clientWidth;
      if (sPrev) sPrev.setAttribute("aria-disabled", sTrack.scrollLeft <= 1 ? "true" : "false");
      if (sNext) sNext.setAttribute("aria-disabled", sTrack.scrollLeft >= max - 1 ? "true" : "false");
    }
    function sSchedule() {
      if (sRaf) return;
      sRaf = requestAnimationFrame(function () { sUpdate(); sRaf = null; });
    }
    if (sPrev) sPrev.addEventListener("click", function () { sStep(-1); });
    if (sNext) sNext.addEventListener("click", function () { sStep(1); });
    if (sTrack) {
      sTrack.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { e.preventDefault(); sStep(-1); }
        if (e.key === "ArrowRight") { e.preventDefault(); sStep(1); }
      });
      sTrack.addEventListener("scroll", sSchedule, { passive: true });
      window.addEventListener("resize", sSchedule);
    }
    sUpdate();
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

  /* ---------- DEMO FORM (SPEC 39.1: compone mensaje de WhatsApp) ---------- */
  var WA_NUMBER = "[REEMPLAZAR]"; /* TODO negocio: número del titular con código de país y sin "+" ni espacios (ej. 573001234567) */

  document.querySelectorAll("[data-demo-form]").forEach(function (form) {
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
          "Negocio: " + (data.empresa || "-"),
          "Tipo de operación: " + (data.sector || "-")
        ];
        if (data.mensaje) lines.push("Necesidad: " + data.mensaje);
        var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
        var status = form.querySelector("[data-demo-status]");
        if (status) status.textContent = "Abriendo WhatsApp con tu solicitud…";
        if (WA_NUMBER.indexOf("REEMPLAZAR") === -1) {
          window.open(url, "_blank", "noopener");
        } else if (status) {
          status.textContent = "Aún configuramos nuestro WhatsApp. Puedes volver a intentarlo en unos días o escribir por otro medio.";
        }
      } else {
        form.reportValidity();
      }
    });
  });
})();
