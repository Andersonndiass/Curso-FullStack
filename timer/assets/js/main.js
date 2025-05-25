function criarSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' },);
}
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0
let timer
function iniciarRelogio() {
    timer = setInterval(
        function () {
            segundos++
            relogio.innerHTML = criarSegundos(segundos);
        }, 1000)
}
function pausarRelogio() {
    relogio.s
    setTimeout(() => {
        clearInterval(timer)
    }, 0);
}
document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciarRelogio()
    }
    if (el.classList.contains('pausar')) {
        pausarRelogio()
        relogio.classList.add('pausado')
    }
    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.classList.remove('pausado')
        relogio.innerHTML = '00:00:00'
        segundos = 0
    }
})