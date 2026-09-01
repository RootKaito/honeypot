document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('[data-sidebar-toggle]');
  var sidebar = document.querySelector('.sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (window.innerWidth > 900) return;
      if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }

  document.querySelectorAll('.term').forEach(function (term) {
    var codeEl = term.querySelector('code');
    if (!codeEl) return;
    var btn = document.createElement('button');
    btn.textContent = 'copiar';
    btn.setAttribute('aria-label', 'Copiar comando');
    btn.style.cssText = 'position:absolute;top:0.4rem;right:0.6rem;background:transparent;border:1px solid var(--border);color:var(--text-faint);font-family:var(--font-mono);font-size:0.68rem;padding:0.2rem 0.55rem;border-radius:4px;cursor:pointer;';
    term.style.position = 'relative';
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(codeEl.innerText).then(function () {
        btn.textContent = 'copiado';
        setTimeout(function () { btn.textContent = 'copiar'; }, 1500);
      });
    });
    term.appendChild(btn);
  });
});
