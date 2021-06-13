// const signUp = document.getElementsByClassName("sign__up")
// const signIn = document.getElementsByClassName('sign__in')
// let formName = document.getElementsByClassName("form")
// const formSignIn = document.getElementsByClassName('form__sign__in')

// signUp.addEventListener('click', () => {
//     form.style.transform = "translateX(50vw)" 
// })

// signIn.addEventListener('click', () => {
//     form.style.transform = "translateX(-50vw)" 
// })

// function signUpMove() {
//     formName.style.transform = "translateX(50vw)" 
// }

// function signInMove() {  
//     form.style.transform = "translateX(-50vw)" 
// }

// formName.innerH


const signUp = document.querySelector(".sign__up")
const signIn = document.querySelector(".sign__in")
const signUpBefore = document.querySelector(".sign__up", '::before')
const signInBefore = document.querySelector(".sign__in", '::before')
const form = document.querySelector(".form")
const mediaQuery = window.matchMedia("(min-width: 750px)")
const mediaQueryLarge = window.matchMedia("(min-width: 950px)")

    signUp.addEventListener("click", () => {
        form.style.transform = "translateX(0vw)"
    })


    signIn.addEventListener("click", () => {
        if( mediaQueryLarge.matches) {
            form.style.transform = "translateX(-40vw)"
                console.log('950')
        } else {
            if( mediaQuery.matches) {
                form.style.transform = "translateX(-50vw)"
            console.log('0')
            } else {
                form.style.transform = "translateX(-100vw)"
                console.log('750')
            }
        } 
        
    })