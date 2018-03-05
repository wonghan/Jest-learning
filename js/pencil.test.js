// 用例 test-case
// assert(query('hello', '?hello=test') === 'test','test hello = test')
// assert(query('hello', '?hello=') === '','test hello = ""')
// assert(query('hello', '?hello2=test') === undefined,'undefined')
// assert(query('hello', '?hello=test&hello2=3') === 'test','test hello = test')
// assert(query('hello', '?hello=&hello2=3')==='','test hello = ""')
// assert(query('hello', '?')===undefined,'undefined')
// assert(query('hello-test', '?hello-test=test')==='test','test hello-test=test')
// assert(query('hello/test', '?hello/test=test')==='test','test hello/test=test')

// test case | assert

const Pencil = require('./pencil')

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