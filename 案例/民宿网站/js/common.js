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


function createDialog(settingObj) {
    const dialog = document.createElement('div')
    dialog.className = 'cu-dialog'
    dialog.innerHTML = `
    <div class="cu-dialog-main">
      <div class="title">
        ${settingObj.title ? settingObj.title : ''}

      </div>
      <div class="content">
        ${settingObj.content ? settingObj.content : ''}

      </div>

      <div class="footer">
          <button class="ok">确定</button>
          <button class="cancel" onclick="removeDialog()">取消</button>
      </div>

    </div>
    `
    const body = document.querySelector('body')
    
    body.appendChild(dialog)

    document.querySelector('.cu-dialog-main .footer .ok').onclick = settingObj.ok
    
}


function removeDialog() {
    const body = document.querySelector('body')
    const dialog = document.querySelector('.cu-dialog')

    body.removeChild(dialog)
}


/**
 * 返回上页
 */
function goBack() {
    console.log('ddd');
    
    window.history.go(-1)
}