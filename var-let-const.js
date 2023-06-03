// var i;                               <- yang sebenarnya terjadi (undefined)
// console.log(i);
// var i = 10;

// for(var i = 0; i < 10; i++) {           // melakukan looping dengan benar dan menampilkan 0 - 9
//     console.log(i);
// }
// console.log(i);                         // namun kita dapat mengakses variabel di dalam looping, yang di dalam bahasa lain itu sebenarnya tidak boleh karena bahasa pemrograman lain menganut block scope.



// console.log(i);             // akan menghasilkan error (let / const) - karena sebaiknya sebelum melakukan sesuatu seharusnya didefinisikan terlebih dahulu
// let i = 10;


// let i = 10;
// i = 15;
// console.log(i);
// // nilai i akan menjadi 15

// const i = 10
// i = 15;
// console.log(i);
// // error karena nilai i tidak bisa diganti dengan nilai i baru