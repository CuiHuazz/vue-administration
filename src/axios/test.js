import request from './index'
export default {
  // 测试
  test() {
    return request({
      url: 'http://192.168.51.40:32425/hotTool/getDataExcel?dataType=bar&reportId=test_k&listId=test_k&hotwordId=test_k&seq=1',
      method: 'get',
      responseType: 'blob'
    })
  },
  // 测试
  login() {
    return request({
      url: 'http://192.168.51.40:32425/api/common/getAllXzqh',
      method: 'get'
    })
  },
}