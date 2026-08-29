// Copy-to-clipboard is a small optional enhancement only — every tab,
  // the mobile menu, and the whole accordion above work without this script at all.
  function copyText(text, btn){
    var done = function(){
      var original = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(function(){ btn.textContent = original; }, 1500);
    };
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(done).catch(function(){
        fallbackCopy(text); done();
      });
    } else {
      fallbackCopy(text); done();
    }
  }
  function fallbackCopy(text){
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try{ document.execCommand('copy'); }catch(e){}
    document.body.removeChild(ta);
  }
