
//paralx
function parallaxIt() {

    // create variables
    var $fwindow = $(window);
    var scrollTop = document.documentElement.scrollTop;
  
    // on window scroll event
    $fwindow.on('scroll resize', function() {
      scrollTop = document.documentElement.scrollTop;
    }); 
  
    // for each of content parallax element
    $('[data-type="content"]').each(function (index, e) {
      var $contentObj = $(this);
      var fgOffset = parseInt($contentObj.offset().top);
      var yPos;
      var speed = ($contentObj.data('speed') || 1 );
  
      $fwindow.on('scroll resize', function (){
        yPos = fgOffset - scrollTop / speed; 
  
        $contentObj.css('top', yPos);
      });
    });
  
    // for each of background parallax element
    $('[data-type="background"]').each(function(){
      var $backgroundObj = $(this);
      var bgOffset = parseInt($backgroundObj.offset().top);
      var yPos;
      var coords;
      var speed = ($backgroundObj.data('speed') || 0 );
  
      $fwindow.on('scroll resize', function() {
        yPos = - ((scrollTop - bgOffset) / speed); 
        coords = '50% '+ yPos + 'px';
  
        $backgroundObj.css({ backgroundPosition: coords });
      }); 
    }); 
  
    // triggers winodw scroll for refresh
    $fwindow.trigger('scroll');
  };
  
  parallaxIt();

//testimonial 
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Pablo Hernández',
        position: 'Central Cargo',
        photo:
            'assets/images/cc.jpg',
        text:
            "Controles globales de nuestros procesos, en todas las áreas de nuestra corporación, con personal capacitado para brindarte el soporte necesario.",
    },
    {
        name: 'Andrés Fernández',
        position: 'Valitn Corp & Logistic',
        photo: 'assets/images/valiton.jpg',
        text:
            '“Contento con la decisión de incorporar EasyLoad a nuestra compañía, es un sistema muy amigable diseñado para llevar las distintas operaciones de un Freight forward, adaptado a las necesidades de tu empresa y un excelente servicio de seguimiento a aclaraciones/tickets”',
    },
]

let idx = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    if (idx >= testimonials.length - 1) {
        idx = 0
    } else {
        idx++
    }
}

setInterval(updateTestimonial, 10000)
//

//aceleracion

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  const offset = 60; // Ajusta aquí el desplazamiento personalizado (en píxeles)

  if (section) {
    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: 'smooth' // Opcional: desplazamiento suave
    });
  }
}

//fq

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});





