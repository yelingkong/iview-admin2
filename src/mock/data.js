import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
const Random = Mock.Random

export const getTableData = req => {
  let tableData = []
  doCustomTimes(10, () => {
    tableData.push(Mock.mock({
      name: Random.cname(),
      email: '@email',
      address:Random.county(),
      zhuti:Random.csentence(5),
      tel: /^1[34578]\d{9}$/,
      createTime: '@date',
      dateOfAudit: '@date',
      dataTime:Random.datetime(),
      "reviewTheStatus|0-2": 0,
      "status|0-1": 0
    }))
  })
  return tableData
}

export const getDragList = req => {
  let dragList = []
  doCustomTimes(5, () => {
    dragList.push(Mock.mock({
      name: Random.csentence(10, 13),
      id: Random.increment(10)
    }))
  })
  return dragList
}
