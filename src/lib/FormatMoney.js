export default (amount, { decimalCount = 2, decimal = '.', thousands = ',' } = {}) => {
  let formated = '0.00'
  const negativeAmount = amount < 0
  try {
    const n = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString()
    const dec = (n.length > 3) ? n.length % 3 : 0

    formated = (dec ? n.substr(0, dec) + thousands : '') + n.substr(dec).replace(/(\d{3})(?=\d)/g, '$1' + thousands) + (decimalCount ? decimal + Math.abs(amount - n).toFixed(decimalCount).slice(2) : '')
  } catch (_) {}

  if (formated === '0.00') {
    return 'Free'
  }

  return negativeAmount ? `($${formated})` : `$${formated}`
}