export class Person {
    #name;
    #age;
    // girlFriend;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    setName(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
    setAge(age) {
        this.#age = age;
    }
    getAge() {
        return this.#age;
    }

    eat() {
        console.log('eat at person');
    }
}