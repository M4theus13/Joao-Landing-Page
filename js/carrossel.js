const galleryContainer = document.querySelector('.box-carrossel')
const galleryControlsContainer = document.querySelector('.carrossel-controls')
const galleryControl = ['previous', 'next']
const galleryItems = document.querySelectorAll('.bloco')

class Carrossel {
    constructor(container, items, controls) {
        this.carrouselContainer = container
        this.carouselControls = controls
        this.carouselArray = [...items]
    }

    updateCarrossel() {
        this.carouselArray.forEach(el => {
            el.classList.remove('carrossel-1')
            el.classList.remove('carrossel-2')
            el.classList.remove('carrossel-3')
            el.classList.remove('carrossel-4')
        })
        
        this.carouselArray.slice(0, 4).forEach((el, i) => {
            el.classList.add(`carrossel-${i+1}`)
        })
    }

    setCurrentState(direction) {
        if (direction.className == `carrossel-previous`) {
            this.carouselArray.unshift(this.carouselArray.pop())
        } else {
            this.carouselArray.push(this.carouselArray.shift())
        }
        this.updateCarrossel()
    }

    setControls() {
        this.carouselControls.forEach(control => {
            document.querySelector(`.carrossel-${control}`).innerHTML = control
        })
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes]
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault()
                this.setCurrentState(control)
            })
        })
    }
}

const carrosel = new Carrossel(galleryContainer, galleryItems, galleryControlsContainer)
carrosel.useControls()