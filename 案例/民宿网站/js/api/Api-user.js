/**
 * 登录管理员Api
 * @param {string} username 用户名
 * @param {string} password 密码
 * @param {Function} callback 回调函数
 */
function LoginApi(username, password, callback) {
  const xml = new XMLHttpRequest()
  xml.open('post', `${baseUrl}/users/login?username=${username}&password=${password}`)
  xml.setRequestHeader('Content-Type', 'application/json')
  xml.setRequestHeader('Token', '')
  xml.send(`username=${username}&password=${password}`)
  xml.onreadystatechange = function () {
    if (xml.readyState === 4 && xml.status === 200) {
      let response = JSON.parse(xml.response)
      if (response.code === 0) {
        localStorage.setItem('Token', response.token)
        showAlert('登录成功')
        setTimeout(function() {
          window.location.href = '/home.html'
        },1000)
      }

      if (response.code == 500) {
        showAlert(response.msg)
      }
    }
  }

}


/**
 * 登录管理员Api
 * @param {string} username 用户名
 * @param {string} password 密码
 * @param {Function} callback 回调函数
 */
function LoginUserApi(username, password, callback) {
  const xml = new XMLHttpRequest()
  xml.open('post', `${baseUrl}/yonghu/login?username=${username}&password=${password}`)
  xml.setRequestHeader('Content-Type', 'application/json')
  xml.setRequestHeader('Token', '')
  xml.send(`username=${username}&password=${password}`)
  xml.onreadystatechange = function () {
    if (xml.readyState === 4 && xml.status === 200) {
      let response = JSON.parse(xml.response)
      if (response.code === 0) {
        localStorage.setItem('Token', response.token)
        showAlert('登录成功')
        setTimeout(function() {
          window.location.href = '/home.html'
        },1000)
      }
      if (response.code == 500) {
        showAlert(response.msg)
      }
    }
  }
}


/**
 * 用户注册Api
 * http://175.178.249.61:8081/minsuguanliw/yonghu/register
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
  xml.open('post', `${baseUrl}/yonghu/register`)
  xml.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
  xml.setRequestHeader('Accept', 'application/json, text/plain, */*')
  xml.send(JSON.stringify(data))
  xml.onreadystatechange = function () {
    if (xml.readyState === 4 && xml.status === 200) {
      let response = JSON.parse(xml.response)
      if (response.code == 500) {
        showAlert(response.msg)
      }
      if (response.code === 0) {
        showAlert('注册成功')
      }
    }
  }
}


/**
 * 获取用户服务器会话
 */
function getSessionApi(callback) {
  const xml = new XMLHttpRequest()
  xml.open('get', `${baseUrl}/users/session`)
  xml.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
  xml.setRequestHeader('Accept', 'application/json, text/plain, */*')
  xml.setRequestHeader('Token', localStorage.getItem('Token'))
  xml.send()
  xml.onreadystatechange = function () {
    if (xml.readyState === 4 && xml.status === 200) {
      let response = JSON.parse(xml.response)
      if (response.code == 401) {
        showAlert(response.msg)
        setTimeout(function() {
          window.location.href = '/index.html'
        },1000)
      }
      if (response.code == 500) {
        showAlert(response.msg)
      }
      if (response.code === 0) {
        localStorage.setItem('user-session', JSON.stringify(response.data))
        if(callback !== undefined) {
          callback(response.data.role)
        }
      }
    }
  }
}


/**
 * 获取管理员列表 
 * @param {{currPage:Number, limit:Number }} pageObj 
 * @param {*} callback 
 */
function getAdminListApi(pageObj,callback) {
  let url = `${baseUrl}/users/page?`

  Object.keys(pageObj).forEach(item => {
    if(pageObj[item]) {
      url += `${item}=${pageObj[item]}&`
    }
  })


  const xml = new XMLHttpRequest()
  xml.open('GET', url)
  xml.setRequestHeader('Token', localStorage.getItem('Token'))
  xml.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
  xml.setRequestHeader('Accept', 'application/json, text/plain, */*')
  xml.send()
  xml.onreadystatechange = function () {
    if (xml.readyState === 4 && xml.status === 200) {
      let response = JSON.parse(xml.response)
      if (response.code == 401) {
        showAlert(response.msg)
        // setTimeout(function() {
        //   window.location.href = '/index.html'
        // },1000)
      }
      if (response.code == 500) {
        showAlert(response.msg)
      }
      if (response.code === 0) {
        console.log(response);
        callback(response.data)
      }
    }
  }
}