// 🛡️ ULTRA SECURE MODE - BLOCK ALL DEV TOOLS
(function() {
  // Block right-click (silently do nothing)
  document.addEventListener('contextmenu', e => {
    e.preventDefault(); 
    e.stopImmediatePropagation();
    return false;
  });

  // Block ALL dev shortcuts
  document.addEventListener('keydown', e => {
    const blocked = ['F12', 'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11',
                    'KeyI', 'KeyU', 'KeyS', 'KeyC'].includes(e.code) ||
                   (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'i')) ||
                   (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J'));
    if (blocked) {
      e.preventDefault(); e.stopImmediatePropagation();
      document.title = '🚫 SECURE MODE ACTIVE';
      return false;
    }
  }, true);

  // DevTools detection loop
  setInterval(() => {
    if (window.outerHeight - window.innerHeight > 200 || 
        window.outerWidth - window.innerWidth > 200 ||
        (window.console && window.console.profiles)) {
      document.body.innerHTML = '<div style="background:#000;color:#f00;font-family:monospace;text-align:center;padding-top:30vh;font-size:3em;">🕵️ DEVELOPER TOOLS DETECTED<br>DATA TERMINATED</div>';
    }
  }, 500);

  // Disable text selection
  document.addEventListener('selectstart', e => e.preventDefault());
  document.addEventListener('dragstart', e => e.preventDefault());
})();
