export default class Item {
    constructor(name, cost, qty) {
        this.name = name
        this.cost = cost
        this.qty = qty
    }

    get Template() {
        return /*html*/`
            <div class="col-3 border rounded">
                <p id="itemName">${this.name}</p>
                <p class="itemCost">$${this.cost}</p>
                <p class="itemQty">${this.qty} Available</p>
                <button onclick="app.purchaseController.buy(this.name)">Buy</button>
            </div>
            
        `
    }
}