"use client";

import { Calendar, Clock, MessageCircle, Phone, MapPin, User, FileText } from "lucide-react";
import { useState } from "react";

const services = [
  { value: "", label: "Pilih Layanan --" },
  { value: "Perawatan Luka Modern", label: "Perawatan Luka Modern" },
  { value: "Khitan Modern", label: "Khitan Modern" },
  { value: "Hirudo Therapy", label: "Hirudo Therapy" },
  { value: "Homecare", label: "Homecare" },
];

export default function ReservasiPage() {
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    alamat: "",
    layanan: "",
    keluhan: "",
    tanggal: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Halo Admin Klinik Griya Luka Mediva,

Saya ingin melakukan reservasi dengan detail berikut:

Nama: ${formData.nama}
No WA: ${formData.whatsapp}
Alamat: ${formData.alamat}
Layanan: ${formData.layanan}
Keluhan: ${formData.keluhan}
Tanggal: ${formData.tanggal}`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;

    window.open(waUrl, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80"
            alt="Reservation Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#208300]/95 to-[#208300]/70"></div>
        </div>
        <div className="relative z-10 w-full">
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/80 text-sm mb-8">
              <a href="/" className="hover:text-white transition-colors">Beranda</a>
              <span>/</span>
              <a href="#layanan" className="hover:text-white transition-colors">Layanan</a>
              <span>/</span>
              <span className="text-white">Reservasi</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Form Reservasi Layanan
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Reservasi mudah hanya dalam beberapa langkah. Isi formulir di bawah dan kami akan menghubungi Anda!
            </p>

            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <Clock className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
                <p className="text-white font-medium">Respons Cepat</p>
                <p className="text-white/70 text-sm">Reply dalam 30 menit</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <Calendar className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
                <p className="text-white font-medium">Fleksibel</p>
                <p className="text-white/70 text-sm">Pilih tanggal sendiri</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <MessageCircle className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
                <p className="text-white font-medium">Via WhatsApp</p>
                <p className="text-white/70 text-sm">Komunikasi mudah</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#208300]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-5 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#208300] rounded-full animate-pulse"></span>
              <span className="text-slate-600 text-sm font-medium tracking-wide">Reservasi Online</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Isi Formulir Reservasi
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              Silakan isi data di bawah dengan lengkap. Tim kami akan memproses reservasi Anda secepat mungkin.
            </p>
          </div>

          {/* Form Card */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200/80">
            <div className="space-y-8">
              {/* Row 1: Nama Lengkap & Nomor WhatsApp */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nama Lengkap */}
                <div className="space-y-2">
                  <label htmlFor="nama" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <User className="w-4 h-4 text-[#208300]" />
                    Nama Lengkap
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    required
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap Anda"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#208300] focus:ring-2 focus:ring-[#208300]/20 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Nomor WhatsApp */}
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Phone className="w-4 h-4 text-[#208300]" />
                    Nomor WhatsApp
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#208300] focus:ring-2 focus:ring-[#208300]/20 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Row 2: Alamat Lengkap */}
              <div className="space-y-2">
                <label htmlFor="alamat" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <MapPin className="w-4 h-4 text-[#208300]" />
                  Alamat Lengkap
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="alamat"
                  name="alamat"
                  required
                  value={formData.alamat}
                  onChange={handleChange}
                  placeholder="Masukkan alamat lengkap Anda (jalan, RT/RW, kelurahan, kecamatan)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#208300] focus:ring-2 focus:ring-[#208300]/20 outline-none transition-all placeholder:text-slate-400 resize-none"
                />
              </div>

              {/* Row 3: Pilihan Layanan */}
              <div className="space-y-2">
                <label htmlFor="layanan" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <FileText className="w-4 h-4 text-[#208300]" />
                  Pilihan Layanan
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="layanan"
                  name="layanan"
                  required
                  value={formData.layanan}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#208300] focus:ring-2 focus:ring-[#208300]/20 outline-none transition-all bg-white"
                >
                  {services.map((service, index) => (
                    <option key={index} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Deskripsi Keluhan */}
              <div className="space-y-2">
                <label htmlFor="keluhan" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <FileText className="w-4 h-4 text-[#208300]" />
                  Deskripsi Keluhan / Kondisi Luka
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="keluhan"
                  name="keluhan"
                  required
                  value={formData.keluhan}
                  onChange={handleChange}
                  placeholder="Jelaskan kondisi luka Anda: sejak kapan, ukuran, lokasi di tubuh, apakah pernah ditangani, dll."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#208300] focus:ring-2 focus:ring-[#208300]/20 outline-none transition-all placeholder:text-slate-400 resize-none"
                />
              </div>

              {/* Row 5: Tanggal Reservasi */}
              <div className="space-y-2">
                <label htmlFor="tanggal" className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Calendar className="w-4 h-4 text-[#208300]" />
                  Tanggal Reservasi
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="tanggal"
                  name="tanggal"
                  required
                  value={formData.tanggal}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#208300] focus:ring-2 focus:ring-[#208300]/20 outline-none transition-all bg-white"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#208300] to-[#166600] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-[#2aa500] hover:to-[#208300] transition-all hover:shadow-xl hover:shadow-[#208300]/30 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Kirim Reservasi ke WhatsApp
              </button>

              {/* Info Text */}
              <p className="text-center text-slate-500 text-sm">
                Setelah submit, Anda akan diarahkan ke WhatsApp. Silakan kirim pesan untuk konfirmasi reservasi.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#208300] to-[#166600]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDE0MTkgMC0xOCA4LjA1ODgxLTE4jE4czQuMDU4ODEtMTggMTgtMTggMTkgNC4wNTg4MSAxOSAxOC0zLjk1Njk4IDE4LTE4IDE4em0zLjMzMzMzMyAxMi41TDI0IDEwdi0xLjMzMzMzM0MxNS4yMTAwNCA1LjgxMjEwNiAxNC40NTQ4OCA1IDIxLjcxMzk4IDVjMi4yNjQ5NiAwIDQuMjkyNjYgMC41NDkyMSA1Ljc5NjczIDEuNTM2NTFMNDIuMzMzMzMgMjYuNUM0My4zMzMzMyAyNy4xMjY5NyA0NCAyOCA0NCAyOHMtLjY2NjY3LS42MzMzMzMtdy0uNjY2NjdNMTYgMzJjLTcuMDYyMzg1IDAtMTMtNS4zNzY3LTEzLTEyek0zNiA0NnYyMkwzNiA0NnoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Butuh Bantuan? Hubungi Kami Langsung
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Jika Anda kesulitan mengisi formulir, tim kami siap membantu Anda melakukan reservasi melalui telepon.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#208300] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all hover:shadow-xl group flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Chat WhatsApp
            </a>
            <a
              href="tel:0211234567"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all hover:shadow-xl backdrop-blur-sm flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Telepon Kami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}