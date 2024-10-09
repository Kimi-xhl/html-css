function loginApi(username, password, callback) {
    const xml = new XMLHttpRequest()
    xml.open('post',`${baseUrl}/users/login?username=${username}&password=${password}`)
    xml.send(`username=${username}&password=${password}`) 
    xml.onreadystatechange = function(){
        if(xml.readyState ===4 && xml.status ==200){
            const response = JSON.parse(xml.response)
            if(response.code == 500){
                showAlert(response.msg)
            }
        }
        
    }
}