// // construct function
// function Mahasiswa(nama, energy) {
//     // Object.create() = itu seperti memanggil class lain yang dijadikan sebagai parentnya.
//     // jika menggunakan construct function maka sebenarnya sudah secara otomatis memanggil Object.create()
//     // let this = Object.create(Mahasiswa.prototype);

//     // Sebenernya constructor function itu sudah memiliki parent yaitu prototype.
//     this.nama = nama;
//     this.energy = energy;
// }

// // untuk mengelola method dengan prototype
// Mahasiswa.prototype.makan = function(porsi){
//     this.energy += porsi;
//     return `Selamat Makan, ${this.nama}\nEnergy Kamu bertambah sebesar ${porsi}%`;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energy -= jam;
//     return `Selamat Bermain, ${this.nama}\nEnergy Kamu berkurang sebesar ${jam}%`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energy += jam * 2;
//     return `Selamat Beristirahat, ${this.nama}\nEnergy Kamu dikalikan 2 x ${jam}`;
// }

// let Izuchii = new Mahasiswa('Izuchii', 10);


// Mengubah Code diatas ke dalam Class
class Mahasiswa {
    constructor(nama, energy) {
        this.nama = nama;
        this.energy = energy;
    }

    makan (porsi){
        this.energy += porsi;
        return `Selamat Makan, ${this.nama}\nEnergy Kamu bertambah sebesar ${porsi}%`;
    }

    main (jam){
        this.energy -= jam;
        return `Selamat Bermain, ${this.nama}\nEnergy Kamu berkurang sebesar ${jam}%`;
    }

    tidur (jam){
        this.energy += jam * 2;
        return `Selamat Beristirahat, ${this.nama}\nEnergy Kamu dikalikan 2 x ${jam}`;
    }
}

let Izuchii = new Mahasiswa('Izuchii', 10);