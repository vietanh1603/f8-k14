class Person {
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
class Male extends Person {
    #girlFriend;

    constructor(name, age, girlFriend) {
        super(name, age);
        this.#girlFriend = girlFriend;
    }

    setGirlFriend(girlFriend) {
        this.#girlFriend = girlFriend;
    }

    getGirlFriend() {
        return this.#girlFriend;
    }
    eat() {
        console.log('eat at male');
    }

// tinh da hinh
//     eat() {
//         super.eat();
//         console.log('eat at male');
//     }
}
// const male = new Male();
// male.eat();
class BoyStudent extends Male {}
const duc = new BoyStudent('duc', 22,'quynh' );

console.log(duc);

/* tinh dong goi
them # vao cac ten bien
 */

duc.setAge(42);
duc.setName('vanh');
console.log(duc.getName());
console.log(duc.getAge());
