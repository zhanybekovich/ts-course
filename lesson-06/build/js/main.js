"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const John = new Coder("John", "Rock", 25);
console.log(John.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 35);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        (this.name = name), (this.id = ++Peeps.count);
    }
}
Peeps.count = 0;
const Brad = new Peeps("Brad");
const Steve = new Peeps("Steve");
const Bob = new Peeps("Bob");
console.log(Steve.id);
console.log(Bob.id);
console.log(Brad.id);
console.log(Peeps.count);
// getters setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Param is not an arr of str");
        }
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZTOp"];
console.log(MyBands.data);
