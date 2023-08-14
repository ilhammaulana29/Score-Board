// Ambil nama-nama class team1 menggunakan DOM
const btnIncrementTeam1 = document.querySelector('.incrementTeam1');
const btnDecrementTeam1 = document.querySelector('.decrementTeam1');
const scoreTeam1 = document.querySelector('.scoreTeam1');
let counter1 = 0;

// Buat function untuk increment score team1
btnIncrementTeam1.addEventListener('click',function(){
    counter1++;
    scoreTeam1.innerHTML = `<h1>${counter1}</h1>`;
})

// Buat function untuk decrement score team1
btnDecrementTeam1.addEventListener('click',function(){
    counter1--;
    scoreTeam1.innerHTML = `<h1>${counter1}</h1>`;
})



// Ambil nama-nama class team2 menggunakan DOM
const btnIncrementTeam2 = document.querySelector('.incrementTeam2');
const btnDecrementTeam2 = document.querySelector('.decrementTeam2');
const scoreTeam2 = document.querySelector('.scoreTeam2');
let counter2 = 0;

// Buat function untuk increment score team2
btnIncrementTeam2.addEventListener('click', function(){
    counter2++;
    scoreTeam2.innerHTML = `<h1>${counter2}</h1>`;
})

// Buat function untuk decrement score team2
btnDecrementTeam2.addEventListener('click', function(){
    counter2--;
    scoreTeam2.innerHTML = `<h1>${counter2}</h1>`;
})


// Ambil nama-nama class team2 untuk mengubah nama teamnya
const btnUbahTeam1 = document.querySelector('.ubahTeam1');
const namaTeam1 = document.querySelector('.nama-team1');

// Buat function untuk mengubah namanya
btnUbahTeam1.addEventListener('click', function(){
    let team1 = prompt("Masukan nama Team 1");

    namaTeam1.innerHTML = `<p>${team1}</p>`;
})



// Ambil nama-nama class team2 untuk mengubah nama teamnya
const btnUbahTeam2 = document.querySelector('.ubahTeam2');
const namaTeam2 = document.querySelector('.nama-team2');

// Buat function untuk mengubah namanya
btnUbahTeam2.addEventListener('click', function(){
    let team2 = prompt("Masukan nama Team 2");

    namaTeam2.innerHTML = `<p>${team2}</p>`;
})



const btnMulaiPertandingan = document.querySelector('.btnMulai')

btnMulaiPertandingan.addEventListener('click', function(){
    // Menghitung mundur dalam 1 jam (3600 detik)
    var waktu = prompt('Pilih waktu dalam detik'); // Pilih waktu dalam detik
    var sisaWaktu = document.querySelector('#waktu');

    function waktuTersisa() {
        var jam = Math.floor(waktu / 3600);
        var sisaDetik = waktu % 3600;
        var menit = Math.floor(sisaDetik / 60);
        var detik = sisaDetik % 60;

        // Tampilkan timer dalam format hh:mm:ss atau jam:menit:detik
        var hitungMundur = jam.toString().padStart(2, '0') + ':' + menit.toString().padStart(2, '0') + ':' + detik.toString().padStart(2, '0');
        // maksud dari toString() itu utk merubah nilai jam dari float menjadi string supaya bisa ditambah karakter ':'
        // maksud dari padStrart(2, '0') itu supaya hh:mm:ss tampil dalam 2 karakter, jika kurang dari 2 karakter karakter '0' akan ditampilkan diawal
        // contoh 7 jam karena satu karakter maka akan menjadi 07, ika 12 jam maka akan tammpil 12 karena sudah dua karakter

        sisaWaktu.innerHTML = 'Timer: ' + hitungMundur;

        if (waktu > 0) {
            // Kurangi waktu mundur
            waktu--;
            // Jalankan fungsi update setiap 1 detik
            setTimeout(waktuTersisa, 1000);
        } else {
            // Timer selesai, lakukan tindakan sesuai kebutuhan Anda
            alert('Pertandingan Selesai!');
            playAudio();
        }
    }

    // Panggil function untuk menjalankan waktu
    waktuTersisa();
});

function playAudio() {
    var audio = new Audio('assets/audio/airhorn.mp3'); // isi dengan audio
    audio.play();
}


    
    // dibawah ini gunakan jika tidak menggunakan addevenlistelern click
    // // Memulai timer ketika halaman selesai dimuat
    // window.onload = function () {
    //     waktuTersisa();
    // };


