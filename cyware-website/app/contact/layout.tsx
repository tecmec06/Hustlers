import type React from "react";
import "./contact.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyware - Cybersecurity Solutions",
  description: "Operationalize Threat Intelligence with Cyware's cybersecurity solutions",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={inter.className}>{children}</div>;
}
