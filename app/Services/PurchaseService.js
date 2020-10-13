import { ProxyState } from '../AppState.js'
import Item from '../Models/Item.js';

class PurchaseService {
    // constructor() {
    //     console.log('hello from purchase service');
    // }

    buy(itemName) {
        // ProxyState.items = [...ProxyState.items]
        let items = ProxyState.items
        let itemId = items.findIndex((item) => item.name == itemName)
        if (items[itemId].qty > 0) {
            items[itemId].qty--
        } else {
            console.log("Out of stock");
        }
        
        ProxyState.items = items
    }
}

export const purchaseService = new PurchaseService()