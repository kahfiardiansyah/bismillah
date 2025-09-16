// data.js

// ===========================================
// == DATABASE UNTUK DAFTAR KAMAR (ROOMS) ==
// ===========================================
const roomData = [
    {
        id: 1,
        title: "Villa St. Tropez, Modern & Mewah",
        price: 1600,
        owner: "Don",
        ownerInitial: "D",
        image: "https://placehold.co/400x500/cccccc/333?text=Villa+St+Tropez",
        description: "Villa modern dengan 3 kamar tidur dan kolam renang pribadi. Terletak di pusat kota dengan akses mudah ke berbagai fasilitas publik. Cocok untuk keluarga atau liburan bersama teman.",
        facilities: ["WiFi Cepat", "AC", "Kolam Renang", "Dapur Lengkap"]
    },
    {
        id: 2,
        title: "Apartemen Interior Minimalis",
        price: 1750,
        owner: "Gabriel",
        ownerInitial: "G",
        image: "https://placehold.co/400x500/dddddd/333?text=Apartment+Interior",
        description: "Apartemen studio dengan desain interior minimalis dan pemandangan kota yang menakjubkan dari lantai 25. Keamanan 24 jam dan fasilitas gym.",
        facilities: ["WiFi Cepat", "AC", "Gym", "Parkir Gratis"]
    },
    {
        id: 3,
        title: "Kamar Hallway Estetik",
        price: 2300,
        owner: "April",
        ownerInitial: "A",
        image: "https://placehold.co/400x500/eeeeee/333?text=Hallway",
        description: "Kamar pribadi di dalam sebuah rumah bersama dengan desain hallway yang sangat estetik dan Instagramable. Dapur dan ruang tamu bersama.",
        facilities: ["WiFi Cepat", "Dapur Bersama"]
    },
    {
        id: 4,
        title: "Rumah Modern Dekat Taman",
        price: 1950,
        owner: "Christian",
        ownerInitial: "C",
        image: "https://placehold.co/400x500/bbbbbb/333?text=Modern+House",
        description: "Sewa satu rumah modern dengan 2 kamar tidur yang terletak persis di sebelah taman kota. Lingkungan yang tenang dan asri, cocok untuk yang suka jogging pagi.",
        facilities: ["AC", "Taman Pribadi", "Parkir Gratis"]
    }
];


// =================================================
// == DATABASE UNTUK TEMAN SEKAMAR (ROOMMATES) ==
// =================================================
const roommateData = [
    {
        id: 101,
        name: "Clara Wijaya",
        age: 24,
        occupation: "Desainer Grafis",
        image: "https://placehold.co/400x400/A2D2FF/white?text=Clara",
        bio: "Saya orang yang rapi dan suka ketenangan. Hobi saya membaca buku dan melukis di akhir pekan. Mencari teman sekamar yang tidak merokok dan bisa diajak menjaga kebersihan bersama."
    },
    {
        id: 102,
        name: "Budi Santoso",
        age: 27,
        occupation: "Software Engineer",
        image: "https://placehold.co/400x400/FFC8DD/white?text=Budi",
        bio: "Saya lebih banyak menghabiskan waktu di kamar untuk bekerja, tapi suka ngobrol santai saat makan malam. Saya punya anjing kecil yang sangat ramah. Mencari teman sekamar yang juga penyayang binatang."
    },
    {
        id: 103,
        name: "Siti Aminah",
        age: 22,
        occupation: "Mahasiswi",
        image: "https://placehold.co/400x400/CDB4DB/white?text=Siti",
        bio: "Saya sedang kuliah semester akhir, jadi butuh lingkungan yang kondusif untuk belajar. Saya suka memasak dan dengan senang hati akan berbagi makanan. Mencari teman sekamar perempuan yang juga mahasiswi."
    }
];
