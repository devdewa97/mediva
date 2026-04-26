"use client";

import {
  HeartHandshake,
  Scissors,
  Wind,
  Home as HomeIcon,
  Shield,
  Clock,
  Users,
  ArrowRight,
  Star
} from "lucide-react";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Edukasi Luka", href: "#edukasi" },
  { label: "Kontak", href: "#kontak" },
];

const features = [
  { title: "Tenaga Medis Profesional", description: "Tim medis berpengalaman dan tersertifikasi" },
  { title: "Metode Modern & Steril", description: "Peralatan medis modern dengan standar steril" },
  { title: "Peralatan Lengkap", description: "Fasilitas lengkap untuk berbagai perawatan" },
  { title: "Pelayanan Ramah & Cepat", description: "Pelayanan cepat dan penuh perhatian" },
];

export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <section id="beranda" className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
            alt="Hospital Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#208300]/95 to-[#208300]/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-6 py-32">
            <div className="max-w-3xl">
              {/* Eye Brow / Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-white text-sm font-medium">Klinik Luka Modern</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Solusi Perawatan Luka <span className="text-white">Modern & Profesional</span>
              </h1>
              <p className="text-lg md:text-xl text-white leading-relaxed mb-10 max-w-2xl">
                Klinik Griya Luka Mediva adalah pusat perawatan luka terpercaya dengan
                tenaga medis profesional dan fasilitas modern. Kami memberikan
                pelayanan terbaik untuk kesehatan dan kenyamanan Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#kontak"
                  className="bg-white text-[#208300] px-8 py-4 rounded-2xl font-semibold text-center hover:bg-slate-100 transition-all hover:shadow-xl"
                >
                  Konsultasi Sekarang
                </a>
                <a
                  href="#layanan"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-center hover:bg-white/10 transition-all"
                >
                  Lihat Layanan
                </a>
              </div>

              {/* Rating & Highlights */}
              <div className="mt-10 pt-8 border-t border-white/20">
                {/* Rating */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-bold text-lg">4.9</span>
                  <span className="text-white/70">/ 5.0</span>
                  <span className="text-white/70 hidden sm:inline">|</span>
                  <span className="text-white/70">1.500+ Pasien Telah Percaya</span>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-white text-sm">Terverifikasi Medis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white text-sm">Buka Setiap Hari</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-white text-sm">Lokasi Strategis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="text-white text-sm">Tim Profesional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Unggulan */}
      <section id="layanan" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Layanan Unggulan Klinik Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan perawatan dengan standar medis tinggi
              dan fasilitas modern untuk kenyamanan pasien.
            </p>
          </div>

          {/* 3 Column Grid for Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Service 1 - Perawatan Luka Modern */}
            <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col flex-1 p-5">
                <div className="w-10 h-10 bg-[#208300]/10 rounded-xl flex items-center justify-center mb-4">
                  <HeartHandshake className="w-5 h-5 text-[#208300]" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 leading-tight">Perawatan Luka Modern</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">Perawatan luka dengan teknologi modern dan metode steril untuk proses penyembuhan optimal.</p>
              </div>
              <div className="px-5 pb-5">
                <a href="/layanan/perawatan-luka-modern" className="mt-auto inline-flex items-center justify-center w-full bg-[#208300] text-white text-sm font-semibold py-2.5 px-4 rounded-lg hover:bg-[#166600] transition-colors">
                  Selengkapnya
                </a>
              </div>
            </div>

            {/* Service 2 - Khitan Modern */}
            <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col flex-1 p-5">
                <div className="w-10 h-10 bg-[#208300]/10 rounded-xl flex items-center justify-center mb-4">
                  <Scissors className="w-5 h-5 text-[#208300]" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 leading-tight">Khitan Modern</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">Prosedur khitan dengan teknik modern yang aman, cepat, dan minim rasa sakit.</p>
              </div>
              <div className="px-5 pb-5">
                <a href="/layanan/khitan-modern" className="mt-auto inline-flex items-center justify-center w-full bg-[#208300] text-white text-sm font-semibold py-2.5 px-4 rounded-lg hover:bg-[#166600] transition-colors">
                  Selengkapnya
                </a>
              </div>
            </div>

            {/* Service 3 - Hirudo Therapy */}
            <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col flex-1 p-5">
                <div className="w-10 h-10 bg-[#208300]/10 rounded-xl flex items-center justify-center mb-4">
                  <Wind className="w-5 h-5 text-[#208300]" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 leading-tight">Hirudo Therapy</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">Terapi lintah medis untuk berbagai keluhan kesehatan dengan penanganan profesional.</p>
              </div>
              <div className="px-5 pb-5">
                <a href="/layanan/hirudo-therapy" className="mt-auto inline-flex items-center justify-center w-full bg-[#208300] text-white text-sm font-semibold py-2.5 px-4 rounded-lg hover:bg-[#166600] transition-colors">
                  Selengkapnya
                </a>
              </div>
            </div>

            {/* Service 4 - Home Care Service (Featured) */}
            <div className="flex flex-col h-full bg-linear-to-br from-[#208300] to-[#166600] rounded-2xl shadow-md overflow-hidden relative">
              <div className="absolute top-0 right-0">
                <span className="bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-bl-lg rounded-tr-lg">
                  Unggulan
                </span>
              </div>
              <div className="flex flex-col flex-1 p-5 pt-6">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <HomeIcon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-tight">Home Care Service</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">Layanan perawatan luka di rumah oleh tim medis profesional.</p>
              </div>
              <div className="px-5 pb-5">
                <a href="/layanan/homecare" className="mt-auto inline-flex items-center justify-center w-full bg-white text-[#208300] text-sm font-semibold py-2.5 px-4 rounded-lg hover:bg-slate-100 transition-colors">
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Klinik */}
      <section id="tentang" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://medivacare.com/wp-content/uploads/2024/11/Medivacare.com-02-1024x1024.png"
                  alt="Klinik Griya Luka Mediva"
                  className="w-full aspect-square object-cover"
                />
                {/* Badge for Person 1 (Left) */}
                <div className="absolute bottom-20 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg">
                  <p className="text-sm font-bold text-slate-800">Dr. Ahmad Wijaya</p>
                  <p className="text-xs text-slate-500">Spesialis Luka</p>
                </div>
                {/* Badge for Person 2 (Right) */}
                <div className="absolute bottom-20 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg">
                  <p className="text-sm font-bold text-slate-800">Yosep Frandi</p>
                  <p className="text-xs text-slate-500">Wound Care Practitioner</p>
                </div>
                {/* Verification Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#208300]" />
                    <span className="text-sm font-semibold text-slate-800">Terverifikasi Medis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Klinik Perawatan Luka dengan <span className="text-[#208300]">Standar Medis Modern</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Griya Luka Mediva hadir untuk memberikan solusi perawatan luka terbaik
                dengan pendekatan modern dan profesional. Kami mengutamakan
                kenyamanan dan keselamatan pasien dalam setiap tindakan medis.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dengan tenaga medis berpengalaman dan fasilitas lengkap, kami siap
                memberikan perawatan optimal untuk berbagai jenis luka.
              </p>

              {/* 2 Column Grid for Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <span className="w-8 h-8 bg-[#208300] rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
                  <span className="text-slate-700 font-medium">Perawatan luka diabetes</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <span className="w-8 h-8 bg-[#208300] rounded-full flex items-center justify-center text-white font-bold text-sm">2</span>
                  <span className="text-slate-700 font-medium">Perawatan luka pasca operasi</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <span className="w-8 h-8 bg-[#208300] rounded-full flex items-center justify-center text-white font-bold text-sm">3</span>
                  <span className="text-slate-700 font-medium">Perawatan luka bakar</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <span className="w-8 h-8 bg-[#208300] rounded-full flex items-center justify-center text-white font-bold text-sm">4</span>
                  <span className="text-slate-700 font-medium">Konsultasi perawatan luka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kenapa Memilih Kami */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Kenapa Memilih Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Kepercayaan pasien adalah prioritas utama kami dengan pelayanan terbaik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            {/* Left Column - Reasons (Stacked) */}
            <div className="flex flex-col gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#208300] rounded-xl flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Tenaga Medis Profesional</h3>
                    <p className="text-slate-600 leading-relaxed">Tim medis berpengalaman dan tersertifikasi dengan standar kompetensi tinggi.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#208300] rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Metode Modern & Steril</h3>
                    <p className="text-slate-600 leading-relaxed">Peralatan medis modern dengan standar steril yang tinggi.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#208300] rounded-xl flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Peralatan Lengkap</h3>
                    <p className="text-slate-600 leading-relaxed">Fasilitas lengkap untuk berbagai jenis perawatan luka.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#208300] rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Pelayanan Ramah & Cepat</h3>
                    <p className="text-slate-600 leading-relaxed">Pelayanan cepat dan penuh perhatian untuk kenyamanan pasien.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Clinic Photo */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-full min-h-100">
                <img
                  src="https://medivacare.com/wp-content/uploads/2024/11/Medivacare.com-01.1.png"
                  alt="Klinik Griya Luka Mediva"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/10"></div>

                {/* Right Side Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                  {/* Clinic Name Badge */}
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                    <p className="text-base font-bold text-slate-800">Griya Luka Mediva</p>
                    <p className="text-xs text-slate-500">Klinik Perawatan Luka</p>
                  </div>

                  {/* Rating & Verification Badge */}
                  <div className="flex gap-2">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                        <span className="text-sm font-bold text-slate-700">4.9</span>
                        <span className="text-xs text-slate-500">/ 5.0</span>
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg">
                      <div className="flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-[#208300]" />
                        <span className="text-xs font-semibold text-slate-700">Terverifikasi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Galeri Klinik
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dokumentasi fasilitas dan suasana Klinik Griya Luka Mediva
            </p>
          </div>

          {/* Row 1 - 4 Photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-lg transition-all group">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80"
                alt="Gallery 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-lg transition-all group">
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&q=80"
                alt="Gallery 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-lg transition-all group">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80"
                alt="Gallery 3"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-lg transition-all group">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80"
                alt="Gallery 4"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Row 2 - 4 Photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-lg transition-all group">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80"
                alt="Gallery 5"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-lg transition-all group">
              <img
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&q=80"
                alt="Gallery 6"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-lg transition-all group">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80"
                alt="Gallery 7"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-lg transition-all group">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80"
                alt="Gallery 8"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-linear-to-r from-[#208300] to-[#166600]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDE0MTkgMC0xOCA4LjA1ODgxLTE4jE4czQuMDU4ODEtMTggMTgtMTggMTkgNC4wNTg4MSAxOSAxOC0zLjk1Njk4IDE4LTE4IDE4em0zLjMzMzMzMyAxMi41TDI0IDEwdi0xLjMzMzMzM0MxNS4yMTAwNCA1LjgxMjEwNiAxNC40NTQ4OCA1IDIxLjcxMzk4IDVjMi4yNjQ5NiAwIDQuMjkyNjYgMC41NDkyMSA1Ljc5NjczIDEuNTM2NTFMNDIuMzMzMzMgMjYuNUM0My4zMzMzMyAyNy4xMjY5NyA0NCAyOCA0NCAyOHMtLjY2NjY3LS42MzMzMzMtdy0uNjY2NjdNMTYgMzJjLTcuMDYyMzg1IDAtMTMtNS4zNzY3LTEzLTEyek0zNiA0NnYyMkwzNiA0NnoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>

        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 mx-auto w-fit">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-medium">Siap Melayani Anda</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Wujudkan <span className="text-yellow-300">Kesehatan Optimal</span> Bersama Kami
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Dapatkan penanganan profesional untuk perawatan luka Anda. Tim medis berpengalaman siap memberikan konsultasi dan layanan terbaik untuk kenyamanan dan kesembuhan Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-[#208300] px-8 py-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-xl group"
            >
              <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Konsultasi Sekarang
            </a>
            <a
              href="/layanan/reservasi"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all hover:shadow-xl backdrop-blur-sm"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reservasi Online
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">Rating 4.9/5</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium">Terverifikasi Medis</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-sm font-medium">1500+ Pasien Puas</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}