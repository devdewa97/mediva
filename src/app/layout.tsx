import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingCallButton from "@/components/call-center/FloatingCallButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klinik Griya Luka Mediva | Perawatan Luka Modern, Khitan Modern, Hirudo Therapy & Homecare",
  description:
    "Klinik Griya Luka Mediva menyediakan layanan perawatan luka modern, khitan modern, hirudo therapy, dan homecare dengan standar medis profesional.",
  metadataBase: new URL("https://domainkamu.com"),
  openGraph: {
    title: "Klinik Griya Luka Mediva",
    description:
      "Solusi Perawatan Luka Modern & Profesional dengan layanan Khitan Modern, Hirudo Therapy, dan Homecare.",
    url: "https://domainkamu.com",
    siteName: "Klinik Griya Luka Mediva",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Klinik Griya Luka Mediva",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Griya Luka Mediva",
    description:
      "Perawatan Luka Modern, Khitan Modern, Hirudo Therapy & Homecare.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable}`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}

// Footer Component
function Footer() {
  return (
    <footer id="kontak" className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img
              src="https://medivacare.com/wp-content/uploads/2024/10/Griya-Luka-Mediva-2-1024x229.png"
              alt="Griya Luka Mediva"
              className="h-10 w-auto mb-6"
            />
            <p className="text-slate-400 leading-relaxed mb-6">
              Klinik perawatan luka modern dengan tenaga medis profesional dan fasilitas lengkap untuk pelayanan terbaik.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#208300] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.637H7.079v-3.701h3.104v-2.665c0-3.107 1.869-4.832 4.729-4.832 1.371 0 2.771.114 2.771.114v2.965h-1.548c-1.514 0-1.995.943-1.995 1.911v2.34h3.312l-.527 3.701h-2.785v8.637c5.736-.9 10.124-5.864 10.124-11.854z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#208300] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.979-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                </svg>
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#208300] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Layanan</h4>
            <ul className="space-y-3">
              <li><a href="#layanan" className="text-slate-400 hover:text-[#208300] transition-colors">Perawatan Luka Modern</a></li>
              <li><a href="#layanan" className="text-slate-400 hover:text-[#208300] transition-colors">Khitan Modern</a></li>
              <li><a href="#layanan" className="text-slate-400 hover:text-[#208300] transition-colors">Hirudo Therapy</a></li>
              <li><a href="#layanan" className="text-slate-400 hover:text-[#208300] transition-colors">Home Care Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Jadwal Praktik</h4>
            <div className="bg-[#208300] rounded-xl p-4">
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="flex items-center gap-2 text-white font-semibold"><span className="w-2 h-2 bg-white rounded-full"></span>Setiap Hari</span>
                </li>
                <li className="flex justify-between items-center border-t border-white/30 pt-2">
                  <span className="text-white">Pagi</span>
                  <span className="text-white font-bold">06.00 - 08.00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-white">Sore</span>
                  <span className="text-white font-bold">17.00 - 21.00</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Kontak & Alamat</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#208300] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Jl. Contoh No. 123, Kota Anda</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#208300] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>(021) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#208300] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#208300] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info@griyalukamediva.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          <p>2026 Klinik Griya Luka Mediva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}