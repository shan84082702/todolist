function errorHandle(res){
    const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Origin': '*', //讓所以伺服器IP造訪
        'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE', //允許的method
        'Content-Type': 'application/json'
    };

    res.writeHead(400, headers);
    res.write(JSON.stringify({
        "status": "fail",
        "msg": "資料未填寫正確或無此todo id"
    }));
    res.end();
}

module.exports = errorHandle;