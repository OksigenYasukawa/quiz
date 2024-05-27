// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Siapakah web developer dari website ini?",
    answer: "Oksigen MC",
    options: [
      "Kamal",
      "Oksigen MC",
      "ElestialHD",
      "GemmaD"
    ]
  },
    {
    numb: 2,
    question: "Siapakah pengkhianat diantara ini?",
    answer: "Ren",
    options: [
      "Genah",
      "Marvel",
      "Ren",
      "Samsul"
    ]
  },
    {
    numb: 3,
    question: "Lebih Tepatnya, kenapa Steve berubah menjadi Herobrine?",
    answer: "Terkena Asap Hitam",
    options: [
      "Tidak Dengar Nasihat Ibunya",
      "Terkena Asap Hitam",
      "Menemukan Emas",
      "Diajak oleh Notch"
    ]
  },
    {
    numb: 4,
    question: "Mengapa Gizan bisa bertemu dengan Dazzan?",
    answer: "Tidak Sengaja Memasuki Rumahnya",
    options: [
      "Tidak Sengaja Memasuki Rumahnya",
      "Diselamatkan Dazzan Dari Tenggelam",
      "Mememiliki Hubungan Keluarga",
      "Wasiat Dari Ayahnya"
    ]
  },
    {
    numb: 5,
    question: "Kenapa Ratu GM Membuat Seseorang Lupa Ingatan?",
    answer: "Memakai Fantasia Listrik",
    options: [
      "Memakai Fantasia Listrik",
      "Menggunakan Orbit Histeria",
      "YNTKTS",
      "Amnesia Turun-temurun"
    ]
  },
    {
    numb: 6,
    question: "Barang Jualan Bang Windah adalah..",
    answer: "Ayam Goreng Kematian",
    options: [
      "Sulap Adik-adik",
      "Teori Jualan Orbit Histeria",
      "Bukan Jualan Tapi Cosplayer..",
      "Ayam Goreng Kematian"
    ]
  },
    {
    numb: 7,
    question: "Bersembunyi Di Balik Matahari, Lanjutan Dari Teks Tersebut Adalah?",
    answer: "Sebuah Akar Bermata Hijau Bersiap Untuk Tumbuh",
    options: [
      "Akan Dunia Yang Dirundung Awan Gelap",
      "Melahirkan Sebuah Harapan",
      "Sebuah Akar Bermata Hijau Bersiap Untuk Tumbuh",
      "Terbitkanlah Matahari"
    ]
  },  
    {
    numb: 8,
    question: "Apa Reaksi Pertama Ayon Bertemu Yama?",
    answer: "Memenjarakannya",
    options: [
      "Membuangnya Kembali Ke Lautan",
      "Jadi Makanan Hiu Ayon",
      "Mengobrol Mengenai Herobrine",
      "Memenjarakannya"
    ]
  },
    {
    numb: 9,
    question: "Apa Adegan Setelah Genah Bercerita Tentang Ksatria Legenda",
    answer: "Lomba Elytra",
    options: [
      "Latihan Fantasia/Sihir",
      "Memasak Sup Daging",
      "Lomba Elytra",
      "Berburu Sapi"
    ]
  },
    {
    numb: 10,
    question: "Berapakah Jumlah Pedang Diamond Saat Melawan Herobrine?",
    answer: "2",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
    {
    numb: 11,
    question: "Kenapa Peppey Bisa Tahu Sihir Api Hitam?",
    answer: "Membaca Buku Di Perpustakaan",
    options: [
      "Membaca Buku Di Perpustakaan",
      "Mendengar Pembicaraan Herobrine",
      "Ingatan Lama Yang Kembali",
      "Merasakan Potensi Api Hitam"
    ]
  },
    {
    numb: 12,
    question: "Batu Yang Ada Di Kalung Marvel Adalah ...",
    answer: "Emerald",
    options: [
      "Purpur",
      "Ruby",
      "Emerald",
      "Eye Of Ender"
    ]
  },
    {
    numb: 13,
    question: "Apa Jenis Sihir Pak GM?",
    answer: "Elemental",
    options: [
      "Aura",
      "Elemental",
      "Chaos",
      "Spirit"
    ]
  },
    {
    numb: 14,
    question: "Siapa Pemilik Jenis Sihir Chaos Yang Terakhir?",
    answer: "Herobrine",
    options: [
      "Marvel",
      "Spade",
      "Herobrine",
      "Notch"
    ]
  },
    {
    numb: 15,
    question: "Apa Jenis Sihir Elemental Marvel?",
    answer: "Kegelapan",
    options: [
      "Cahaya",
      "Api",
      "Listrik",
      "Kegelapan"
    ]
  },
    {
    numb: 16,
    question: "Siapakah Nevin Itu?",
    answer: "Ahli Bela Diri",
    options: [
      "Pelayan Elheims",
      "Ahli Bela Diri",
      "Guru Ayon",
      "Teman Raja GM"
    ]
  },
    {
    numb: 17,
    question: "Sihir Apa Yang Peppey Mau Pelajari Dari Herobrine?",
    answer: "Api Hitam",
    options: [
      "Api Biru",
      "Kegelapan",
      "Api Hitam",
      "Api Merah"
    ]
  },
    {
    numb: 18,
    question: "Berapa Kali Nevin Memenangkan Sparing Bersama Ayon?",
    answer: "77",
    options: [
      "118",
      "76",
      "77",
      "87"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];