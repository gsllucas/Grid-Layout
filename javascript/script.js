const btnFechar = document.querySelector('#fechar')
const modal = document.querySelector('.modal-contato')
const btnContato =  document.querySelector('#contato')

const fecharModal = () => {
    modal.style.display = "none";
}

const abrirModal = () => {
    modal.style.display = "flex";
}


btnContato.addEventListener('click', abrirModal)
btnFechar.addEventListener('click', fecharModal)