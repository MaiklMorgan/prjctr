"use strict";

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("ЛолКек");
    } else if (i % 3 === 0) {
        console.log("Лол");
    } else if (i % 5 === 0) {
        console.log("Кек");
    } else {
        console.log(i);
    }
}

let value = 10;

for (let i = 1; i < value; i++) {
    if(typeof value !== 'number') {
        console.log("Таке чуство шо Бог десь наказує нас за шось");

        break
    } else if (i % 2 === 0) {
        console.log(i);
    }
}

if (typeof value !== 'number') {
    console.log("Таке чуство шо Бог десь наказує нас за шось");
} else {
    let i = 2;

    while (i < value) {
        console.log(i);
        
        i += 2;
    }
}



