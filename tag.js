// import { init } from 'ityped'
// import Typed from 'typed.js'

let tag = document.querySelector('#tag')


const type = (el, options) => {
    el.classList.add("cursor-blink")
    const { strings, typeSpeed, backSpeed } = options
    let i = 0
    let txt = ""
    let backType = false

    if (el.innerHTML !== "") {
        strings.unshift([el.innerHTML, false])
        backType = true
        txt = el.innerHTML
    }

    const _type = () => {
        let str = strings[i % strings.length]
        let rotate = true

        if(typeof str !== 'string') {
            [str, rotate] = str
        }

        let delta = backType ? backSpeed : typeSpeed

        if (backType) {
            txt = str.substring(0, txt.length - 1)
        } else {
            txt = str.substring(0, txt.length + 1)
        }
        el.innerHTML = txt
        
        if (!backType && txt === str) {
            backType = true
            delta = 1500
        } else if (backType && txt === '') {
            backType = false
            if (!rotate) {
                strings.splice(i, 1)
            } else {
                i++
            }
            delta = 750
        }
        setTimeout(_type, delta)
    }

    _type()
}

tag.addEventListener('type', () => type(tag, {
    strings: ['FRONTEND', 'BACKEND', 'FULLSTACK'], 
    typeSpeed: 300,
    backSpeed: 150,
    // loop: true
    // showCursor: false
}))