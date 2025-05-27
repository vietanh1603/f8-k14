import {Male} from "./male.js";

class BoyStudent extends Male {}
const duc = new BoyStudent('duc', 22,'quynh' );

// console.log(duc);

/* tinh dong goi
them # vao cac ten bien
 */
duc.setGirlFriend('vanh');
// duc.setAge(42);
duc.setName('vanh');
// console.log(duc.getName());
// console.log(duc.getAge());
console.log(duc.getGirlFriend(), duc.getName());