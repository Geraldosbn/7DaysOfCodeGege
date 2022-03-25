function quiz1() {
    const form1 = document.querySelector('#form1')

    form1.addEventListener('submit',function(event) {
        event.preventDefault()
        const name = event.target.querySelector('#name').value
        const age = event.target.querySelector('#age').value
        const language = event.target.querySelector('#language').value
        const answer = document.querySelector('#answer1')
        const langSelect = document.querySelector('#langSelect')
        
        langSelect.innerHTML = language
        answer.innerHTML = (`Olá ${name}, você tem ${age} e está aprendendo ${language}, parabéns!`)
    })
}

function quiz2() {
    const form2 = document.querySelector('#form2')

    form2.addEventListener('submit', function (event) {
        event.preventDefault()
        const yes = event.target.querySelector('#yes')
        const no = event.target.querySelector('#no')
        const answer = document.querySelector('#answer2')
        
        if(yes.checked) {
            answer.innerHTML = ('Muito bom! Continue estudando e você terá muito sucesso.')
        } else if(no.checked) {
            answer.innerHTML = ('Ahh que pena... Já tentou aprender outras linguagens?')
        }
    })
}

quiz1()
quiz2() 
