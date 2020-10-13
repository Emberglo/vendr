import { ProxyState } from "../AppState.js"
import { purchaseService } from "../Services/PurchaseService.js"

//private

function _draw() {
    let item = ProxyState.item
    document.getElementById('item').innerHTML = /*html*/ 
        `<div class="col-3 border rounded">
            <p id="itemName">${item.name}</p>
            <p class="itemCost">${item.cost}</p>
            <button onclick="buy()">Buy</button>
        </div>`
}


function buyFromController() {
    console.log('buy item from controller!')
}


//public

export default class PurchaseController {
    constructor() {
        console.log('hello from purchase controller');
        ProxyState.on("item", _draw)
        ProxyState.on('item', buyFromController)
        _draw()
    }
}