/* global query */
const Pencil = {}
/**
 * 反序列化 querystring
 * @param {String} url
 * @return {undefined|String}
 */
Pencil.query =(name, url)=> {
  // ?hello=test&wonghan=handsome
  var reg = new RegExp('(?:\\?|&)' + name + '=(.*?)(?:&|$)')
  var ret = reg.exec(url) || []
  return ret[1]
}
/**
 * 移除节点
 * @param {DOM} node 
 */
Pencil.removeNode = node => {
  return node.parentNode.removeChild(node)
}
/** 
 * 绑定事件
 */
Pencil.on = (node,type,handle) => {
  node.addEventListener(type,handle,false)
}

module.exports = Pencil