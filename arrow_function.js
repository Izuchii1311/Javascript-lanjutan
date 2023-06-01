// Function Exspression
// const tampilNama = function(nama) {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama("Izuchii"));




// Arrow function
// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama("Izuchii"));


// 1 parameter dan isi dari function hanya return saja (sama seperti code diatas) (Implisit Return)
// const tampilNama = nama => `Halo, ${nama}`
// console.log(tampilNama("Izuchii"));  


// 2 parameter
// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`
// }

// console.log(tampilNama("Izuchii", "Pagi"));



// Contoh Lain
// Map : memetakkn sebuah function ke dalam array

// let mahasiswa = ["Izuchii", "Hutao", "Hertaa"];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// })
// console.log(jumlahHuruf)


// Contoh Lain darii Arrow Function 
// Mengembalikkan dalam bentuk Array
// let mahasiswa = ["Izuchii", "Hutao", "Hertaa"];
// let jumlahHuruf = mahasiswa.map(nama => nama.length)

// console.log(jumlahHuruf);  


// Mengembalikkan dalam bentuk Object
let mahasiswa = ["Izuchii", "Hutao", "Hertaa"];
let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jumlahHuruf: nama.length}))

console.table(jumlahHuruf);