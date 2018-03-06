const Radio = require('../js/radio')
const fs = require('fs')
const path = require('path')

test('Radio',()=>{
    // 重点！同步加载页面
    document.body.innerHTML = fs.readFileSync(path.resolve(__dirname,'./assert/radio.html'))
    const radio = new Radio({
        boxId:'radio'
    })
    expect(radio.case[0].classList.contains('radio-active')).toBe(true)
    expect(radio.case[1].classList.contains('radio-active')).toBe(false)
    expect(radio.case[2].classList.contains('radio-active')).toBe(false)
})

test('Radio click',()=>{
    // 重点！同步加载页面
    document.body.innerHTML = fs.readFileSync(path.resolve(__dirname,'./assert/radio.html'))
    const radio = new Radio({
        boxId:'radio'
    })
    radio.case[2].click()
    expect(radio.case[0].classList.contains('radio-active')).toBe(false)
    expect(radio.case[1].classList.contains('radio-active')).toBe(false)
    expect(radio.case[2].classList.contains('radio-active')).toBe(true)
})