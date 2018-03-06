/**
 * 根据传入的索引删除对应的项
 * @param {Number} index
 * @param {Array} arr
 * @return {Undefined|null|Array}
 */
function removeItemByIndex (index, arr) {
    if (!Array.isArray(arr)) {
      return arr
    }
  
    if (typeof index !== 'number') {
      return undefined
    }
  
    if (index < 0 || index >= arr.length) {
      return null
    }
  
    arr.splice(index, 1)
  
    return arr
  }
  
  /**
   * 测试代码
   */
  describe('removeItemByIndex', () => {
    test('index 0, 数组[1,2,3,4,5]', () => {
      const ret = removeItemByIndex(0, [1, 2, 3, 4, 5])
      expect(ret).toEqual([2, 3, 4, 5])
    })
  
    test('index 2, 数组[1,2,3,4,5]', () => {
      const ret = removeItemByIndex(2, [1, 2, 3, 4, 5])
      expect(ret).toEqual([1, 2, 4, 5])
    })
  
    test('index 4, 数组[1,2,3,4,5]', () => {
      const ret = removeItemByIndex(4, [1, 2, 3, 4, 5])
      expect(ret).toEqual([1, 2, 3, 4])
    })
  
    test('index 非数字, 数组[1,2,3,4,5]', () => {
      const ret = removeItemByIndex(null, [1, 2, 3, 4, 5])
      expect(ret).toBeUndefined()
    })
  
    test('index 超过数组长度, 数组[1,2,3,4,5]', () => {
      const ret = removeItemByIndex(5, [1, 2, 3, 4, 5])
      expect(ret).toBeNull()
    })
  
    test('index 0，非数组', () => {
      const ret = removeItemByIndex(0, {})
      expect(ret).toEqual({})
    })
  })