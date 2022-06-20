import names from '../mocks/names.json';
import config from '../config';

const { rate, minRate, priceDigitsNumber } = config

const getCurrentRate = () => (minRate + Math.random() * rate)

const convertPrice = price => price * getCurrentRate()

const findGroup = (source, prop) => source[prop]

const findName = (group, item, prop) => group[item][prop]

const prepareData = (data = []) => {
  return data.map(item => {
    const C = convertPrice(item.C).toFixed(priceDigitsNumber)
    const group = findGroup(names, item.G)
    const name = findName(group.B, item.T, 'N')
    return {
      ...item,
      C,
      category: group.G,
      name,
    }
  })
}

const sortData = (data = [])  => {
  const prepared = prepareData(data)
  return prepared.reduce((res, item) => {
    if (res[item.G]) {
      res[item.G].items.push(item)
    } else {
      res[item.G] = {}
      res[item.G].items = []
      res[item.G].category = item.category
      res[item.G].items.push(item)
    }
    return res
  }, {})
}

const checkItem = (item, cart) => {
  return cart.some(el => item.T === el.T && item.G === el.G)
}

const checkCart = (data, cart) => {
  return Object.entries(data).reduce((res, [key, val]) => {
    val.items.forEach(el => {
      if (checkItem(el, cart)) {
        el.inCart = true
      } else {
        el.inCart = false
      }
      return el
    })
    res[key] = val
    return res
  }, {})
}

export {
  sortData,
  checkCart,
  checkItem,
}