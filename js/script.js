let output = document.querySelector('[data-output-value]')
let input = document.querySelector('#textInput')
let btn = document.querySelector('#btn')

// function converter(value) {
//      input.value * 60
// }

btn.addEventListener('click', () => {
    results = eval(input.value * 60)
    output.textContent = `${results} seconds`
    setTimeout(() => {
        output.textContent = ''
    }, 3050);
})
