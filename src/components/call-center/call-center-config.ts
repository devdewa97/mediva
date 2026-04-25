// ============================================
// Konfigurasi Floating Call Center Button
// ============================================
// Mudah diedit tanpa harus masuk ke komponen utama
// Ubah nilai-nilai di bawah ini sesuai kebutuhan

export interface ContactService {
  title: string;
  description: string;
  icon: string; // Nama icon dari lucide-react (tanpa "Icon")
  href: string;
  color: string; // Warna background (Tailwind class)
  hoverColor: string; // Warna saat hover (Tailwind class)
}

// === PENGATURAN UMUM ===
export const callCenterConfig = {
  // Posisi tombol
  position: "bottom-right" as "bottom-right" | "bottom-left",

  // Warna tema utama
  primaryColor: "from-[#208300] to-[#166600]", // gradient dari-hijau-ke-hijau-gelap
  solidColor: "#208300", // warna solid (untuk ping animation)

  // Judul panel
  panelTitle: "Hubungi Kami",
  panelSubtitle: "Pilih layanan yang Anda butuhkan",

  // Teks footer
  footerNote: "Kami siap membantu Anda 24/7",

  // Aktifkan/matikan animasi ping
  pingAnimation: true,

  // Ukuran tombol (px)
  buttonSize: 56, // default 56 (w-14 h-14)
} as const;

// === KONTAK LAYANAN ===
// Edit bagian ini untuk mengubah layanan kontak
export const contactServices: ContactService[] = [
  {
    title: "Konsultasi Gratis",
    description: "Chat sekarang untuk konsultasi gratis",
    icon: "MessageCircle",
    href: "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600"
  },
  {
    title: "Telepon Kami",
    description: "(021) 123-4567",
    icon: "Phone",
    href: "tel:0211234567",
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600"
  },
  {
    title: "Email Kami",
    description: "info@griyalukamediva.com",
    icon: "Mail",
    href: "mailto:info@griyalukamediva.com",
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600"
  },
  {
    title: "Reservasi Online",
    description: "Buat janji temu hari ini",
    icon: "Calendar",
    href: "#kontak",
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600"
  }
];

// === PENGATURAN TAMBAHAN ===
export const advancedConfig = {
  // Lebar panel (Tailwind class)
  panelWidth: "w-72",

  // Offset dari tepi layar
  offset: {
    x: 24, // dari kanan/kiri (px)
    y: 24  // dari bawah (px)
  },

  // Z-index (jika tertimpa elemen lain)
  zIndex: 50,

  // Animasi
  animationDuration: 300, // dalam ms
  animationEasing: "ease-in-out",

  // Responsive - sembunyikan di mobile?
  hideOnMobile: false,
  mobileBreakpoint: "md" as "sm" | "md" | "lg"
} as const;