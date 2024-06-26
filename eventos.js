function executarAcao(event){
    console.log('ola')
    console.log('event')
}

document.getElementById('form').addEventListener('subit', (event) => {
    event.preventDefault();
    console.log('event')
    alert('Recebi o evento')
})

const btnEmail =  document.getElementById('testeEmail')

btnEmail.addEventListener('focus', (event) => {
    console.log('focou no elemento')
})

btnEmail.addEventListener('blur', (event) => {
    console.log('desfocou do elemento')
})

window.addEventListener('resize', (event) => {
    console.log("mudou o tamanho")
})