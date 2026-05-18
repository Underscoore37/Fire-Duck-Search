/*
     Fire Duck Search
     Copyright (c) 2026 pokharelbigyan.com.np
     Licensed under the GNU General Public License v3.0 (GPL-3.0)
     Anyone is free to copy, modify, and distribute this code under the terms of the GPL-3.0.
     Official rights are reserved by pokharelbigyan.com.np.
     See <https://www.gnu.org/licenses/> for full license details.
*/

document.addEventListener('DOMContentLoaded', function () {

  var BASE_URL = 'https://duckduckgo.com/?q=';
  var input = document.getElementById('query');

  /* Search logic */
  function searchDuck() {
    var q = input.value.trim();
    if (q) window.location.href = BASE_URL + encodeURIComponent(q);
  }

  /* Bang pill logic - Clears the bar and inserts the bang */
  function bangSearch(bang) {
    input.value = bang + ' ';
    input.focus();
  }

  /* Event Listeners for Search */
  document.getElementById('searchBtn').addEventListener('click', searchDuck);

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') searchDuck();
  });

  /* Card Links */
  document.getElementById('cardDuckAI').addEventListener('click', function () {
    window.location.href = 'https://duck.ai';
  });

  document.getElementById('cardDuckMail').addEventListener('click', function () {
    window.location.href = 'https://duckduckgo.com/email';
  });

  /* Hook up Popular Bang pills */
  var bangEls = document.querySelectorAll('[data-bang]');
  for (var i = 0; i < bangEls.length; i++) {
    (function (el) {
      el.addEventListener('click', function () {
        bangSearch(el.getAttribute('data-bang'));
      });
    })(bangEls[i]);
  }

  /* Ember Background Canvas Particle System */
  var canvas = document.getElementById('embers');
  var ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var P = [];
  for (var j = 0; j < 80; j++) {
    P.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2.2 + 0.8,
      s: Math.random() * 0.8 + 0.4,
      o: Math.random() * 0.5 + 0.3
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var k = 0; k < P.length; k++) {
      var p = P[k];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,' + Math.floor(60 + Math.random() * 60) + ',0,' + p.o + ')';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#ff4400';
      ctx.fill();
      
      // Move particle upwards
      p.y -= p.s;
      // Soft drift back and forth
      p.x += Math.sin(Date.now() / 800 + p.r) * 0.4;
      
      // Reset particle when it floats off screen
      if (p.y < -5) {
        p.y = canvas.height + 5;
        p.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(draw);
  }
  draw();

});