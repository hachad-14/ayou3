document.querySelectorAll('img').forEach(el=> {
    el.addEventListener('touchforcechange', e => {
        if (e.changedTouches[0].force < force) {
            e.preventDefault();
            return false;
        }
    });
  });