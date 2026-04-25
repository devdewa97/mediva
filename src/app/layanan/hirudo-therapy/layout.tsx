import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hirudo Therapy (Terapi Lintah Medis) | Klinik Griya Luka Mediva",
  description:
    "Hirudo Therapy di Klinik Griya Luka Mediva — terapi lintah medis untuk melancarkan sirkulasi darah, mengurangi pembengkakan, dan mempercepat penyembuhan secara alami dengan pengawasan medis.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}