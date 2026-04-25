import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khitan Modern | Klinik Griya Luka Mediva",
  description:
    "Layanan khitan modern di Klinik Griya Luka Mediva — prosedur aman, minim rasa sakit, steril, dan ditangani tenaga medis berpengalaman untuk kenyamanan optimal.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}