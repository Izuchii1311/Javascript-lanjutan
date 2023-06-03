// Konsep this pada Arrow Function

// Constructor Function (cara membuat Object)
// Function Exspression


// Jika this di dalam Constructor Function itu akan mengacu kepada object-nya yaitu Mahasiswa
// const Mahasiswa = function() {
//     this.nama = 'Izuchii';
//     this.umur = 20;

//     // method
//     this.sayHello = function(){
//         console.log(`Halo nama saya ${this.nama} dan umur saya ${this.umur} tahun.`);
//     }
// }

// const Izuchii = new Mahasiswa();
// console.log(Izuchii.sayHello());




// Mengubah code Construct Function menjadi Arrow Function - Tidak ada perbedaan dengan construct function

// const Mahasiswa = function() {
//     this.nama = 'Izuchii';
//     this.umur = 20;

//     // method dengan arrow function
//     // arrow function sebetulnya tidak menyimpan context this.
//     this.sayHello = () => {
//         console.log(`Halo nama saya ${this.nama} dan umur saya ${this.umur} tahun.`);
//     }
// }

// const Izuchii = new Mahasiswa();
// console.log(Izuchii.sayHello());




// Object Literal
// const mhs1 = {
//     nama: "Izuchii",
//     umur: 20,
//     // akan memanggil nama di lingkup scope mhs1
//     // sayHello: function(){
//     //             console.log(`Halo nama saya ${this.nama} dan umur saya ${this.umur} tahun.`);
//     //         }

//     sayHello: () => {
//         // karena arrow function tidak memiliki this maka di lingkup scopenyya jika tidak ada this akan err.
//         console.log(`Halo nama saya ${this.nama} dan umur saya ${this.umur} tahun.`);
//     }
// }

// console.log(mhs1.sayHello());






// Contoh Kasus

// Function Exspression
// const Mahasiswa = function() {
//     this.nama = 'Izuchii';
//     this.umur = 20;

//     // method (function exspression (disimpan dahulu ke dalam variabel dan tidak akan terkena hoisting / mengecek ke global))
//     this.sayHello = function(){
//         console.log(`Halo nama saya ${this.nama} dan umur saya ${this.umur} tahun.`);
//     }

//     // function setInerval yang otomatis akan dijalankan di interval tertentu.
//     // artinya jalankan function ini dalam setiap 500 sec.
//     // misalkan setiap 500 sec umurnya bertambah 1.

//     // funcion Declaration - akan terkena hoisting yang membuat functionnya naik ke atas / didahulukan.
//     // jadi jika di dalam function ini this umur tidak ada maka akan mencarinya di global.
//     // setInterval(function() {
//     //     console.log(this);
//     // }, 500)

//     // untuk mengatasinya dengan arrow function
//     // arrow function tidak memiliki konsep this.
//     // karena tidak ada konsep this, maka thisnya akan mencari ke lexical scope (variabel dalam lingkup suatu fungsi)
//     setInterval( () => {
//         console.log(this.umur++);
//     }, 1000)
// }

// const Izuchii = new Mahasiswa();
// console.log(Izuchii.sayHello());









// Contoh Kasus Sebenarnya

// Mengambil element kotak dengan DOM Selection
const box = document.querySelector('.box');
box.addEventListener('click', function() {
    // jika di klik lagi maka yang akan dihapus dahulu si size, ini untuk mengakalinya.
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    // let that = this;
    // untuk mengelola daftar class pada elemetnnya
    // toggle() => akan menambahkan class baru jika belum ada / menghilangkan class jika ada
    this.classList.toggle(satu)

    // menunggu beberapa detik lalu jalankan sebuah function
    // namun ini akan hoisting karena oleh itu dapat diakali dengan memberikan variabel agar dapat menangkap datanya    
    // namun sekarang ada arrow function
    setTimeout(() => {
        this.classList.toggle(dua)
    }, 600);
});