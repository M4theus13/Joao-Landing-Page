const galleryContainer = document.querySelector('.box-carrossel')
const galleryControlsContainer = document.querySelector('.carrosel-controls')
const galleryControl = ['previous', 'next']
const galleryItems = document.querySelectorAll('.img-carrossel')

class Carrossel {
    constructor(container, items, controls) {
        this.carrouselContainer = container
        this.carouselControls = controls
        this.carouselArray = [...items]
    }

    updateCarrossel() {
        this.carouselArray.forEach(el => {
            el.classList.remove('item-1')
            el.classList.remove('item-2')
            el.classList.remove('item-3')
        })
        
        this.carouselArray.slice(0, 3).forEach((el, i) => {
            el.classList.add(`item-${i+1}`)
        })
    }

    setCurrentState(direction) {
        if (direction.className == `previous`) {
            this.carouselArray.unshift(this.carouselArray.pop())
        } else {
            this.carouselArray.push(this.carouselArray.shift())
        }
        this.updateCarrossel()
    }

    setControls() {
        this.carouselControls.forEach(control => {
            document.querySelector(`.${control}`).innerHTML = control
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

const testeCarr = new Carrossel(galleryContainer, galleryItems, galleryControlsContainer)
testeCarr.galleryControlrgalleryItems
testeCarr.useControls()
