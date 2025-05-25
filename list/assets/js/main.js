const inputTarefas = document.querySelector('.input-tarefa')
const button = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criarLi() {
    const li = document.createElement('li')
    return li
}

function botaoApagar(li) {
    li.innerText += ' '
    const btnApagar = document.createElement('button')
    btnApagar.innerText = 'Apagar'
    btnApagar.setAttribute('class', 'apagar')
    btnApagar.setAttribute('tittle', 'Clique para apagar')
    li.appendChild(btnApagar)
}
function criaTarefa(textoInput) {
    const li = criarLi()
    li.innerHTML = textoInput
    tarefas.appendChild(li)
    limpaCampo()
    botaoApagar(li)
    salvarTarefa()
}

function limpaCampo() {
    inputTarefas.value = ''
    inputTarefas.focus()
}

inputTarefas.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefas.value) return
        criaTarefa(inputTarefas.value)
    }
})
button.addEventListener('click', function () {
    if (!inputTarefas.value) return
    criaTarefa(inputTarefas.value)
})

document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefa()
    }
})

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar','').trim()
        listTarefas.push(tarefaTexto)
    }
    const tarefaJSON = JSON.stringify(listTarefas)
    localStorage.setItem('tarefas', tarefaJSON)
}

function adicionaTarefasSalvar(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDtarefas = JSON.parse(tarefas)

    for(let tarefa of listaDtarefas){
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvar()