// Active link highlighting + tiny “terminal tick” vibe

(function(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a, .footer-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    if (href === path) a.classList.add('active');
  });

  // Optional: add a subtle title pulse on load
  const title = document.querySelector('.brand .title strong');
  if (title){
    title.animate(
      [{ filter: 'drop-shadow(0 0 0 rgba(122,215,255,0))' },
       { filter: 'drop-shadow(0 0 14px rgba(122,215,255,.25))' },
       { filter: 'drop-shadow(0 0 0 rgba(122,215,255,0))' }],
      { duration: 900, easing: 'ease-in-out' }
    );
  }
})();
