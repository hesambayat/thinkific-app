// JSON storage over localStorage.

export default new Proxy(
  {},
  {
    get: function(_, prop) {
      try {
        const text = localStorage[prop]
        const data = JSON.parse(text)
        return data
      } catch (err) {
        return undefined
      }
    },
    set: function(_, prop, value) {
      const data = JSON.stringify(value)
      localStorage[prop] = data
      return true
    }
  }
)
