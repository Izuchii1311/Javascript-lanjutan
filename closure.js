// function init () {  
//     // let nama = "Izuchii";           // local variabel
//     // let umur = 20;

//      return function(nama) {         // inner function (closure)
//         console.log(nama);          // akses ke parent variabel
//         // console.log(umur);          // akses ke parent variabel
//     }
//     // console.dir(tampilNama);
// }
// let panggilNama = init();
// panggilNama('Izuchii');
// panggilNama('Izuchii Slebew');




// Function Factories

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu} semoga hari-mu menyenangkan...`);
//     }
// }
// let pagi = ucapkanSalam('pagi');
// let siang = ucapkanSalam('siang');

// pagi("Izuchii");
// siang("Hutao");

// console.dir(siang("Dinda"));



// Contoh Kasus Lain
let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());

