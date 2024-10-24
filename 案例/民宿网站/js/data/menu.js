const menu = {
	list() {
		return [{
				"backMenu": [{
					"child": [{
						"buttons": [
							"查看",
							"新增",
							"修改",
							"删除"
						],
						"menu": "管理员管理",
						"menuJump": "列表",
						"tableName": "users"
					}],
					"router": '/page/adminManage.html',
					"menu": "管理员管理"
				}, {
					"child": [{
							"buttons": [
								"查看",
								"新增",
								"删除",
								"修改"
							],
							"menu": "房间类型管理",
							"router": '/page/dataManage/roomTypeManage.html',
							"menuJump": "列表",
							"tableName": "dictionaryFangjian"
						},
						{
							"buttons": [
								"查看",
								"新增",
								"删除",
								"修改"
							],
							"menu": "公告类型管理",
							"menuJump": "列表",
							"tableName": "dictionaryNews"
						}
					],
					"menu": "基础数据管理"
				}, {
					"child": [{
							"buttons": [
								"查看",
								"新增",
								"修改",
								"删除"
							],
							"menu": "房间信息管理",
							"menuJump": "列表",
							"tableName": "fangjian",
							"router": '/page/roomManage/roomInfoManage.html'
						},
						{
							"buttons": [
								"查看",
								"修改",
								"删除"
							],
							"menu": "房间评论/投诉管理",
							"menuJump": "列表",
							"tableName": "fangjianLiuyan"
						},
						{
							"buttons": [
								"订单",
								"查看",
								"删除"
							],
							"menu": "房间预约管理",
							"menuJump": "列表",
							"tableName": "fangjianOrder"
						}
					],
					"menu": "房间信息管理"
				}, {
					"child": [{
						"buttons": [
							"查看",
							"新增",
							"修改",
							"删除"
						],
						"menu": "论坛管理",
						"menuJump": "列表",
						"tableName": "forum"
					}],
					"menu": "论坛管理"
				}, {
					"child": [{
						"buttons": [
							"查看",
							"新增",
							"修改",
							"删除"
						],
						"menu": "公告信息管理",
						"menuJump": "列表",
						"tableName": "news"
					}],
					"menu": "公告信息管理"
				}, {
					"child": [{
						"buttons": [
							"查看",
							"新增",
							"修改",
							"删除"
						],
						"menu": "用户管理",
						"menuJump": "列表",
						"tableName": "yonghu"
					}],
					"menu": "用户管理"
				}, {
					"child": [{
						"buttons": [
							"查看",
							"新增",
							"修改",
							"删除"
						],
						"menu": "轮播图管理",
						"menuJump": "列表",
						"tableName": "config"
					}],
					"menu": "轮播图信息"
				}],
				"frontMenu": [],
				"hasBackLogin": "是",
				"hasBackRegister": "否",
				"hasFrontLogin": "否",
				"hasFrontRegister": "否",
				"roleName": "管理员",
				"tableName": "users"
			},






















			{
				"backMenu": [{
					"child": [{
							"buttons": [
								"查看"
							],
							"menu": "房间信息管理",
							"menuJump": "列表",
							"tableName": "fangjian"
						},
						{
							"buttons": [
								"查看",
								"删除"
							],
							"menu": "房间评论/投诉管理",
							"menuJump": "列表",
							"tableName": "fangjianLiuyan"
						},
						{
							"buttons": [
								"订单",
								"查看"
							],
							"menu": "房间预约管理",
							"menuJump": "列表",
							"tableName": "fangjianOrder"
						}
					],
					"menu": "房间信息管理"
				}, {
					"child": [{
						"buttons": [
							"查看",
							"新增",
							"删除"
						],
						"menu": "论坛管理",
						"menuJump": "列表",
						"tableName": "forum"
					}],
					"menu": "论坛管理"
				}, {
					"child": [{
						"buttons": [
							"查看"
						],
						"menu": "公告信息管理",
						"menuJump": "列表",
						"tableName": "news"
					}],
					"menu": "公告信息管理"
				}],
				"frontMenu": [],
				"hasBackLogin": "是",
				"hasBackRegister": "否",
				"hasFrontLogin": "否",
				"hasFrontRegister": "否",
				"roleName": "用户",
				"tableName": "yonghu"
			}
		]
	}
}

const menuList = menu.list()
function renderAisde(role) {
	const aside = document.querySelector('aside')
	let menuContent
	if (role === '管理员') {
		menuContent = menuList[0]
	} else if (role === '用户') {
		menuContent = menuList[1]
	} else {
		menuContent = menuList[1]
	}
	let htmlString = '<ul>'
	menuContent.backMenu.forEach(function (item) {
		htmlString += `<li>`
		if (item.child instanceof Array && item.child.length > 1) {
			htmlString += `<span>${item.menu}</span>`
			htmlString += `<ul class="ml-5">`
			item.child.forEach(function (submenu) {
				htmlString += `<li><a href="#" onclick="goPage('${submenu.router}','${submenu.buttons}')">${submenu.menu}</a></li>`
			})
			htmlString += `</ul>`
		} else {
			htmlString += `<a href="#" onclick="goPage('${item.router}','${item.child[0].buttons}')">${item.menu}</a>`
		}
		htmlString += `</li>`
	});
	htmlString += `</ul>`


	aside.innerHTML = htmlString
}

getSessionApi(renderAisde)


function goPage(url, buttons) {
	localStorage.setItem('buttons', buttons)
	window.location.href = url

}