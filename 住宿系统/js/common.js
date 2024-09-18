const baseUrl = 'http://175.178.249.61:8081/minsuguanliw'

function showAlert(message){
    const modal = document.createElement('div')
    modal.className = 'a-modal animate__animated animate__fadeInDown'
    modal.innerHTML += `
        <p>${message}</p>
    `

    const modalList = document.querySelectorAll('.a-modal')
    modal.style.top = (20+55*modalList.length)+'px'

    const body = document.querySelector('body')
    body.appendChild(modal)

    setTimeout(closeModal,3000)


    function closeModal(){
        modal.classList.add('animate__fadeOutUp')
        setTimeout(function(){
            body.removeChild(modal)
        },500)
    }
}