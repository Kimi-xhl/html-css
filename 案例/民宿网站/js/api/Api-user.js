
/**
 * 登录Api
 * @param {string} username 用户名
 * @param {string} password 密码
 * @param {Function} callback 回调函数
 */
function LoginApi(username, password, callback) {
    const xml = new XMLHttpRequest()
    xml.open('post',`${baseUrl}/users/login?username=${username}&password=${password}`)
    xml.setRequestHeader('Content-Type','application/json')
    xml.setRequestHeader('Token','')
    xml.send(`username=${username}&password=${password}`)
    xml.onreadystatechange = function() {
        if(xml.readyState === 4 && xml.status === 200) {
            let response = JSON.parse(xml.response)
            if(response.code == 500) {
                showAlert(response.msg)
            }
        }
    }
}

/**
 * 用户注册Api
 * @param {{
 *  username: string
 *  password: string
 *  repetitionPassword: string
 *  yonghuName: string
 *  yonghuPhone: string
 *  yonghuEmail: string
 * }} data 注册数据
 */
function registerApi(data) {
    const xml = new XMLHttpRequest()
    xml.open('post',`${baseUrl}/yonghu/register`)
    xml.setRequestHeader('Accept','application/json, text/plain, */*')
    xml.send(JSON.stringify(data))
    xml.onreadystatechange = function() {
        if(xml.readyState === 4 && xml.status === 200) {
            let response = JSON.parse(xml.response)
            if(response.code == 500) {
                showAlert(response.msg)
            }
        }
    }
}