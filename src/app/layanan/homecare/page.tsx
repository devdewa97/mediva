"use client";

import {
  Home,
  User,
  Clock,
  Stethoscope,
  Activity,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  { icon: Home, title: "Perawatan Luka di Rumah Standar Medis", desc: "Perawatan luka di rumah dengan standar medis profesional." },
  { icon: User, title: "Tenaga Medis Profesional Ke Lokasi", desc: "Tim medis berpengalaman datang langsung ke lokasi pasien." },
  { icon: Stethoscope, title: "Peralatan Lengkap dan Steril", desc: "Peralatan medis lengkap dan prosedur steril untuk penanganan optimal." },
  { icon: Clock, title: "Cocok untuk Pasien Lansia", desc: "Layanan khusus untuk pasien dengan keterbatasan mobilitas." },
  { icon: Activity, title: "Perawatan Luka Diabetes & Kronis Di Rumah", desc: "Perawatan luka kronis tanpa harus datang ke klinik." },
];

export default function Page() {
  return (
    <>
      {/* Hero Section with 2 Columns */}
      <section className="relative py-24 min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src="https://plus.unsplash.com/premium_photo-1663036976879-4baf18adfd5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1920&q=80" alt="BG" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#208300]/95 to-[#208300]/60"></div>
        </div>
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/80 text-sm mb-8">
              <a href="/">Beranda</a><span>/</span><a href="#layanan">Layanan</a><span>/</span><span className="text-white">Homecare</span>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title & Description */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Perawatan Luka Profesional Langsung ke Rumah Anda</h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">Layanan Homecare Klinik Griya Luka Mediva menghadirkan perawatan luka modern langsung ke rumah, ditangani tenaga medis berpengalaman dengan prosedur steril dan peralatan lengkap tanpa perlu ke klinik.</p>

                {/* Trust Stats */}
                <div className="grid grid-cols-3 gap-4 pt-10">
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">98%</p>
                    <p className="text-white/80 text-sm">Tingkat Kesembuhan</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">15+</p>
                    <p className="text-white/80 text-sm">Tahun Pengalaman</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">5000+</p>
                    <p className="text-white/80 text-sm">Pasien Tertangani</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Service Cards */}
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">
                    Layanan Homecare
                  </h3>
                  <div className="grid gap-4">
                    {services.map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <div key={i} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                          <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6 text-slate-900" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-1">{s.title}</h4>
                            <p className="text-white/80 text-sm">{s.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Klinik Approach Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-[#208300]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#208300]/5 border border-[#208300]/10 px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-[#208300] rounded-full"></span>
              <span className="text-[#208300] text-sm font-semibold">Pendekatan Klinik</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Mengapa Memilih Layanan Homecare Kami?</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Kami menghadirkan perawatan luka profesional langsung ke rumah Anda dengan standar kualitas yang sama seperti di klinik.</p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#208300]/10 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#208300]" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Standar Steril</h3>
              <p className="text-slate-500 text-sm">Prosedur medis standar klinik diterapkan langsung di rumah</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#208300]/10 rounded-xl flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-[#208300]" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Tim Profesional</h3>
              <p className="text-slate-500 text-sm">Tenaga medis berpengalaman & tersertifikasi</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#208300]/10 rounded-xl flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-[#208300]" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Nyaman di Rumah</h3>
              <p className="text-slate-500 text-sm">Perawatan tanpa harus keluar rumah</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#208300]/10 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-[#208300]" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Perawatan Kronis</h3>
              <p className="text-slate-500 text-sm">Layanan optimal untuk luka diabetes & kronis</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#208300] to-[#166600] rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Komitment Kesehatan Pasien</h3>
                <p className="text-white/80">Kami memastikan kualitas perawatan terbaik untuk kesembuhan optimal Anda.</p>
              </div>
              <div className="flex items-center gap-4 text-white">
                <span className="text-3xl font-bold">98%</span>
                <span className="text-sm">Tingkat<br/>Kesembuhan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kegiatan Layanan Homecare Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#208300]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#208300]/5 border border-[#208300]/10 px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-[#208300] rounded-full"></span>
              <span className="text-[#208300] text-sm font-semibold">Dokumentasi Kegiatan</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Momen Perawatan Homecare</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Dokumentasi nyata aktivitas layanan Homecare kami dalam memberikan perawatan profesional langsung ke rumah pasien.</p>
          </div>

          {/* Photo Grid - 2 Rows x 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" alt="Perawatan Luka" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">Perawatan Luka Profesional</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" alt="Tim Medis ke Rumah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">Tim Medis Datang ke Rumah</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80" alt="Peralatan Medis" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">Peralatan Medis Lengkap</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" alt="Konsultasi Pasien" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">Konsultasi dengan Pasien</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80" alt="Perawatan Diabetes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">Perawatan Luka Diabetes</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80" alt="Perawatan Lansia" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">Perawatan Lansia di Rumah</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Green Background (same as perawatan-luka-modern) */}
      <section id="kontak" className="py-24 relative overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#208300] to-[#166600]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDE0MTkgMC0xOCA4LjA1ODgxLTE4jE4czQuMDU4ODEtMTggMTgtMTggMTkgNC4wNTg4MSAxOSAxOC0zLjk1Njk4IDE4LTE4IDE4em0zLjMzMzMzMyAxMi41TDI0IDEwdi0xLjMzMzMzM0MxNS4yMTAwNCA1LjgxMjEwNiAxNC40NTQ4OCA1IDIxLjcxMzk4IDVjMi4yNjQ5NiAwIDQuMjkyNjYgMC41NDkyMSA1Ljc5NjczIDEuNTM2NTFMNDIuMzMzMzMgMjYuNUM0My4zMzMzMyAyNy4xMjY5NyA0NCAyOCA0NCAyOHMtLjY2NjY3LS42MzMzMzMtdy0uNjY2NjdNMTYgMzJjLTcuMDYyMzg1IDAtMTMtNS4zNzY3LTEzLTEyek0zNiA0NnYyMkwzNiA0NnoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 mx-auto w-fit">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-medium">Siap Melayani Anda</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Konsultasikan Kondisi Luka Anda Sekarang</h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">Tim medis profesional siap memberikan konsultasi dan rencana perawatan terbaik untuk kebutuhan luka Anda.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="bg-white text-[#208300] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-xl group">
              <svg className="w-6 h-6 mr-3 inline group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Konsultasi Sekarang
            </a>
            <a href="#kontak" className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all hover:shadow-xl backdrop-blur-sm">
              <svg className="w-6 h-6 mr-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <span className="text-sm font-medium">5000+ Pasien Puas</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}