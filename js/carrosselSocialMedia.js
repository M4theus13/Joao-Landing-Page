const socialMediaContainer = document.querySelector('.box-carrossel-social-media')
const socialMediaControlsContainer = document.querySelector('.carrosel-controls-social-media')
const socialMediaControl = ['previous', 'next']
const socialMediaItems = document.querySelectorAll('.img-carrossel-social-media')

class CarrosselSocialMedia {
    constructor(container, items, controls) {
        this.carrouselContainer = container
        this.carouselControls = controls
        this.carouselArray = [...items]
    }

    atualizaSocialMedia() {
        this.carouselArray.forEach(el => {
            el.classList.remove('social-media-item-1')
            el.classList.remove('social-media-item-2')
            el.classList.remove('social-media-item-3')
        })
        
        this.carouselArray.slice(0, 3).forEach((el, i) => {
            el.classList.add(`social-media-item-${i+1}`)
        })
    }

    setDirecaoSocialMedia(direction) {
        if (direction.className == `social-media-previous`) {
            this.carouselArray.unshift(this.carouselArray.pop())
        } else {
            this.carouselArray.push(this.carouselArray.shift())
        }
        this.atualizaSocialMedia()
    }

    setControlesSocialMedia() {
        this.carouselControls.forEach(control => {
            document.querySelector(`.social-media-${control}`).innerHTML = control
        })
    }

    userControlesSocialMedia() {
        const triggers = [...socialMediaControlsContainer.childNodes]
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault()
                this.setDirecaoSocialMedia(control)
            })
        })
    }
}

const socialMedia = new CarrosselSocialMedia(socialMediaContainer, socialMediaItems, socialMediaControlsContainer)
socialMedia.userControlesSocialMedia()
