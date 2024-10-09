const baseUrl = '/api'


/**
 * 信息提示
 * @param {string} message 
 */
function showAlert(message) {
    const modalList = document.querySelectorAll('.cu-modal')
    const modal = document.createElement('div')
    modal.className = 'cu-modal animate__animated animate__fadeInDown'
    modal.innerHTML = 
    `
      <div class="modal-content">
            <span class="close"></span>
            <p>${message}</p>
        </div>
    `

    modal.style.top = (20 + modalList.length*55)+'px' 

    const body = document.querySelector('body')
    body.appendChild(modal)


    setTimeout(closeModal,3000)

    function closeModal() {
        modal.classList.add('animate__fadeOutUp')
        setTimeout(function() {
            body.removeChild(modal)
        }, 500)
    }

}

/**
 * 返回上页
 */
function goBack() {
    console.log('ddd');
    
    window.history.go(-1)
}