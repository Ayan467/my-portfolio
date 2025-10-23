// script.js - small interactions: set year, smooth scroll, form handling
document.addEventListener('DOMContentLoaded', function(){
  const y = new Date().getFullYear();
  document.getElementById('year') && (document.getElementById('year').textContent = y);
  document.getElementById('year2') && (document.getElementById('year2').textContent = y);
  document.getElementById('year3') && (document.getElementById('year3').textContent = y);

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href').startsWith('#')){
      a.addEventListener('click', e=>{
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
      });
    }
  });

  // Contact form: no backend -> open mailto as fallback
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const formMsg = document.getElementById('formMsg');
      if(!name || !email || !message){
        formMsg.textContent = 'Please complete all fields.';
        return;
      }
      // Create mailto
      const subject = encodeURIComponent('Portfolio message from ' + name);
      const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
      window.location.href = 'mailto:samantaayan1158@gmail.com?subject=' + subject + '&body=' + body;
      formMsg.textContent = 'Opening your email client...';
    });
  }
});
