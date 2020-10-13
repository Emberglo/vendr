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
        console.log(itemId);
        items[itemId].qty--
        ProxyState.items = items
    }
}

export const purchaseService = new PurchaseService()