function closeMenuAndGoTo(query) {
  document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')
  setTimeout(() => {
    const element = document.querySelector(query)
    window.scrollTo({
      top: element.getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }, 250);
}

document.querySelector('#hero-menu').
  querySelectorAll('[href]').
  forEach(function (link) {
    link.onclick = function (event) {
      event.preventDefault()
      closeMenuAndGoTo(link.getAttribute('href'))
    }
  })


  $('.owl-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		pagination: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	})


  // (function(){

  //   // Preloader
  //   window.onload = function () {
  //       window.setTimeout(fadeout, 500);
  //   }

  //   function fadeout() {
  //       document.querySelector('.preloader').style.opacity = '0';
  //       document.querySelector('.preloader').style.display = 'none';
  //   }
  // })()