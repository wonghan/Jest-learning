function assert(expression, message){
    console.log(expression,message)
    return expression
}
// 用例 test-case
// assert(query('hello', '?hello=test') === 'test','test hello = test')
// assert(query('hello', '?hello=') === '','test hello = ""')
// assert(query('hello', '?hello2=test') === undefined,'undefined')
// assert(query('hello', '?hello=test&hello2=3') === 'test','test hello = test')
// assert(query('hello', '?hello=&hello2=3')==='','test hello = ""')
// assert(query('hello', '?')===undefined,'undefined')
// assert(query('hello-test', '?hello-test=test')==='test','test hello-test=test')
// assert(query('hello/test', '?hello/test=test')==='test','test hello/test=test')

function testCase(message,tests) {
    var total = 0
    var success = 0

     for(var test in tests){
         total += 1
         var ret = tests[test](test)
         if(ret){
             success += 1
         }
     }
     console.log('success/total' + success +'/'+total)
}

/**
 * 测试用例
 * @param {String} 'Query' 框架名称
 */
testCase('Query',{
    'test hello = test':(message) =>{
        return assert(query('hello', '?hello=test') === 'test',message)
    },
    'test hello = ""':(message) =>{
        return assert(query('hello', '?hello=') === '',message)
    }
})