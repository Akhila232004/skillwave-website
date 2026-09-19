import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillWave | Tech Learning Platform",
  description:
    "SkillWave is a learning platform for students and technology professionals with courses, interview questions, videos, slideshows, audio resources, and CBT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}