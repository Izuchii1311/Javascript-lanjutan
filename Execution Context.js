// 2.1 Execution Context

// console.log(nama);
// var nama = "Izuchii";    // undefined

// Saat program diatas dijalankan

// Creation Phase pada Global Context
// akan mengecek apakah ada var atau function di dalam codenya ??

// jika ada maka si js akan membuat nama variabel dan diisi dengan undefined
// lalu jika ada function itu akan diisi function itu sendiri
// hoisting

// jadi yang pertama kali akan di cek itu function dan var pada fase Creation


// selain itu ada juga yang di definisikan oleh JavaScript
// window = global object
// this = window


// Execution Phase


// var nama = "Izuchii";
// var umur = 20;

// console.log(sayHello());    

// function sayHello(){
//     return `Halo, nama saya ${nama} umur saya ${umur} tahun`;
// }

// function membuat local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// argumrnts
// hoisting



// Contoh Kasus 1
// var nama = "Izuchii";
// var username = "izuchii13";

// function cetakUrl() {
//     console.log(arguments);
//     var instagramUrl = "http://instagram.com/";
//     return instagramUrl + username;
// }

// console.log(cetakUrl('luthfi'));



// Contoh Kasus 2
// function a(){
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();


// Latihan 3
function satu(){
    var nama = "Izuchii";
    console.log(nama);
}

function dua() {
    // jika ada nama yang masuk kesini maka akan dianggap arguments[0] bukan nama.
    // si console log akan mencari var nama diluar function
    console.log(nama);
}

console.log(nama);
var nama = 'Luthfi';
satu();
dua('Hutao');
console.log(nama);