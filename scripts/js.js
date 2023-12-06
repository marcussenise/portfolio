// DOM Elements
const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tabcontent')
  
// Functions
const activateTab = tabnum => {
  
  tabs.forEach( tab => {
      tab.classList.remove('active')
    })
    
    tabContents.forEach( tabContent => {
      tabContent.classList.remove('active')
    })
    
    document.querySelector('#tab' + tabnum).classList.add('active')
    document.querySelector('#tabcontent' + tabnum).classList.add('active')
    localStorage.setItem('jstabs-opentab', JSON.stringify(tabnum))
    
  }

  if(tabContents.length != 0){
    activateTab('1');
  }

// Event Listeners
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab.dataset.tab)
    })
})

const classSwiper = document.querySelector('.mySwiper');


  var swiper = new Swiper('.mySwiper', {
      // effect: 'coverflow',
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      },
    });



  //Botão atualizar
  const botaoAtualizar = document.querySelector('.botaoAtualizar');
  botaoAtualizar.addEventListener('click', function(){
    location.reload()
  })