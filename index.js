import 'normalize.css'
import './index.scss'
import './animation.css'
// let body
// 
const now = Date.now()
const type = new Event('type')

const pageLoad = () => {
    const t = window.performance && performance.timing
    if (!t) return (Date.now() - now)
    return t.loadEventEnd - t.navigationStart
}

window.addEventListener('load', () => {
    
    setTimeout(() => {
        const ft = document.querySelector("#footer_text")
        ft.classList.add("slide-in-bottom")
        ft.textContent = `Page loaded in ${pageLoad()/ 1000} secs.`
    }, 0)

    const header = document.querySelector("header")
    header.classList.remove("hidden")
    header.classList.add("slide-in-top")


    const name = document.querySelector("#name")
    const greet = document.querySelector("#greet")
    // const tag = document.querySelector("#tag")
    const h1 = document.querySelector("h1")
    name.classList.remove("hidden")
    greet.classList.add("slide-in-left")
    h1.classList.add("text-focus-in")
    tag.classList.add("slide-in-right")
    tag.style.animationDelay= "0.5s"
    greet.style.animationDelay= "0.5s"
    setTimeout(() => tag.dispatchEvent(type), 2000)
    // body.classList.remove("hidden")

    setTimeout(() => {
        const intro = document.querySelector("#intro")
        intro.classList.remove("hidden")

        Array.from(intro.querySelector("div").children).forEach((p, i) => {
            
            p.style.animationDelay = (`${i*0.1}s`).toString()
            p.classList.add("slide-in-top")
        })
        // intro.querySelector('div').classList.add("slide-in-top")

        const skills = document.querySelector("#skills")
        skills.classList.remove("hidden")
        // skills.querySelector('div').classList.add("slide-in-left")
        Array.from(skills.querySelector("div").children).forEach((p, i) => {
            
            p.style.animationDelay = (`${i*0.12}s`).toString()
            p.classList.add("slide-in-bottom")
        })
    }, 1500)

})

// setTimeout(() => {
    
// }, 5000)