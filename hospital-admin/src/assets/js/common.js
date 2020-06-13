const rows = 10

function change (t) {
  if (t < 10) {
    return '0' + t
  }
  return t
}

const timestampToTime = (timestamp, format) => {
  if (!timestamp) {
    return false
  }
  let date = new Date(timestamp)
  let Y = date.getFullYear()
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1): date.getMonth() + 1)
  let D = change(date.getDate())
  let h = change(date.getHours())
  let m = change(date.getMinutes())
  let s = change(date.getSeconds())

  if (format === 'YMDHMS') {
    return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
  } else if (format === 'YMDHM') {
    return Y + '-' + M + '-' + D + ' ' + h + ':' + m
  }
  return Y + '-' + M + '-' + D
}

const isFirst = ['', '首次', '二次']
const status = {
  '0': '待审核',
  '1': '通过',
  '2': '驳回',
  '11': '线上待审核',
  '12': '线上驳回',
  '21': '回执待确认',
  '22': '回执驳回',
  '31': '完成'
}

export default {
  timestampToTime,
  isFirst,
  status,
  rows
}
