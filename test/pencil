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