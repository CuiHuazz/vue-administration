// 公用修改vuex的state的方法
export const setState = (state, data) => {
  // 循环修改，好处是不会更新其他数据
  if (!data || typeof data !== 'object' || !!Array.isArray(data)) {
    throw new Error('setState warning：data需要是Object类型！')
  }
  for (const key in data) {
    state[key] = data[key]
  }
}

// 手机号加密****
export const phoneEncryption = function (phone) {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

// 返回是否是链接
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
// n级数数据处理
export const formatOrgTree = function (orgData) {
  orgData = JSON.parse(JSON.stringify(orgData))
  // 过滤无id的数据
  let orgIdArr = orgData.map((item) => item.id)
  // 一一对比 只塞入一级目录 后代children自组合
  let tree = orgData.reduce((arr, item) => {
    if (item.parentId === '0') {
      arr.push(item)
    } else {
      let pIdx = orgIdArr.indexOf(item.parentId)
      if (pIdx > -1) {
        Array.isArray(orgData[pIdx].children) ? orgData[pIdx].children.push(item) : (orgData[pIdx].children = [item])
      }
    }
    return arr
  }, [])
  return tree
}
