

const ediVideoCarrossel = document.querySelector('.carrossel-1')
const socialMediaCarrossel = document.querySelector('.carrossel-2')
const landingPageCarrossel = document.querySelector('.carrossel-3')
const indVisualCarrossel = document.querySelector('.carrossel-4')

const boxButton = document.getElementById('box-button-carrossel')
const buttonAnterior = document.getElementById('button-carrossel-previous')
const buttonNext = document.getElementById('button-carrossel-next')

ediVideoChecked()

 function ediVideoChecked() {
    ediVideoCarrossel.style.left = '50%'
    ediVideoCarrossel.style.opacity = '1'

    socialMediaCarrossel.style.left = '200%'
    socialMediaCarrossel.style.opacity = '0'

    landingPageCarrossel.style.left = '200%'
    landingPageCarrossel.style.opacity = '0'

    indVisualCarrossel.style.left = '200%'
    indVisualCarrossel.style.opacity = '0'

    boxButton.removeAttribute('class')
    buttonAnterior.removeAttribute('class')
    buttonNext.removeAttribute('class')

    boxButton.setAttribute('class','carrosel-controls-ediVideo')
    buttonAnterior.setAttribute('class','edi-video-previous')
    buttonNext.setAttribute('class','edi-video-next')
    
}

function socialMediaChecked() {
    ediVideoCarrossel.style.left = '-100%'
    ediVideoCarrossel.style.opacity = '0'

    socialMediaCarrossel.style.left = '50%'
    socialMediaCarrossel.style.opacity = '1'

    landingPageCarrossel.style.left = '200%'
    landingPageCarrossel.style.opacity = '0'

    indVisualCarrossel.style.left = '200%'
    indVisualCarrossel.style.opacity = '0'

    boxButton.removeAttribute('class')
    buttonAnterior.removeAttribute('class')
    buttonNext.removeAttribute('class')

    boxButton.setAttribute('class','carrosel-controls-social-media')
    buttonAnterior.setAttribute('class','social-media-previous')
    buttonNext.setAttribute('class','social-media-next')
}

function landingPageChecked() {
    ediVideoCarrossel.style.left = '-100%'
    ediVideoCarrossel.style.opacity = '0'
    
    socialMediaCarrossel.style.left = '-100%'
    socialMediaCarrossel.style.opacity = '0'
    
    landingPageCarrossel.style.left = '50%'
    landingPageCarrossel.style.opacity = '1'

    indVisualCarrossel.style.left = '200%'
    indVisualCarrossel.style.opacity = '0'

    boxButton.removeAttribute('class')
    buttonAnterior.removeAttribute('class')
    buttonNext.removeAttribute('class')

    boxButton.classList.add('carrosel-controls-pages')
    buttonAnterior.classList.add('pages-previous')
    buttonNext.classList.add('pages-next')
}

function indVisualChecked() {
    ediVideoCarrossel.style.left = '-100%'
    ediVideoCarrossel.style.opacity = '0'

    socialMediaCarrossel.style.left = '-100%'
    socialMediaCarrossel.style.opacity = '0'

    landingPageCarrossel.style.left = '-100%'
    landingPageCarrossel.style.opacity = '0'

    indVisualCarrossel.style.left = '50%'
    indVisualCarrossel.style.opacity = '1'

    boxButton.removeAttribute('class')
    buttonAnterior.removeAttribute('class')
    buttonNext.removeAttribute('class')

    boxButton.classList.add('carrosel-controls-identidade-visual')
    buttonAnterior.classList.add('indVisual-previous')
    buttonNext.classList.add('indVisual-next')
}

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                btn.classList.remove('button-active');
            });

            button.classList.add('button-active');
        });
    });
});