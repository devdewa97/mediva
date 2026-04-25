import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homecare | Klinik Griya Luka Mediva",
  description:
    "Layanan homecare Klinik Griya Luka Mediva — perawatan luka profesional langsung ke rumah Anda dengan tenaga medis berpengalaman, peralatan lengkap, dan prosedur steril tanpa perlu datang ke klinik.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}