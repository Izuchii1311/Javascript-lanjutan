// 1. Object Literal
// **Kelemahannya adalah object barunya harus dibuat berulang-ulang.
// PROBLEM : Tidak efektif untuk object yang banyak

// let mahasiswa = {
//     nama: "Luthfi Nur Ramadhan",
//     energy: 10,
//     // method adalah function yang ada di dalam obect
//     makan: function(porsi) {
//         // di dalam object ada keyword this
//         this.energy = this.energy + porsi;
//         console.log(`Selamat Makan ${this.nama}!\nEnergy kamu meningkat sebesar ${porsi}%`);
//         return; 
//     }
//     // mahasiswa
//     // mahasiswa.makan(2)
// }



// 2. Function Declaration
// Nama Mahasiswa besar untuk menandakan bahwa ini adalah Object.

const methodMahasiswa = {
    // Method
    makan: function(porsi) {
        this.energy = this.energy + porsi;
        console.log(`Selamat Makan ${this.nama}!\nEnergy kamu meningkat sebesar ${porsi}%`);
    },

    main: function(jam){
        this.energy = this.energy - jam;
        console.log(`Selamat Bermain ${this.nama}!\nEnergy kamu akan berkurang sebesar ${jam}%`);
    },

    tidur: function(jam){
        this.energy = this.energy * jam;
        console.log(`Selamat Tidur ${this.nama}!\nEnergy kamu akan bertambah sebesar ${jam}%`);
    }
};

function Mahasiswa(nama, energy) {
    // let mahasiswa = {};
    // Memanggil parentnya yang berisi method
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

    // memisahkan method menjadi object mahasiswa
    // menghubungkannya dengan object mahasiswa (mengambil object diluar functionnya). 
    // // sekarang dengan cara ini maka akan mengelola 2 object (Object Function Declaration dan Function Literal) dan itu masih kurang efektif
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    // mahasiswa.tidur = methodMahasiswa.tidur;

    // bagaimana agar 3 method diatas itu tahu bahwa itu method mahasiswa ??
    // dengan menggunakan Object.create()

    return mahasiswa;
}

// intansiasi
// **Saat melakukan instansiasi 2 method diatas akan tetap dibuat baik dipakai atau tidaknya.
// **Butuhnya Mahasiswa, Namun ini membuat 2 object 
let Izuchii = Mahasiswa('Izuchii', 10)
let Luthfi = Mahasiswa('Luthfi Nur Ramadhan', 10)

// Izuchii
// Izuchii.makan(3)
// Izuchii.main(2)