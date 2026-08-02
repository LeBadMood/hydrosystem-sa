// Hydrosystem SA — interactions front-end légères
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open');
    });
  }

  // Accordion behaviour for dropdown items on mobile (tap to expand)
  document.querySelectorAll('.nav > li').forEach(function (item) {
    var link = item.querySelector('a');
    var dropdown = item.querySelector('.dropdown');
    if (!dropdown) return;

    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 760) {
        e.preventDefault();
        item.classList.toggle('is-open');
      }
    });
  });

  // Simple demo contact form handler (no backend wired up)
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var feedback = form.querySelector('.form-feedback');
      if (feedback) {
        feedback.textContent = 'Merci, votre message a bien été pris en compte. Notre équipe vous répondra rapidement.';
        feedback.style.display = 'block';
      }
      form.reset();
    });
  }

  // Set active nav item based on current page
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[href]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) {
      var parentLi = a.closest('li');
      if (parentLi) parentLi.classList.add('is-active');
    }
  });
});
