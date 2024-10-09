document.getElementById('loginForm').addEventListener('submit', function (e) {

	let role = ''
	document.querySelectorAll('#loginForm input[name=role]').forEach(function (item) {
		item.checked ? role = item.value : ''
	})

	const username = document.querySelector('#loginForm input[name=username]').value
	const password = document.querySelector('#loginForm input[name=password]').value

	console.log(role);

	if (role === 'user') {
		LoginApi(username, password)
	} else if (role === 'yonghu') {
		LoginUserApi(username, password)
	}


	e.preventDefault(); //阻止表单提交

})