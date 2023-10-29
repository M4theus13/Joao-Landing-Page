
function redirect() {
  const url = 'https://wa.me/+5512974033681?text=Ol%C3%A1%21+Vim+atrav%C3%A9s+de+seu+site+e+gostaria+de+fazer+um%C2%A0or%C3%A7amento.'
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
    title.innerHTML = 'destaca seu perfil!'
    title.style.width = '0ch'
    title.style.animation = 'frase1 5s steps(22), pisca 0.5s infinite step-end alternate'
  }, 25000); 
}

digitacao()
setInterval(digitacao, 25000)