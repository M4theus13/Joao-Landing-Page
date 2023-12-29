const year = new Date().getFullYear()

const footerText = document.querySelector('.year')

footerText.innerHTML = year

function redirect() {
  const url = 'https://wa.me/+5512996760918'
  window.open(url, "_blank")
}



const title = document.getElementById('title-two')

function digitacao() {
  setTimeout(() => {
    title.innerHTML = 'realça o seu potencial!'
    title.style.width = '0ch'
    title.style.animation = 'frase2 5s steps(23), pisca 0.5s infinite step-end alternate'
  }, 6000);
    
  setTimeout(() => {
    title.innerHTML = 'eleva seu profissionalismo!'
    title.style.width = '0ch'
    title.style.animation = 'frase3 6s steps(27), pisca 0.5s infinite step-end alternate'
  }, 12000);
  
  setTimeout(() => {
    title.innerHTML = 'te valoriza!'
    title.style.width = '0ch'
    title.style.animation = 'frase4 4s steps(12), pisca 0.5s infinite step-end alternate'
  }, 19000);

  setInterval(() => {
    title.innerHTML = 'destaca seu negócio!'
    title.style.width = '0ch'
    title.style.animation = 'frase1 5s steps(23), pisca 0.5s infinite step-end alternate'
  }, 25000); 
}

digitacao()
setInterval(digitacao, 25000)