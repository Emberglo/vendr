import { ProxyState } from '../AppState.js'

class PurchaseService {
    constructor() {
        console.log('hello from purchase service');
    }
}

export const purchaseService = new PurchaseService()