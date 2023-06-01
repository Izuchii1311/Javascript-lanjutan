// Cara membuat Object pada Javascript
// 1. Object Literal
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
// Nama Mahasiswa besar untuk menandakan bahwa ini adalah Object
// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     // Method
//     mahasiswa.makan = function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Selamat Makan ${this.nama}!\nEnergy kamu meningkat sebesar ${porsi}%`);
//     }

//     mahasiswa.main = function(jam){
//         this.energy = this.energy - jam;
//         console.log(`Selamat Bermain ${this.nama}!\nEnergy kamu akan berkurang sebesar ${jam}%`);
//     }
//     return mahasiswa;
// }

// // intansiasi
// let Izuchii = Mahasiswa('Izuchii', 10)
// let Luthfi = Mahasiswa('Luthfi Nur Ramadhan', 10)

// // Izuchii
// // Izuchii.makan(3)
// // Izuchii.main(2)



// 3. Constructor Function
// keyword new
function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;

    // Method
    this.makan = function(porsi) {
        this.energy = this.energy + porsi;
        console.log(`Selamat Makan ${this.nama}!\nEnergy kamu meningkat sebesar ${porsi}%`);
    }

    this.main = function(jam){
        this.energy = this.energy - jam;
        console.log(`Selamat Bermain ${this.nama}!\nEnergy kamu akan berkurang sebesar ${jam}%`);
    }
}

let Izuchii = new Mahasiswa('Izuchii', 10);


// Izuchii.makan(2)
// Izuchii.main(2)