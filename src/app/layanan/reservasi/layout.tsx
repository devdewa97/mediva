import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservasi Layanan | Klinik Griya Luka Mediva",
  description:
    "Reservasi mudah di Klinik Griya Luka Mediva. Pilih layanan Perawatan Luka Modern, Khitan Modern, Hirudo Therapy, atau Homecare dan reservasi melalui WhatsApp secara cepat.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}