// AOS.init();
const form = document.querySelector('.card__form');
const card = document.querySelector('.container')
const message = document.querySelector('.message-card')
const messageText = document.querySelector('.message__rating')
const ratings = document.querySelectorAll('.card__rating')
const ratingsArray = [...ratings]

ratings.forEach(rating => {
  rating.addEventListener('click', () => {
    messageText.textContent = `You selected ${rating.value} of 5`
  })
})


form.addEventListener('submit', (e) => {
  e.preventDefault()
  card.style.display = 'none'
  AOS.init();
})