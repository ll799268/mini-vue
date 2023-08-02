const defaultTagRE = /\{\{(.+?)\}\}/g

class MyVue {
  constructor(options) {
    // 内部的数据使用下划线开头，只读数据使用$开头
    this._data = options.data
    this.$el = document.getElementById('app')
    this.init()
  }

  init() {
    this.render()
    this.observer()
  }

  render() {
    this.compiler(this.$el, this._data)
  }

  compiler(template, data) {
    const childNodes = template.childNodes

    for (let i = 0; i < childNodes.length; i++) {
      const type = childNodes[i].nodeType

      if (type === 3) {
        let value = childNodes[i].nodeValue
        value = value.replace(defaultTagRE, (_, g) => {
          return data[g.trim()]
        })
        childNodes[i].nodeValue = value
      } else if (type === 1) {
        this.compiler(childNodes[i], this._data)
      }
    }
  }

  observer() {
    for (let key in this._data) {
      let initVal = this._data[key]
      Object.defineProperty(this._data, key, {
        get() {
          console.log(key);
          return initVal
        },
        set(newValue) {
          console.log('设置');
          newValue = initVal;
        }
      })
    }
  }
}