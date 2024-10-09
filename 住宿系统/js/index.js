document.getElementById('form').addEventListener('submit',function(e) {
    // console.log('123');
    
    e.preventDefault()

    const username = document.querySelector('#form input[name=username]').value
    const password = document.querySelector('#form input[name=password]').value
    loginApi(username, password)
})

