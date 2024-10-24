const serverImgBaseUrl = `http://175.178.249.61:8081/minsuguanliw/upload/`


function uploadImageApi(data, callback) {
    $.ajax({
        type: 'post',
        url: `${baseUrl}/file/upload`,
        data: data,
        dataType: "json",
        contentType: false,
        processData: false,
        headers: {
            Token: localStorage.getItem('Token'),
        },
        success: callback,
        error: (e) => {
            console.log(e);
        }
    });
}

