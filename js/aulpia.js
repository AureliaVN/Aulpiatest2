(function () {
  // Aperçu hors ligne (fichier local, prévisualisation) : les liens « /page/ » sont réécrits en chemins relatifs.
  // En ligne sur aulpia.fr ou GitHub Pages, rien ne change.
  var host = location.hostname;
  var online = /(^|\.)aulpia\.fr$/.test(host) || /github\.io$/.test(host);
  if (!online) {
    var root = document.body.getAttribute('data-root') || '';
    document.querySelectorAll('a[href^="/"]').forEach(function (a) {
      var parts = a.getAttribute('href').split('#');
      var path = parts[0].replace(/^\//, '');
      a.setAttribute('href', root + path + 'index.html' + (parts[1] ? '#' + parts[1] : ''));
    });
  }

  // Menu mobile
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Fermer' : 'Menu';
    });
  }

  // Parallaxe du hero : l'image descend plus lentement que la page
  var par = document.querySelector('[data-parallax]');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (par && !reduce) {
    var ticking = false;
    var apply = function () {
      ticking = false;
      var y = window.pageYOffset || 0;
      var box = par.parentElement;
      var top = box.getBoundingClientRect().top + y;
      if (y > top + box.offsetHeight) return;
      var shift = Math.max(0, y - top) * 0.4;
      par.style.transform = 'translate3d(0,' + shift.toFixed(1) + 'px,0)';
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(apply); }
    }, { passive: true });
    apply();
  }

  // Calculateur de dose (page La gourde) — repris du mode d'emploi
  document.querySelectorAll('[data-dose-calc]').forEach(function (box) {
    var WHEN = {
      canicross: "Moitié 30 min avant le départ, l'autre moitié à la fin.",
      randonnee: "À partir de 1h30 d'effort, pour une pause bien méritée, ou à la fin de la balade.",
      explosif: 'Entre les passages, ou en récupération après la session.',
      senior: "Au-delà d'1h d'effort, ou en récupération.",
      balade: "Après l'effort, en récompense."
    };
    var QUOTE = {
      canicross: "Avant une course, ton chien trépigne : il a tellement envie de partir que cette excitation puise déjà dans ses glucides, sans compter le sprint du départ. La seconde moitié se donne à l'arrivée, dans les 30 minutes qui suivent l'effort : c'est la fenêtre où son organisme reconstitue le plus vite ses réserves.",
      randonnee: "La randonnée repose surtout sur l'endurance, mais ton chien renifle, accélère, fait des allers-retours : autant de petits efforts qui puisent dans ses glucides. Et une pause, c'est aussi un moment partagé avec lui.",
      explosif: "Dog dancing, ring, frisbee, wall climbing… Ces disciplines enchaînent des efforts courts et intenses. Un petit apport de glucides entre chaque passage aide ton chien à garder des réserves jusqu'à la fin de la session.",
      senior: "Un chien senior peut rester actif, à son rythme et selon sa santé. Ses réserves étant plus petites, je conseille un ravitaillement dès 1h d'effort, avec ou sans dénivelé.",
      balade: "Pas besoin d'une course officielle pour puiser dans ses glucides : une longue balade, une journée de chaleur ou un cours d'éducation suffisent. La gourde, c'est aussi une pause bien méritée, à partager."
    };
    var input = box.querySelector('input[name="poids"]');
    var empty = box.querySelector('.dose-calc__empty');
    var answer = box.querySelector('.dose-calc__answer');
    var update = function () {
      var kg = parseFloat(String(input.value).replace(',', '.'));
      var sport = (box.querySelector('input[name="sport"]:checked') || {}).value;
      if (!kg || kg <= 0) { empty.hidden = false; answer.hidden = true; return; }
      var qty, note;
      if (kg < 10) { qty = '½ gourde'; note = 'Chien de moins de 10 kg.'; }
      else if (kg <= 25) { qty = '1 gourde'; note = 'Chien de 10 à 25 kg.'; }
      else { qty = '2 gourdes'; note = "Chien de plus de 25 kg. Les 2 gourdes peuvent être réparties sur la durée de l'effort."; }
      box.querySelector('.dose-calc__qty').textContent = qty;
      box.querySelector('.dose-calc__qty-note').textContent = note;
      box.querySelector('.dose-calc__when').textContent = WHEN[sport] || '';
      box.querySelector('.dose-calc__quote p').textContent = QUOTE[sport] || '';
      empty.hidden = true; answer.hidden = false;
    };
    box.addEventListener('input', update);
    box.addEventListener('change', update);
  });

  // Newsletter Brevo : envoi en arrière-plan, message de confirmation sur place
  document.querySelectorAll('form[data-brevo]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      if (!window.fetch || !window.FormData) return; // envoi classique (nouvel onglet Brevo)
      ev.preventDefault();
      if (!form.reportValidity()) return;
      var btn = form.querySelector('button');
      btn.disabled = true;
      fetch(form.action, { method: 'POST', mode: 'no-cors', body: new FormData(form) })
        .then(function () {
          var p = document.createElement('p');
          p.className = form.getAttribute('data-thanks-class') || 'site-footer__thanks';
          p.setAttribute('role', 'status');
          p.textContent = form.getAttribute('data-thanks') || 'Merci ! Ton inscription est bien enregistrée.';
          form.replaceWith(p);
        })
        .catch(function () { btn.disabled = false; form.submit(); });
    });
  });

  // Apparition douce au défilement
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { obs.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Formulaires : en attendant un service d'envoi, ouverture d'un e-mail pré-rempli vers hello@aulpia.fr
  document.querySelectorAll('form[data-mailto]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      var lines = [];
      form.querySelectorAll('input, select, textarea').forEach(function (f) {
        if (!f.name || !f.value) return;
        var label = f.getAttribute('data-label') || f.name;
        var val = f.tagName === 'SELECT' ? f.options[f.selectedIndex].text : f.value;
        lines.push(label + ' : ' + val);
      });
      var href = 'mailto:hello@aulpia.fr?subject=' + encodeURIComponent(form.getAttribute('data-mailto')) +
        '&body=' + encodeURIComponent(lines.join('\n'));
      window.location.href = href;
      var thanks = form.getAttribute('data-thanks');
      if (thanks) {
        var p = document.createElement('p');
        p.className = form.getAttribute('data-thanks-class') || 'form__thanks';
        p.textContent = thanks;
        form.replaceWith(p);
      }
    });
  });
})();
