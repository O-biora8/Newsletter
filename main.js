const input = {
    enterEmail : ''
}

const formEl = document.getElementById('subscribe')
const buttonEl = document.getElementById('subscribeHere')
const individualEmailEl = document.getElementById('individualEmail')
const enterEmail = document.getElementById('enterEmail')
const errorMessage = document.getElementById('errorMessage')

formEl.addEventListener('click', (e) => {
    e.preventDefault()
})

buttonEl.addEventListener('click', (e) => {
    const email = enterEmail.value
    errorMessage.textContent = 'Valid email required'
    if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
        return errorMessage
    }
    location.assign(`./success.html?email=${email}`)
})



