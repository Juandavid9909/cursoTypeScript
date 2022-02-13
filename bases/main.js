"use strict";
(() => {
    ;
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"]
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super velocidad"],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    ;
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
    }
})();
(() => {
    ;
    ;
    const client = {
        name: "Juan David",
        age: 22,
        address: {
            id: 125,
            zip: "KY2 SUD",
            city: "Ottawa"
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: "Fernando",
        age: 30,
        address: {
            city: "Toronto",
            id: 120,
            zip: "K2S U23"
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    ;
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map