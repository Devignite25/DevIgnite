/* ============================================
   DevIgnite — Main JS
   ============================================ */

(function () {
  'use strict';

  // ---- Product Rendering ----

  function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.transitionDelay = `${index * 0.12}s`;

    const badgeHTML = product.badge
      ? `<div class="product-card__badge">${escapeHTML(product.badge)}</div>`
      : '';

    const imageContent = product.image
      ? `<img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}">`
      : `<span class="product-card__image-placeholder">${escapeHTML(product.name.charAt(0))}</span>`;

    const featuresHTML = product.features
      .map(f => `<span class="product-card__feature">${escapeHTML(f)}</span>`)
      .join('');

    const priceHTML = product.price
      ? `<span class="product-card__price">${escapeHTML(product.price)}</span>`
      : '';

    card.innerHTML = `
      ${badgeHTML}
      <div class="product-card__image">${imageContent}</div>
      <h3 class="product-card__name">${escapeHTML(product.name)}</h3>
      <div class="product-card__tagline">${escapeHTML(product.tagline)}</div>
      <p class="product-card__desc">${escapeHTML(product.description)}</p>
      <div class="product-card__features">${featuresHTML}</div>
      <div class="product-card__footer">
        ${priceHTML}
        <a href="${escapeHTML(product.gumroadUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn--gumroad">Get on Gumroad</a>
      </div>
    `;

    return card;
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function loadProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    fetch('products.json')
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to load products');
        return res.json();
      })
      .then(function (products) {
        products.forEach(function (product, i) {
          grid.appendChild(createProductCard(product, i));
        });
        observeProducts();
      })
      .catch(function (err) {
        console.error('Product load error:', err);
        grid.innerHTML = '<p style="color: var(--gray); text-align: center; grid-column: 1/-1;">Products loading... Start a local server to load products.json</p>';
      });
  }

  // ---- Scroll Reveal ----

  function observeReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  function observeProducts() {
    var cards = document.querySelectorAll('.product-card');
    if (!cards.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('product-card--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    cards.forEach(function (card) {
      observer.observe(card);
    });
  }

  // ---- Navigation ----

  function initNav() {
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');

    // Scroll effect
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    });

    // Mobile toggle
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        toggle.classList.toggle('nav__toggle--open');
        links.classList.toggle('nav__links--open');
      });

      // Close on link click
      links.querySelectorAll('.nav__link').forEach(function (link) {
        link.addEventListener('click', function () {
          toggle.classList.remove('nav__toggle--open');
          links.classList.remove('nav__links--open');
        });
      });
    }
  }

  // ---- Smooth Scroll ----

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ---- Contact Form ----

  function initContactForm() {
    var form = document.getElementById('contactForm');
    var status = document.getElementById('contactStatus');
    var submit = document.getElementById('contactSubmit');
    if (!form || !status || !submit) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var originalText = submit.textContent;
      submit.disabled = true;
      submit.textContent = 'Sending...';
      status.className = 'contact__status';
      status.textContent = '';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error('Contact form submission failed');
          }

          form.reset();
          status.classList.add('contact__status--success');
          status.textContent = 'Message sent. We will get back to you as soon as possible.';
        })
        .catch(function () {
          status.classList.add('contact__status--error');
          status.textContent = 'Could not send the message. Email us directly at devignite25@gmail.com.';
        })
        .finally(function () {
          submit.disabled = false;
          submit.textContent = originalText;
        });
    });
  }

  // ---- Init ----

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initSmoothScroll();
    initContactForm();
    observeReveal();
    loadProducts();
  });
})();
