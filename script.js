const cookieScreen = document.querySelector('.discover')
const openedCookieScreen = document.querySelector('.lucky-message')

const cookie = document.querySelector('.cookie')
const btnOpenAnotherCookie = document.querySelector('#btn-open-another-cookie')

cookie.addEventListener('click', toggleScreen)

btnOpenAnotherCookie.addEventListener('click', toggleScreen)

function toggleScreen() {
  cookieScreen.classList.toggle('hide')
  openedCookieScreen.classList.toggle('hide')
}