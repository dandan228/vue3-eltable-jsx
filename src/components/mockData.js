// mock文件夹与src同级，在mock文件夹下创建mock.js文件

const Mock = require('mockjs')
const Random = Mock.Random

let originList = []
const count = 100

for(let i = 0; i < count; i++) {
    originList.push({
        id: '@increment',
        name: Random.ctitle(5, 10),
        number: 'P202203' + Random.integer(1, 1000),
        time: Random.now(),
        desc: Random.csentence()
    })
}

Mock.mock('/api/getList', 'post', (params) => {
    const body = JSON.parse(params.body)
    let { page, pageSize } = body
    let total = originList.length
    let len = total / pageSize
    const totalPage = Number.isInteger(len) ? len + 1 : len
    const list = originList.slice((page - 1) * pageSize, page * pageSize)

    return {
        code: 200,
        message: 'success',
        data: {
            page,
            pageSize,
            total,
            totalPage,
            list
        }
    }
})
