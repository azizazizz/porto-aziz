export const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'id', label: 'ID', name: 'Bahasa Indonesia' },
]

export const DEFAULT_LANGUAGE = 'en'

export const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      work: 'Work',
      experience: 'Experience',
      certificates: 'Certificates',
      contact: 'Contact',
      cta: 'Say hi',
      home: 'Back to top',
    },
    theme: {
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
    },
    language: {
      switch: 'Switch language',
    },
    hero: {
      status: 'Fresh graduate',
      roles: ['Web Developer.'],
      bio: 'I build web applications end to end, from the database schema to the very last pixel. Informatics graduate who cares as much about logic that holds up as about interfaces people genuinely enjoy using.',
      location: 'Bekasi, Indonesia',
      availability: 'Available to start immediately',
      stats: [
        { value: '3.69', label: 'GPA / 4.00' },
        { value: 'Top 10%', label: 'Coding Camp 2025' },
      ],
      projectsShipped: 'Projects shipped',
      ctaWork: 'View my work',
      ctaContact: 'Get in touch',
    },
    about: {
      title: 'About Me',
      subtitle: "Who's behind the code",
      lead: 'Tidy UI components only stand up on a tidy architecture underneath. I work on both, and judge the result by one thing: whether it feels effortless to the person using it.',
      p1: "I'm an Informatics graduate on the Software Development track, focused on front-end web development. I work in the JavaScript ecosystem, Vue.js in particular, alongside Tailwind CSS to build tidy UI components, backed by a foundation in system architecture with PHP and CodeIgniter.",
      p2: "I'm used to turning API integrations into interfaces that are responsive and accessible. I took my B.Sc. in Informatics at Bhayangkara Jakarta Raya University (2022–2026) with a 3.69 GPA; my thesis was a web-based student records archive built for a real elementary school, and it went into daily use there.",
      p3: 'I keep pushing the technical side forward, including hands-on work in the React.js ecosystem and modern tooling such as Vite, so that shipping quality digital products centred on the people using them stays part of my routine.',
      stackLabel: 'Technologies I work with often:',
      cv: 'View my CV',
    },
    skills: {
      title: 'Skills',
      subtitle: 'The tools I reach for',
      groups: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        mobile: 'Mobile',
        tools: 'Tools & Other',
      },
      items: {
        security: 'Cybersecurity Fundamentals',
      },
    },
    projects: {
      title: 'Selected Work',
      subtitle: "Things I've actually shipped",
      view: 'View Project',
      items: {
        'sapu-jagat': {
          name: 'Sapu Jagat',
          description:
            'Full-stack web app built as the capstone project for Coding Camp 2025 powered by DBS Foundation: a dynamic client, an efficient server, and an integrated Machine Learning API.',
        },
        'share-story': {
          name: 'DStory',
          description:
            'Progressive Web App built for the Web Development Intermediate course at Dicoding Indonesia: installable, works offline via IndexedDB, and layers in push notifications, live camera capture, and interactive Leaflet.js maps.',
        },
        'ukm-inventory': {
          name: 'Smart Toko',
          description:
            'Mobile app for small-business (UKM) store management, built from scratch with real-time inventory tracking, sales transaction recording, and a streamlined point-of-sale checkout module.',
        },
        'school-archive': {
          name: 'School Records Archive System',
          description:
            "Undergraduate thesis project: a web-based student records archive system built on CodeIgniter and PHP for an elementary school, using a Boyer-Moore string-search algorithm for fast, accurate record lookups, and deployed locally on the school's own PC.",
        },
        'iot-balance': {
          name: 'IoT Balance Management System',
          description:
            'IoT architecture built from scratch with RFID and Arduino integration, implementing balance management logic in C and validated through real-time data communication testing between the RFID reader and microcontroller.',
        },
        'game-board': {
          name: 'Game Board',
          description:
            'A side project for learning React.js: six classic board games in one app, Tic-Tac-Toe, Connect Four, Othello, Minesweeper, Sudoku, and Chess, wrapped in a single printed-paper look: warm paper, dark ink, no gradients or shadows.',
        },
      },
    },
    experience: {
      title: 'Experience',
      subtitle: 'How I got here',
      items: {
        'coding-camp': {
          title: 'Front-End & Back-End Developer',
          company: 'Coding Camp 2025 powered by DBS Foundation',
          date: 'Feb–Jul 2025',
          highlights: [
            'Applied web development knowledge end to end, from HTML, CSS, and JavaScript fundamentals through to more complex architectural concepts.',
            'Took an active part in collaboratively building a full-stack web-based final project.',
            'Distinction Graduate (top 10% of every Learning Path).',
          ],
        },
        infradigital: {
          title: 'Ready4AI & Security Training',
          company: 'InfraDigital Foundation',
          date: 'Feb–Aug 2024',
          highlights: [
            'Completed comprehensive cybersecurity training delivered by Microsoft via InfraDigital Foundation',
            'Studied cybersecurity fundamentals, threat landscapes, and mitigation techniques',
            'Explored best practices in data privacy protection and access management to prevent vulnerabilities in information systems',
          ],
        },
      },
    },
    certificates: {
      title: 'Certificates',
      subtitle: 'Proof of the work',
      empty: 'Certificates are on their way; this shelf is being filled in.',
      hint: 'Drag or scroll to browse',
      prev: 'Previous certificate',
      next: 'Next certificate',
      preview: 'Certificate preview',
      items: {
        '01-coding-camp-2025': {
          title: 'Coding Camp 2025: Distinction Graduate',
          issuer: 'DBS Foundation × Dicoding · Jul 2025',
        },
        '02-dasar-ai': {
          title: 'AI Fundamentals',
          issuer: 'Dicoding Indonesia · Dec 2025',
        },
        '03-backend-javascript': {
          title: 'Back-End Basics with JavaScript',
          issuer: 'Dicoding Indonesia · May 2025',
        },
        '04-web-intermediate': {
          title: 'Intermediate Web Development',
          issuer: 'Dicoding Indonesia · May 2025',
        },
        '05-frontend-fundamental': {
          title: 'Front-End Web Development Fundamentals',
          issuer: 'Dicoding Indonesia · Apr 2025',
        },
        '06-frontend-pemula': {
          title: 'Front-End Web Development for Beginners',
          issuer: 'Dicoding Indonesia · Mar 2025',
        },
        '07-javascript-dasar': {
          title: 'JavaScript Programming Basics',
          issuer: 'Dicoding Indonesia · Mar 2025',
        },
        '08-web-dasar': {
          title: 'Web Programming Basics',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '09-git-github': {
          title: 'Git Basics with GitHub',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '10-logika-pemrograman': {
          title: 'Introduction to Programming Logic',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '11-dasar-pemrograman': {
          title: 'Programming Basics for Aspiring Software Developers',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '12-uiux-kemnaker': {
          title: 'Talent & Innovation Hub: UI/UX Design Fundamentals',
          issuer: 'Indonesian Ministry of Manpower · Jul 2026',
        },
        '13-ready4ai-security': {
          title: 'Ready4AI & Security Training',
          issuer: 'InfraDigital Foundation × Microsoft · Aug 2024',
        },
        '14-frontend-engineer-kemnaker': {
          title: 'Talent & Innovation Hub: A Day in the Life of a Front End Engineer',
          issuer: 'Indonesian Ministry of Manpower · Aug 2026',
        },
      },
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's talk",
      heading: "Let's build something together.",
      text: "I'm currently open to new opportunities: internships, junior developer roles, or freelance projects. Whether you have a role in mind, an idea you want built, or just want to talk shop, my inbox is always open and I read every message.",
    },
    modal: {
      close: 'Close',
      prev: 'Previous screenshot',
      next: 'Next screenshot',
      goTo: 'Go to screenshot',
      screenshot: 'screenshot',
      comingSoon: 'Screenshots coming soon',
      demo: 'Live demo',
      repo: 'Source code',
    },
    privacy: {
      title: 'Privacy',
      back: 'Back to the portfolio',
      updated: 'Last updated: September 2026',
      body: [
        'This site collects nothing about you. There is no analytics, no tracking pixel, no advertising network, and no cookie is written by this site.',
        'There is no form here. The contact link opens your own email client; nothing is submitted to a server owned by me, and no message you write is stored anywhere on this site.',
        'Your language and theme choices are kept in your browser using localStorage. That data never leaves your device and I have no way of reading it.',
        'The one third-party request the page makes is to Google Fonts, which serves the typefaces. Google receives your IP address as part of that request, as it does for any resource loaded from its servers. If you would rather avoid it, a content blocker will stop the request and the site falls back to a system typeface.',
        'The site is served as static files. There are no accounts, no databases, and no logs I control.',
      ],
      contactLabel: 'Questions about this page:',
    },
  },

  id: {
    nav: {
      about: 'Tentang',
      skills: 'Keahlian',
      work: 'Karya',
      experience: 'Pengalaman',
      certificates: 'Sertifikat',
      contact: 'Kontak',
      cta: 'Sapa saya',
      home: 'Kembali ke atas',
    },
    theme: {
      toLight: 'Ganti ke tema terang',
      toDark: 'Ganti ke tema gelap',
    },
    language: {
      switch: 'Ganti bahasa',
    },
    hero: {
      status: 'Fresh graduate',
      roles: ['Web Developer.'],
      bio: 'Saya membangun aplikasi web dari hulu ke hilir, dari skema database sampai piksel terakhir. Lulusan Informatika yang sama peduli pada logika yang kokoh dan antarmuka yang benar-benar nyaman dipakai.',
      location: 'Bekasi, Indonesia',
      availability: 'Bersedia bekerja secepatnya',
      stats: [
        { value: '3,69', label: 'IPK / 4,00' },
        { value: 'Top 10%', label: 'Coding Camp 2025' },
      ],
      projectsShipped: 'Proyek rampung',
      ctaWork: 'Lihat karya saya',
      ctaContact: 'Hubungi saya',
    },
    about: {
      title: 'Tentang Saya',
      subtitle: 'Siapa di balik kodenya',
      lead: 'Komponen UI yang rapi hanya bisa berdiri di atas arsitektur yang rapi juga. Saya mengerjakan keduanya, dan menilai hasilnya dari satu hal: nyaman atau tidak bagi orang yang memakainya.',
      p1: 'Lulusan S1 Informatika dengan spesialisasi Software Development yang berfokus pada pengembangan Front-End Web. Saya memanfaatkan ekosistem JavaScript, terutama Vue.js, bersama Tailwind CSS untuk membangun komponen UI yang rapi, didukung fondasi arsitektur sistem menggunakan PHP dan CodeIgniter.',
      p2: 'Saya terbiasa merancang integrasi API menjadi antarmuka yang responsif dan aksesibel. Pendidikan S1 Informatika saya tempuh di Universitas Bhayangkara Jakarta Raya (2022–2026) dengan IPK 3,69; skripsi saya berupa sistem arsip data siswa berbasis web yang dibangun untuk sekolah dasar sungguhan, dan dipakai dalam keseharian mereka.',
      p3: 'Saya individu yang terus-menerus meningkatkan kemampuan teknis, termasuk implementasi praktis pada ekosistem React.js dan modern tooling seperti Vite, untuk secara rutin menghasilkan produk digital berkualitas yang berpusat pada kenyamanan pengguna.',
      stackLabel: 'Teknologi yang sering saya pakai:',
      cv: 'Lihat CV saya',
    },
    skills: {
      title: 'Keahlian',
      subtitle: 'Perkakas yang saya andalkan',
      groups: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Basis Data',
        mobile: 'Mobile',
        tools: 'Perkakas & Lainnya',
      },
      items: {
        security: 'Dasar Keamanan Siber',
      },
    },
    projects: {
      title: 'Karya Pilihan',
      subtitle: 'Yang benar-benar saya kerjakan',
      view: 'Lihat Proyek',
      items: {
        'sapu-jagat': {
          name: 'Sapu Jagat',
          description:
            'Aplikasi web full-stack sebagai proyek akhir Coding Camp 2025 powered by DBS Foundation: sisi klien yang dinamis, server yang efisien, dan integrasi API Machine Learning.',
        },
        'share-story': {
          name: 'DStory',
          description:
            'Progressive Web App yang dibangun untuk kelas Pengembangan Web Intermediate di Dicoding Indonesia: dapat diinstal, berjalan offline lewat IndexedDB, dilengkapi push notification, akses kamera langsung, dan peta interaktif dengan Leaflet.js.',
        },
        'ukm-inventory': {
          name: 'Smart Toko',
          description:
            'Aplikasi mobile manajemen toko untuk UKM, dibangun dari nol dengan pencatatan stok secara real-time, pencatatan transaksi penjualan, dan modul kasir (POS) yang efisien untuk proses checkout.',
        },
        'school-archive': {
          name: 'Sistem Arsip Data Siswa',
          description:
            'Proyek skripsi: sistem arsip data siswa berbasis web dibangun dengan CodeIgniter dan PHP untuk sekolah dasar, menggunakan algoritma pencarian string Boyer-Moore agar pencarian data siswa cepat dan akurat, di-deploy secara lokal pada PC sekolah.',
        },
        'iot-balance': {
          name: 'Sistem Manajemen Saldo IoT',
          description:
            'Arsitektur IoT yang dibangun dari nol dengan integrasi RFID dan Arduino, mengimplementasikan logika manajemen saldo dalam bahasa C dan divalidasi lewat pengujian komunikasi data real-time antara pembaca RFID dan mikrokontroler.',
        },
        'game-board': {
          name: 'Game Board',
          description:
            'Proyek iseng untuk belajar React.js: enam papan permainan klasik dalam satu aplikasi, Tic-Tac-Toe, Connect Four, Othello, Minesweeper, Sudoku, dan Catur, dibungkus dalam satu tampilan bergaya kertas cetak: kertas hangat, tinta gelap, tanpa gradien atau bayangan.',
        },
      },
    },
    experience: {
      title: 'Pengalaman',
      subtitle: 'Bagaimana saya sampai di sini',
      items: {
        'coding-camp': {
          title: 'Front-End & Back-End Developer',
          company: 'Coding Camp 2025 powered by DBS Foundation',
          date: 'Feb–Jul 2025',
          highlights: [
            'Menerapkan pengetahuan pengembangan web secara end-to-end, mulai dari fundamental HTML, CSS, dan JavaScript hingga konsep arsitektur yang lebih kompleks.',
            'Berpartisipasi aktif dalam pengembangan proyek akhir berbasis web full-stack secara kolaboratif.',
            'Distinction Graduate (10% teratas dari setiap Jalur Pembelajaran).',
          ],
        },
        infradigital: {
          title: 'Pelatihan Ready4AI & Security',
          company: 'InfraDigital Foundation',
          date: 'Feb–Agu 2024',
          highlights: [
            'Menyelesaikan pelatihan keamanan siber menyeluruh dari Microsoft melalui InfraDigital Foundation',
            'Mempelajari dasar keamanan siber, lanskap ancaman, dan teknik mitigasinya',
            'Mengeksplorasi praktik terbaik dalam perlindungan privasi data dan manajemen akses untuk mencegah kerentanan pada sistem informasi',
          ],
        },
      },
    },
    certificates: {
      title: 'Sertifikat',
      subtitle: 'Bukti dari perjalanannya',
      empty: 'Sertifikat sedang disiapkan; rak ini akan segera terisi.',
      hint: 'Geser atau gulir untuk menelusuri',
      prev: 'Sertifikat sebelumnya',
      next: 'Sertifikat berikutnya',
      preview: 'Pratinjau sertifikat',
      items: {
        '01-coding-camp-2025': {
          title: 'Coding Camp 2025: Distinction Graduate',
          issuer: 'DBS Foundation × Dicoding · Jul 2025',
        },
        '02-dasar-ai': {
          title: 'Belajar Dasar AI',
          issuer: 'Dicoding Indonesia · Des 2025',
        },
        '03-backend-javascript': {
          title: 'Belajar Back-End Pemula dengan JavaScript',
          issuer: 'Dicoding Indonesia · Mei 2025',
        },
        '04-web-intermediate': {
          title: 'Belajar Pengembangan Web Intermediate',
          issuer: 'Dicoding Indonesia · Mei 2025',
        },
        '05-frontend-fundamental': {
          title: 'Belajar Fundamental Front-End Web Development',
          issuer: 'Dicoding Indonesia · Apr 2025',
        },
        '06-frontend-pemula': {
          title: 'Belajar Membuat Front-End Web untuk Pemula',
          issuer: 'Dicoding Indonesia · Mar 2025',
        },
        '07-javascript-dasar': {
          title: 'Belajar Dasar Pemrograman JavaScript',
          issuer: 'Dicoding Indonesia · Mar 2025',
        },
        '08-web-dasar': {
          title: 'Belajar Dasar Pemrograman Web',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '09-git-github': {
          title: 'Belajar Dasar Git dengan GitHub',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '10-logika-pemrograman': {
          title: 'Pengenalan ke Logika Pemrograman',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '11-dasar-pemrograman': {
          title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '12-uiux-kemnaker': {
          title: 'Talent & Innovation Hub: Fundamental UI/UX Design',
          issuer: 'Kementerian Ketenagakerjaan RI · Jul 2026',
        },
        '13-ready4ai-security': {
          title: 'Pelatihan Ready4AI & Security',
          issuer: 'InfraDigital Foundation × Microsoft · Agu 2024',
        },
        '14-frontend-engineer-kemnaker': {
          title: 'Talent & Innovation Hub: A Day in Life of a Front End Engineer',
          issuer: 'Kementerian Ketenagakerjaan RI · Agu 2026',
        },
      },
    },
    contact: {
      title: 'Kontak',
      subtitle: 'Mari mengobrol',
      heading: 'Mari bangun sesuatu bersama.',
      text: 'Saat ini saya terbuka untuk kesempatan baru: magang, posisi junior developer, atau proyek freelance. Entah Anda punya lowongan, ide yang ingin diwujudkan, atau sekadar ingin berdiskusi, kotak masuk saya selalu terbuka dan setiap pesan saya baca.',
    },
    modal: {
      close: 'Tutup',
      prev: 'Tangkapan layar sebelumnya',
      next: 'Tangkapan layar berikutnya',
      goTo: 'Ke tangkapan layar',
      screenshot: 'tangkapan layar',
      comingSoon: 'Tangkapan layar segera hadir',
      demo: 'Demo langsung',
      repo: 'Kode sumber',
    },
    privacy: {
      title: 'Privasi',
      back: 'Kembali ke portofolio',
      updated: 'Terakhir diperbarui: September 2026',
      body: [
        'Situs ini tidak mengumpulkan apa pun tentang Anda. Tidak ada analytics, tidak ada pixel pelacak, tidak ada jaringan iklan, dan situs ini tidak menulis cookie sama sekali.',
        'Tidak ada formulir di sini. Tautan kontak membuka aplikasi email Anda sendiri; tidak ada yang dikirim ke server milik saya, dan pesan yang Anda tulis tidak disimpan di mana pun pada situs ini.',
        'Pilihan bahasa dan tema Anda disimpan di browser lewat localStorage. Data itu tidak pernah meninggalkan perangkat Anda dan saya tidak punya cara untuk membacanya.',
        'Satu-satunya permintaan pihak ketiga yang dilakukan halaman ini adalah ke Google Fonts, yang menyediakan hurufnya. Google menerima alamat IP Anda sebagai bagian dari permintaan itu, sebagaimana berlaku untuk setiap sumber daya yang dimuat dari servernya. Jika Anda ingin menghindarinya, content blocker akan menghentikan permintaan tersebut dan situs ini beralih ke huruf bawaan sistem.',
        'Situs ini disajikan sebagai berkas statis. Tidak ada akun, tidak ada basis data, dan tidak ada log yang saya kendalikan.',
      ],
      contactLabel: 'Pertanyaan tentang halaman ini:',
    },
  },
}
