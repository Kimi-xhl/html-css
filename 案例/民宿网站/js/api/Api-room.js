
function getInfoRoomListApi(data, callback) {
    $.ajax({
        url:`${baseUrl}/fangjian/page`,
        method: 'get',
        data: data,
        dataType: 'json',
        headers: {
            Token: localStorage.getItem('Token'),
            Accept: 'application/json, text/plain, */*'
        },
        success: callback,
    })
}