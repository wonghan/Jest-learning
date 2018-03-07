function forEach(items,callback) {
    for(let index = 0;index<items.length;index++){
        callback(items[index])
    }
}

// 1.Mock Function
test('forEach',()=>{
    // mockFunc模拟函数
    let mockFunc = jest.fn()

    forEach([1,2,3],mockFunc)
    // 调用了多少次
    expect(mockFunc.mock.calls.length).toBe(3)
    // 参数
    expect(mockFunc.mock.calls[0]).toEqual([1])
    expect(mockFunc.mock.calls[0][0]).toBe(1)
})

// 2.manual_mock 手动模拟模块
jest.mock('jquery')
const $ = require('jquery')

test('jquery',()=>{
    document.body.innerHTML = '<div id="jquery">jquery</div>'
    expect($('#jquery').innerHTML).toBe('jquery')
})