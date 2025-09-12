document.getElementById('year').textContent = new Date().getFullYear();
const links = document.querySelectorAll('header nav a');
links.forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
      history.pushState(null, '', href);
    }
  });
});
