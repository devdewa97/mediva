"use client";

import {
  Users,
  Shield,
  HeartHandshake,
  Clock,
  CheckCircle,
  Award,
  Target,
  Lightbulb,
  Stethoscope
} from "lucide-react";

import FloatingCallButton from "@/components/call-center/FloatingCallButton";

export default function TentangKamiPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="relative py-32 flex items-center">
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
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Tentang <span className="text-white">Klinik Griya Luka Mediva</span>
            </h1>
            <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto">
              Griya Luka Mediva adalah pusat perawatan luka terpercaya yang berlokasi di Jawa Timur.
              Kami memberikan pelayanan terbaik dengan tenaga medis profesional dan fasilitas modern untuk
              kenyamanan serta kesembuhan pasien.
            </p>
          </div>
        </div>
      </section>

      {/* Profil Klinik - Clean & Professional */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Profil Klinik
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Griya Luka Mediva hadir untuk memberikan solusi perawatan luka terbaik dengan pendekatan profesional dan moderno.
            </p>
          </div>

          {/* Visi Misi - Single Row */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#208300] to-[#166600] rounded-2xl p-8 text-white">
              <Target className="w-8 h-8 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3">Visi</h3>
              <p className="text-white/90 leading-relaxed">
                Menjadi pusat perawatan luka pilihan utama masyarakat dengan pelayanan profesional dan moderno.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <Lightbulb className="w-8 h-8 text-[#208300] mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Misi</h3>
              <p className="text-slate-600 leading-relaxed">
                Memberikan perawatan luka berkualitas dengan standar medis tinggi, tenaga profesional, dan pelayanan penuh kasih.
              </p>
            </div>
          </div>

          {/* Sejarah & Komitmen */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Sejarah Klinik</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Didirikan dengan visi memberikan pelayanan perawatan luka terbaik bagi masyarakat.
              </p>
              <ul className="space-y-3">
                {['Membantu ribuan pasien berbagai jenis luka', 'Dari luka diabetes hingga luka bakar', 'Kepercayaan pasien motivasi kami'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 bg-[#208300] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Komitmen Pelayanan</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl text-center">
                  <Shield className="w-6 h-6 text-[#208300] mx-auto mb-2" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-slate-800">Layanan Aman</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl text-center">
                  <Stethoscope className="w-6 h-6 text-[#208300] mx-auto mb-2" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-slate-800">Modern</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl text-center">
                  <HeartHandshake className="w-6 h-6 text-[#208300] mx-auto mb-2" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-slate-800">Prioritas Pasien</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl text-center">
                  <Clock className="w-6 h-6 text-[#208300] mx-auto mb-2" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-slate-800">Cepat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Klinik */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Keunggulan Klinik Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Kepercayaan pasien adalah prioritas utama kami dengan keunggulan layanan yang telah terbukti.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl hover:border-[#208300]/30 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#208300] to-[#166600] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-6 flex-1">
                <div className="w-14 h-14 bg-gradient-to-br from-[#208300] to-[#166600] rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#208300] transition-colors">Tenaga Medis Profesional</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tim medis berpengalaman dan tersertifikasi dengan standar kompetensi tinggi.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl hover:border-[#208300]/30 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#208300] to-[#166600] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-6 flex-1">
                <div className="w-14 h-14 bg-gradient-to-br from-[#208300] to-[#166600] rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#208300] transition-colors">Metode Perawatan Modern</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Menggunakan metode terkini dengan teknologi medis modern dan standar steril.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl hover:border-[#208300]/30 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#208300] to-[#166600] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-6 flex-1">
                <div className="w-14 h-14 bg-gradient-to-br from-[#208300] to-[#166600] rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#208300] transition-colors">Peralatan Medis Lengkap</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Fasilitas lengkap dengan peralatan modern untuk berbagai jenis perawatan luka.
                </p>
              </div>
            </div>

            {/* Card 4 - Featured */}
            <div className="group relative bg-gradient-to-br from-[#208300] to-[#166600] rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="relative p-6 flex-1">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <HeartHandshake className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Pelayanan Ramah & Cepat</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Pelayanan cepat dan penuh perhatian untuk kenyamanan pasien.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#208300] mb-2">1500+</div>
                <p className="text-slate-600 text-sm">Pasien Puas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#208300] mb-2">5+</div>
                <p className="text-slate-600 text-sm">Tahun Pengalaman</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#208300] mb-2">10+</div>
                <p className="text-slate-600 text-sm">Tenaga Medis</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#208300] mb-2">4.9</div>
                <p className="text-slate-600 text-sm">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai & Filosofi Pelayanan */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Nilai & Filosofi <span className="text-[#208300]">Pelayanan</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Kami percaya bahwa setiap pasien berhak mendapatkan perawatan terbaik dengan
                  pendekatan yang humanis dan penuh kasih sayang.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <Award className="w-6 h-6 text-[#208300] shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold text-slate-800">Kualitas Utama</p>
                    <p className="text-slate-600 text-sm">Standar medis tinggi dalam setiap tindakan</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <HeartHandshake className="w-6 h-6 text-[#208300] shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold text-slate-800">Pelayanan Humanis</p>
                    <p className="text-slate-600 text-sm">Pendekatan penuh kasih dan perhatian</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-[#208300] shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold text-slate-800">Kepercayaan Pasien</p>
                    <p className="text-slate-600 text-sm">Kepercayaan Anda adalah motivasi kami</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                  alt="Pelayanan Klinik"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-slate-800 font-bold">4.9</span>
                      <span className="text-slate-500">/ 5.0</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">Berdasarkan 1.500+ penilaian pasien</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#208300] to-[#166600] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Siat Melawat Luka Anda Bersama Kami
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Dengan pengalaman 1500+ pasien dan tim medis profesional, kami siap memberikan perawatan luka terbaik untuk kesembuhan Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 w-full">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-[#208300] px-8 py-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-xl group"
                >
                  <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hubungi Kami
                </a>
                <a
                  href="tel:+6281234567890"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (021) 123-4567
                </a>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-medium">Terverifikasi</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium">Rating 4.9/5</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="text-sm font-medium">1500+ Pasien</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </>
  );
}