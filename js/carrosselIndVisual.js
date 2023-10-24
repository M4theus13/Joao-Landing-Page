const indVisualContainer = document.querySelector('.box-carrossel-identidade-visual')
const indVisualControlsContainer = document.querySelector('.carrosel-controls-identidade-visual')
const indVisualControls = ['previous', 'next']
const indVisualItems = document.querySelectorAll('.img-carrossel')

class CarrosselIndVisual {
    constructor(container, items, controls) {
        this.carrouselContainer = container
        this.carouselControls = controls
        this.carouselArray = [...items]
    }

    attIndVisual() {
        this.carouselArray.forEach(el => {
            el.classList.remove('item-1')
            el.classList.remove('item-2')
            el.classList.remove('item-3')
        })
        
        this.carouselArray.slice(0, 3).forEach((el, i) => {
            el.classList.add(`item-${i+1}`)
        })
    }

    setDirecaoIndVisual(direction) {
        if (direction.className == `indVisual-previous`) {
            this.carouselArray.unshift(this.carouselArray.pop())
        } else {
            this.carouselArray.push(this.carouselArray.shift())
        }
        this.attIndVisual()
    }

    setControlsIndVisual() {
        this.carouselControls.forEach(control => {
            document.querySelector(`.indVisual-${control}`).innerHTML = control
        })
    }

    useControlsIndVisual() {
        const triggers = [...indVisualControlsContainer.childNodes]
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault()
                this.setDirecaoIndVisual(control)
            })
        })
    }
}

const indVisual = new CarrosselIndVisual(indVisualContainer, indVisualItems, indVisualControlsContainer)
indVisual.useControlsIndVisual()
