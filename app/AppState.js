import Item from "./Models/Item.js"
import Value  from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  // /** @type { Item } */
  //   item = new Item()

/** @type {Item[]} */
  items = [new Item("Doritos", 1.00, 7), new Item("Cookies", 1.50, 4), new Item("Coke", 1.00, 5), new Item("Pepsi", 1.00, 8)]
}



export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
