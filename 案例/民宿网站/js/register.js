
// document.getElementById('registerFrom').addEventListener('submit', function(e) {

//     const data = {
//         username: document.querySelector('#registerFrom input[name=username]').value,
//         password: document.querySelector('#registerFrom input[name=password]').value,
//         repetitionPassword: document.querySelector('#registerFrom input[name=repetitionPassword]').value,
//         yonghuName: document.querySelector('#registerFrom input[name=yonghuName]').value,
//         yonghuPhone: document.querySelector('#registerFrom input[name=yonghuPhone]').value,
//         yonghuEmail: document.querySelector('#registerFrom input[name=yonghuEmail]').value
//     }

//     registerApi(data)
    
//     e.preventDefault(); //阻止表单提交

// })


document.getElementById('registerFrom').addEventListener('submit', function(e) {

    const data = {
        username: document.querySelector('#registerFrom input[name=username]').value,
        password: document.querySelector('#registerFrom input[name=password]').value,
        repetitionPassword: document.querySelector('#registerFrom input[name=repetitionPassword]').value,
        yonghuName: document.querySelector('#registerFrom input[name=yonghuName]').value,
        yonghuPhone: document.querySelector('#registerFrom input[name=yonghuPhone]').value,
        yonghuEmail: document.querySelector('#registerFrom input[name=yonghuEmail]').value
    }

    console.log(data);
    registerApi(data)
    e.preventDefault()

    
})


