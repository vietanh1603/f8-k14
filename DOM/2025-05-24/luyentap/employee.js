export class Employee {
    #id;
    #name;
    #address;

  constructor(id,name,address) {
      this.#id = id
      this.#name = name
      this.#address = address
  }
  getId() {
      return this.#id;
  }
  setName(name) {
      this.#name = name;
  }
  getName() {
      return this.#name;
  }
  setAddress(address) {
      this.#address = address;
  }
  getAddress() {
      return this.#address;
  }
  toString() {
      return `Employee(id = ${this.#id}, name = ${this.#name}, address = ${this.#address})`;
  }
}