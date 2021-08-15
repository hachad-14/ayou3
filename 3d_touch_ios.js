document.querySelectorAll('img').forEach(el=> {

    // customize your pressure force
    const force = 0.2; 
  
    // iOS
    el.addEventListener('touchforcechange', e => {
        if (e.changedTouches[0].force < force) {
            e.preventDefault();
            return false;
        }
    });
  
  });