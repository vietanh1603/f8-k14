import {Base} from "./base.js";

export class Product extends Base{
    #price

    constructor(id, name, price) {
        super(id, name)
        this.#price = price
    }

    getPrice() {
        return this.#price
    }

    setPrice(price) {
        this.#price = price
    }

    toString() {
        return `Product(id = ${this.getId()}, name = ${this.getName()}, price = ${this.#price})`
    }
}