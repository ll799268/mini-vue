const defaultTagRE = /\{\{(.+?)\}\}/g

class MyVue {
  constructor (options) {
    this._data = options.data()
    this.parentNode = document.getElementById('app')

    this.init()
  }

  init () {
    this.initDom()
    this.domBind()
    this.observer()
  }

  domBind () {
    const dom = this.parentNode.getElementsByTagName('input')
    for (let i = 0; i< dom.length; i++) {
      const attrKey = dom[i].getAttribute('v-model').match(defaultTagRE)
      console.log(attrKey)
    }
  }

  initDom () {
    const dom = this.parentNode.getElementsByTagName('input')
    for (let i = 0; i< dom.length; i++) {
      const attrKey = dom[i].getAttribute('v-model').match(defaultTagRE)
    }
  }

  observer () {
    for (const key in this._data) {
      Object.defineProperty(this._data, key, {
        get () {
          return this._data[key]
        },
        set (newValue) {
          return newValue
        }
      })
    }
  }
}