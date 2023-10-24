const ediVideoContainer = document.querySelector('.box-carrossel-ediVideo')
const ediVideoControlsContainer = document.querySelector('.carrosel-controls-ediVideo')
const ediVideoControl = ['previous', 'next']
const ediVideoItems = document.querySelectorAll('.vid-carrossel-ediVideo')

class CarrosselEdiVideo {
    constructor(container, items, controls) {
        this.carrouselContainer = container
        this.carouselControls = controls
        this.carouselArray = [...items]
    }

    attEditVideos() {
        this.carouselArray.forEach(el => {
            el.classList.remove('ediVideo-item-1')
            el.classList.remove('ediVideo-item-2')
            el.classList.remove('ediVideo-item-3')
        })
        
        this.carouselArray.slice(0, 3).forEach((el, i) => {
            el.classList.add(`ediVideo-item-${i+1}`)
        })
    }

    setDirecaoEditVideos(direction) {
        if (direction.className == `ediVideo-previous`) {
            this.carouselArray.unshift(this.carouselArray.pop())
        } else {
            this.carouselArray.push(this.carouselArray.shift())
        }
        this.attEditVideos()
    }

    setControlesEditVideos() {
        this.carouselControls.forEach(control => {
            document.querySelector(`.ediVideo-${control}`).innerHTML = control
        })
    }

    userControlesEdiVideo() {
        const triggers = [...ediVideoControlsContainer.childNodes]
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault()
                this.setDirecaoEditVideos(control)
            })
        })
    }
}

const ediVideo = new CarrosselEdiVideo(ediVideoContainer, ediVideoItems, ediVideoControlsContainer)
ediVideo.userControlesEdiVideo()
