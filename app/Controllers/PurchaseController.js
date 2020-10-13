import { ProxyState } from "../AppState.js"
import { purchaseService } from "../Services/PurchaseService.js"


//private

function _draw() {
    let items = ProxyState.items
    let template = ''
    items.forEach(i => template += i.Template)
    document.getElementById('item').innerHTML = /*html*/
        `
        ${template}
        `  
}


// function buyFromController() {
//     console.log('buy item from controller!')
// }


//public

export default class PurchaseController {
    constructor() {
        // console.log('hello from purchase controller');
        ProxyState.on("items", _draw)
        // ProxyState.on('items', buyFromController)
        _draw()
    }

    buy(item) {
        console.log('buying:', item);
        purchaseService.buy(item)
    }
}