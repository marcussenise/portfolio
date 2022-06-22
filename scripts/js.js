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

// Event Listeners
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab.dataset.tab)
    })
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: 'coverflow',
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });