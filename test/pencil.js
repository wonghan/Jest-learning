const Pencil = require('../js/pencil')

test('query',()=>{  // testCase
    // assert
    expect(Pencil.query('hello', '?hello=test')).toBe('test')
    expect(Pencil.query('hello', '?hello2=test')).toBe(undefined)
})

test('query2',()=>{
    expect(Pencil.query('hello/test', '?hello/test=test')).toBe('test')
})

describe('test query',()=>{
    test('query3',()=>{  // testCase
        // assert
        expect(Pencil.query('hello', '?hello=test')).toBe('test')
        expect(Pencil.query('hello', '?hello2=test')).toBe(undefined)
    })
})

describe('test node',()=>{
    test('remove node',()=>{
        document.body.innerHTML = '<div id="p"><p id="c"></p></div>'
        const p = document.getElementById('p')
        expect(p.nodeName.toLowerCase()).toBe('div')
        const c = document.getElementById('c')
        Pencil.removeNode(c)
        expect(document.getElementById('c')).toBeNull()
    })
})
describe('test on',()=>{
    test('on',()=>{
        document.body.innerHTML = '<div id="p"><button id="c">点击</button></div>'
        const btn = document.getElementById('c')
        Pencil.on(btn,'click',()=>{
            btn.innerHTML = 'clicked!'
        }) 
        btn.click()
        expect(btn.innerHTML).toBe('clicked!')
    })
})