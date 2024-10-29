import HERO from "@/app/public/HERO.png";
// import STARTSAVING from '@/app/public/SAVING.png';
import ROCKET from '@/app/public/ROCKET.png';
import { Icons } from "./icons";

export const Resource = {
  dImage: {
    HERO,
    // STARTSAVING,
    ROCKET,
  },
  dIcons: {
    search: Icons.IoSearch,
    dashboard: Icons.MdOutlineDashboardCustomize,
  },
  dCollaboration: [
    {
      id: 1,
      title: "BANK INDONESIA",
      icon: Icons.BsBank,
    },
    {
      id: 2,
      title: "BANK KRUT",
      icon: Icons.PiPiggyBank,
    },
    {
      id: 3,
      title: "BANK KITA",
      icon: Icons.HiOutlineBanknotes,
    },
    {
      id: 4,
      title: "BANK BANK",
      icon: Icons.SiStarlingbank,
    },
    {
      id: 5,
      title: "BANK MANDIRI",
      icon: Icons.RiBankCardLine,
    },
    {
      id: 6,
      title: "GOJO",
      icon: Icons.SiGojek,
    },
    {
      id: 7,
      title: "BANK BNI",
      icon: Icons.GrMoney,
    },
    {
      id: 8,
      title: "BANK BRI",
      icon: Icons.RiMoneyPoundCircleLine,
    },
    {
      id: 9,
      title: "BANK BCA",
      icon: Icons.MdOutlineAttachMoney,
    },
    {
      id: 10,
      title: "BANK BNI",
      icon: Icons.TbMoneybag,
    },
  ],
  dFaq : [
    {
      id: 1,
      title: "Apa itu Website Tabungan?",
      desc: "Website Tabungan adalah platform digital yang memungkinkan Anda untuk mengelola informasi tentang nasabah, transaksi, dan saldo secara online. Fitur ini memudahkan pengguna dan admin dalam mengatur transaksi keuangan dengan cara yang lebih praktis dan efisien.",
    },
    {
      id: 2,
      title: "Bagaimana Cara Mendaftar sebagai Nasabah?",
      desc: "Untuk mendaftar sebagai nasabah, Anda dapat menghubungi pihak admin melalui halaman kontak atau mendaftar langsung di kantor cabang terdekat. Proses pendaftaran membutuhkan informasi seperti nama lengkap, nomor rekening, dan detail identitas lainnya."
    },
    {
      id: 3,
      title: "Apakah Data Nasabah Aman di Website Ini?",
      desc: "Ya, kami menggunakan teknologi keamanan terbaik untuk memastikan semua data nasabah disimpan dengan aman. Semua informasi yang dikirimkan melalui website kami dienkripsi untuk melindungi dari akses yang tidak sah."
    },
    {
      id: 4,
      title: "Bagaimana Cara Menghubungi Admin?",
      desc: "Anda bisa menghubungi admin melalui halaman kontak di website ini atau melalui alamat email dan nomor telepon yang tersedia. Kami siap membantu Anda dengan segala pertanyaan atau masalah yang Anda hadapi."
    },
  ],
  dSosmed: [
    {
      id: 0,
      title: "Email",
      href: "mailto:danamasadepan@gmail.com",
      icon: Icons.MdOutlineMail,
    },
    {
      id: 1,
      title: "Facebook",
      href: "https://facebook.com",
      icon: Icons.FaFacebook,
    },
    {
      id: 2,
      title: "Instagram",
      href: "https://instagram.com",
      icon: Icons.FaInstagram,
    },
    {
      id: 3,
      title: "Whatsapp",
      href: "https://whatsapp.com",
      icon: Icons.FaWhatsapp,
    },
    {
      id: 4,
      title: "Twitter",
      href: "https://twitter.com",
      icon: Icons.FaXTwitter,
    },
    {
      id: 5,
      title: "Telegram",
      href: "https://telegram.com",
      icon: Icons.PiTelegramLogo,
    },
  ],
  dMenu : {
    links: [
      {
        title: "Home",
        href: "/",
        icon: Icons.AiOutlineHome
      },
      {
        title: "Nasabah",
        href: "/search",
        icon: Icons.FiUsers
      },
      {
        title: "Tentang Kami",
        href: "/tentang",
        icon: Icons.BsInfoLg
      },
      {
        title: "FAQ",
        href: "/faq",
        icon: Icons.MdOutlineQuestionMark
      },
      {
        title: "Kontak",
        href: "/kontak",
        icon: Icons.LuMessagesSquare
      },
    ],
    Services: [
      {
        title: "Privacy Policy",
        href: "/",
      },
      {
        title: "Terms & Conditions",
        href: "/",
      },
      {
        title: "Refund Policy",
        href: "/",
      },
      {
        title: "Cookie Policy",
        href: "/",
      },
    ],
  }
};

export const Inputs ={
  Transaksi: [
    {
      label: "Customer ID",
      name: "customer_id",
      type: "number",
      element: "text" as const,
      placeholder: "Masukan ID Customer",
    },
    {
      label: "Admin ID",
      name: "admin_id",
      type: "number",
      element: "text" as const,
      placeholder: "Masukan ID Admin",
    },
    {
      label: "Tipe Transaksi",
      name: "type",
      type: "text",
      element: "text" as const,
      placeholder: "Masukan Tipe Transaksi",
    },
    {
      label: "Jumlah Transaksi",
      name: "amount",
      type: "number",
      element: "text" as const,
      placeholder: "Masukan Jumlah Transaksi",
    },
  ],
  Login : [
    {
      label: "Nama",
      name: "name",
      type: "text",
      placeholder: "Masukan Nama Anda",
      element: "text" as const,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Masukan Email",
      element: "text" as const,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Masukan Password",
      element: "password" as const,
    }
  ],
  Nasabah : [
    {
      label: "NISN",
      name: "nisn",
      type: "text",
      placeholder: "Masukan NISN Anda",
      element: "text" as const,
    },
    {
      label: "Nama",
      name: "name",
      type: "text",
      placeholder: "Masukan Nama Anda",
      element: "text" as const,
    },
    {
      label: "Jenis Kelamin",
      name: "gender",
      type: "text",
      placeholder: "Masukan Jenis Kelamin Anda",
      element: "text" as const,
    },
    {
      label: "Jurusan",
      name: "major",
      type: "text",
      placeholder: "Masukan Jurusan Anda",
      element: "text" as const,
    },
    {
      label: "Kelas",
      name: "class",
      type: "text",
      placeholder: "Masukan Kelas Anda",
      element: "text" as const,
    },
    {
      label: "Alamat",
      name: "address",
      type: "text",
      placeholder: "Masukan Alamat Anda",
      element: "text" as const,
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      placeholder: "Masukan Email Anda",
      element: "text" as const,
    },
    {
      label: "Nomor Telepon",
      name: "phone",
      type: "text",
      placeholder: "Masukan Nomor Telepon Anda",
      element: "text" as const,
    },
  ]
}
