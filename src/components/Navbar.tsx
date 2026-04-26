"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Layanan", href: "#" },
  { label: "Reservasi", href: "/layanan/reservasi" },
];

const serviceMenu = [
  { label: "Perawatan Luka Modern", href: "/layanan/perawatan-luka-modern" },
  { label: "Khitan Modern", href: "/layanan/khitan-modern" },
  { label: "Hirudo Therapy", href: "/layanan/hirudo-therapy" },
  { label: "Homecare", href: "/layanan/homecare" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="h-12">
            <img
              src="https://medivacare.com/wp-content/uploads/2024/10/Griya-Luka-Mediva-2-1024x229.png"
              alt="Griya Luka Mediva"
              className="h-full w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.label === "Layanan" ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center gap-1 text-slate-600 hover:text-[#208300] transition-colors font-medium"
                  >
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-10 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {serviceMenu.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          className="block px-4 py-3 text-slate-600 hover:text-[#208300] hover:bg-[#208300]/5 transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-600 hover:text-[#208300] transition-colors font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
            <a
              href="#kontak"
              className="bg-[#208300] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#166600] transition-colors"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              item.label === "Layanan" ? (
                <div key={item.label}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full py-3 text-slate-600 hover:text-[#208300] transition-colors"
                  >
                    <span>{item.label}</span>
                    <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 space-y-2 mt-2 border-l-2 border-[#208300]/20 ml-2">
                      {serviceMenu.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          className="block py-2 text-slate-500 hover:text-[#208300] transition-colors text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
              <a
              key={item.label}
              href={item.href}
              className="block py-3 text-slate-600 hover:text-[#208300] transition-colors"
              onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
              )
            ))}
            <a
            href="#kontak"
            className="inline-block mt-4 bg-[#208300] text-white px-6 py-3 rounded-full font semibold"
            onClick={() => setIsMenuOpen(false)}
            >
              Konsultasi Sekarang
            </a>
            </div>
        )}
        </div>
        </nav>
  );
}