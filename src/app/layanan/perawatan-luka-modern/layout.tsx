import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perawatan Luka Modern | Klinik Griya Luka Mediva",
  description:
    "Layanan perawatan luka modern di Klinik Griya Luka Mediva dengan pendekatan evidence-based wound care, teknologi terkini, dan tim medis profesional untuk hasil penyembuhan optimal.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}