function Radio(options) {
    const def = {
        boxId:'',
        active: 0,
        activeClass: 'radio-active'
    }
    // 重点！初始化
    const opts = this.opts = Object.assign({},def,options)
    const box = this.box = document.getElementById(opts.boxId)

    this.case = box.querySelectorAll('.case')
    this.letter = box.querySelectorAll('.letter')

    this.unactive()
    this.active(opts.active)
    this.events()
}
Radio.prototype.active =function(active){
    let cur = this.current
    if(typeof cur==='number') {
        this.case[cur].classList.remove(this.opts.activeClass)
        this.letter[cur].classList.remove(this.opts.activeClass)
    }

    this.case[active].classList.add(this.opts.activeClass)
    this.letter[active].classList.add(this.opts.activeClass)
    this.current = active
}
Radio.prototype.unactive = function(){
    const len=this.letter.length
    for(var i=0;i<len;i++){
        this.case[i].classList.remove(this.opts.activeClass)
    }
}
Radio.prototype.events = function(){
    const self = this
    
    for(var i = 0,len=this.case.length;i<len;i++){
        const casei = self.case[i]
        casei.order = i
        casei.addEventListener('click',function(){
            self.active(this.order)
        },false)
    }
}
module.exports =Radio

// 以上若有修改属性的操作可写为[例]：this.case[i].style.display = 'none'