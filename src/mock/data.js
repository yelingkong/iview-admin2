import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
const Random = Mock.Random

export const getTableData = req => {
  let tableData = []
  doCustomTimes(8, () => {
    tableData.push(Mock.mock({
      name: Random.cname(),
      email: '@email',
      address:Random.county(),
      zhuti:Random.csentence(5),
      chanpin:Random.csentence(2),
      tel: /^1[34578]\d{9}$/,
      createTime: '@date',
      dateOfAudit: '@date',
      dataTime:Random.datetime(),
      "reviewTheStatus|0-2": 0,
      "status|0-1": 0,
      "baifen|1-20": 0,
      "shuliang|10-100": 0,
      "index|+1": 0,
      "zhuisuma|1": "1.2.62563584652132545X.。。。",
      "shuliang|1": "30公斤",
      "zhangshu|1": "10张"
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
