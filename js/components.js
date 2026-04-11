
function loadComponents() {
  
  const isInPages = window.location.pathname.includes('/pages/');
  const basePath = isInPages ? '../' : './';


  fetch(basePath + 'components/header.html')
    .then(response => response.text())
    .then(data => {
      const headerPlaceholder = document.getElementById('header-placeholder');
      if (headerPlaceholder) {
        headerPlaceholder.innerHTML = data;
        
       
        adjustHeaderLinks(isInPages);
      }
    })
    .catch(error => console.error('Erro ao carregar header:', error));


  fetch(basePath + 'components/footer.html')
    .then(response => response.text())
    .then(data => {
      const footerPlaceholder = document.getElementById('footer-placeholder');
      if (footerPlaceholder) {
        footerPlaceholder.innerHTML = data;
        
      
        adjustFooterLinks(isInPages);
      }
    })
    .catch(error => console.error('Erro ao carregar footer:', error));
}


function adjustHeaderLinks(isInPages) {
  const navLinks = document.querySelectorAll('#header-placeholder nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href === 'index.html') {
      
      link.setAttribute('href', isInPages ? '../index.html' : 'index.html');
    } else if (href.startsWith('pages/')) {
      
      if (isInPages) {
       
        link.setAttribute('href', href.replace('pages/', ''));
      }
    }
  });
}


function adjustFooterLinks(isInPages) {
  const footerLinks = document.querySelectorAll('#footer-placeholder .footer-links a');
  footerLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href === 'index.html') {
    
      link.setAttribute('href', isInPages ? '../index.html' : 'index.html');
    } else if (href.startsWith('pages/')) {
      
      if (isInPages) {
      
        link.setAttribute('href', href.replace('pages/', ''));
      }
    }
  });
}


document.addEventListener('DOMContentLoaded', loadComponents);
