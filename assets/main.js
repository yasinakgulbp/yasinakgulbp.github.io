(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('y').textContent = new Date().getFullYear();

  // Scroll reveal
  const rv = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    rv.forEach((el) => io.observe(el));
  } else rv.forEach((el) => el.classList.add('in'));

  // The mark: one module, four characters
  const svg = document.querySelector('.demo-svg');
  const keys = [...document.querySelectorAll('.demo-keys button')];
  const order = ['b', 'p', '9', '6'];
  let auto = null;
  const show = (k) => {
    svg.dataset.state = k;
    keys.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.k === k)));
  };
  keys.forEach((b) => b.addEventListener('click', () => { clearInterval(auto); show(b.dataset.k); }));
  if (!reduce) {
    new IntersectionObserver(([e]) => {
      clearInterval(auto);
      if (e.isIntersecting) auto = setInterval(() => show(order[(order.indexOf(svg.dataset.state) + 1) % 4]), 1900);
    }, { threshold: 0.4 }).observe(svg);
  }

  // Hover preview on the work list
  const peek = document.querySelector('.peek');
  const img = peek.querySelector('img');
  if (matchMedia('(hover: hover)').matches) {
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
    const loop = () => {
      x += (tx - x) * 0.16; y += (ty - y) * 0.16;
      peek.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(loop);
    };
    document.querySelectorAll('[data-peek]').forEach((a) => {
      a.addEventListener('mouseenter', (e) => {
        img.src = a.dataset.peek;
        tx = x = e.clientX + 24; ty = y = e.clientY - 120;
        peek.classList.add('on');
        cancelAnimationFrame(raf); loop();
      });
      a.addEventListener('mousemove', (e) => {
        tx = Math.min(e.clientX + 24, innerWidth - 330);
        ty = Math.max(12, Math.min(e.clientY - 120, innerHeight - 360));
      });
      a.addEventListener('mouseleave', () => { peek.classList.remove('on'); cancelAnimationFrame(raf); });
    });
  }
})();
