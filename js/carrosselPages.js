const pagesContainer = document.querySelector('.box-carrossel-pages')
const pagesControlContainer = document.querySelector('.carrosel-controls-pages')
const pagesControl = ['previous', 'next']
const pagesItems = document.querySelectorAll('.img-carrossel-pages')

class CarrosselPages {
    constructor(container, items, controls) {
        this.carrouselContainer = container
        this.carouselControls = controls
        this.carouselArray = [...items]
    }

    atualizaPages() {
        this.carouselArray.forEach(el => {
            el.classList.remove('pages-item-1')
            el.classList.remove('pages-item-2')
        })
        
        this.carouselArray.slice(0, 2).forEach((el, i) => {
            el.classList.add(`pages-item-${i+1}`)
        })
    }

    setDirecaoPages(direction) {
        if (direction.className == `pages-previous`) {
            this.carouselArray.unshift(this.carouselArray.pop())
        } else {
            this.carouselArray.push(this.carouselArray.shift())
        }
        this.atualizaPages()
    }

    setControlesPages() {
        this.carouselControls.forEach(control => {
            document.querySelector(`.pages-${control}`).innerHTML = control
        })
    }

    userControlesPages() {
        const triggers = [...pagesControlContainer.childNodes]
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault()
                this.setDirecaoPages(control)
            })
        })
    }
}

const pages = new CarrosselPages(pagesContainer, pagesItems, pagesControlContainer)
pages.userControlesPages()
