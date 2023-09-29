const year = new Date().getFullYear()

const footerText = document.querySelector('.year')

footerText.innerHTML = year

function redirect() {
  const url = 'https://wa.me/+5512974033681?text=Ol%C3%A1%21+Vim+atrav%C3%A9s+de+seu+site+e+gostaria+de+fazer+um%C2%A0or%C3%A7amento.'
  window.open(url, "_blank")
}

