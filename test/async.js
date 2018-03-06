function delay(callback){
    setTimeout(()=>{
        callback('give you data')
    },1000)
}

test('async',(done)=>{
    delay((data)=>{
        expect(data).toBe('give you data')
        done()
    })
})