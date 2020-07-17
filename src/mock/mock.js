// 使用 Mock
var Mock = require('mockjs');
// 设置mock过期时间
Mock.setup({
    timeout: 6000
});

let Random = Mock.Random;

function randomData() {
    let arr = []
    for (var i = 0; i < 30; i++) {
        let obj = {};
        obj.a = Random.image('200x100');
        obj.b = Random.boolean();
        obj.c = Random.integer();
        obj.d = Random.range(3, 7);
        obj.e = Random.date('yyyy-MM-dd');
        obj.f = Random.time('a HH:mm:ss');
        obj.g = Random.title();
        arr.push(obj);

    }
    return arr;
}

// 接口，第一个参数url，第二个参数请求类型，第三个参数响应回调
Mock.mock('/api/login', /get|post/i, randomData)