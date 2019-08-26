const formatNumber = num => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const FormatDate = str => {
  var dstr = str.split('T')
  return dstr[0]
}

export default formatNumber