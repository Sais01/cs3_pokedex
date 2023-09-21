const searchInput = document.querySelector('#search-input')
const form = document.querySelector('form')
const cards = document.querySelectorAll("#card-index")
const sections = document.querySelectorAll('.section')
const INITIAL_CARDS_TO_SHOW = 4


renderInitialCards()
animatedScroll(sections,'active')

function renderInitialCards() {
    if(cards.length) {
        cards.forEach((e,i) => {
            if(i < INITIAL_CARDS_TO_SHOW) {
                e.classList.add('active')
            }
        })
    }
}
function animatedScroll(element,classe) {

  element[0].classList.add(classe)
  const alturaTela = +window.innerHeight * 0.7

  window.addEventListener('scroll',showItem)

  function showItem() {

    element.forEach((item)=> {
      
      alturaElement = item.getBoundingClientRect().top
      let visible = alturaElement <= alturaTela 

      if(visible && !item.classList.contains("active")) {
        item.classList.add(classe)
      }
    })
  }
}

$("#search-input").on('keyup', function () {
    let filter = $(this).val().toLowerCase()
    $('.col').each(function () {
        let pokemonName = $(this).find('.card-title').text().toLowerCase()
        if (pokemonName.includes(filter)) {
            $(this).removeClass('hidden-card')
        } else {
            $(this).addClass('hidden-card')
        }
    })
})
