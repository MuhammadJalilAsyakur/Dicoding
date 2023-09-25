// console.log("Bangsdd kau");
// console.log("OKAwokaok");

// const coffeStock = require('./state');

// console.log(coffeStock)

// const makeCoffe =(type,miligrams) => {
//     if (coffeStock[type] >= miligrams){
//         console.log("Kopi berhasil dibuat");
//     } else {
//         console.log("biji kopi habis");
//     }
// }


// makeCoffe("arabica",300);

// import {coffeStock, isCoffeMachineReady} from "./state.js";

// const displayStock = stock => {
//     for(const type in stock){
//         console.log(type);
//     }
// }

// console.log(isCoffeMachineReady);
// displayStock(coffeStock);
import tiger from './tiger.js';
import Wolf from './wolf.js';

const fight = (tiger, Wolf) => {
    if (tiger.strength > Wolf.strength) {
        return tiger.growl();
    }
    if (Wolf.strength > tiger.strength) {
        return Wolf.howl();
    }
    return 'Harimau dan serigala sama-sama kuat!';
};

const myTiger = new tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);
console.log(result);
// TODO 4
export default { fight, myTiger, myWolf, result };
