const ediVideoContainer = document.querySelector('.box-carrossel-ediVideo')
const ediVideoControlsContainer = document.querySelector('.carrosel-controls-ediVideo')
const ediVideoControl = ['previous', 'next']
const ediVideoItems = document.querySelectorAll('.vid-carrossel-ediVideo')



function playVideo() {
    const vid2 = document.querySelector('.ediVideo-item-2')

    ediVideoItems.forEach(e => {
        console.log(e)
        if (e.classList[1] === 'ediVideo-item-2') {
            e.addEventListener('click', ()=> {
                if (e.paused) {
                    e.play();
                } else {
                    e.pause();
                }
            })
        }
    })
}
playVideo()


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
            el.classList.remove('ediVideo-item-4')
            el.classList.remove('ediVideo-item-5')
        })
        
        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`ediVideo-item-${i+1}`)
        })
        playVideo()
    }

    setDirecaoEditVideos(direction) {
        if (direction.className == `edi-video-previous`) {
            this.carouselArray.unshift(this.carouselArray.pop())
        } else {
            this.carouselArray.push(this.carouselArray.shift())
        }
        this.attEditVideos()
    }

    setControlesEditVideos() {
        this.carouselControls.forEach(control => {
            document.querySelector(`.edi-video-${control}`).innerHTML = control
        })
    }

    userControlesEdiVideo() {
        const triggers = [...ediVideoControlsContainer.childNodes]
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault()
                this.carouselArray.forEach(el => {
                    el.pause()
                })
                this.setDirecaoEditVideos(control)
            })
        })
    }
}

const ediVideo = new CarrosselEdiVideo(ediVideoContainer, ediVideoItems, ediVideoControlsContainer)
ediVideo.userControlesEdiVideo()
