document.getElementById('loginForm').addEventListener('submit', function(e) {
    console.log('ddd');

    const username = document.querySelector('#loginForm input[name=username]').value
    const password = document.querySelector('#loginForm input[name=password]').value
    
    e.preventDefault(); //阻止表单提交
    
    LoginApi(username,password)
})