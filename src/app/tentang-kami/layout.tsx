import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | Klinik Griya Luka Mediva",
  description:
    "Kenali Klinik Griya Luka Mediva — pusat perawatan luka terpercaya di Jawa Timur. Visi, misi, tenaga medis profesional, dan komitmen kami dalam memberikan pelayanan perawatan luka terbaik.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}