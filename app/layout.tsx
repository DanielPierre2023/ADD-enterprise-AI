
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ADD Individual Solutions Ltd | Enterprise AI",
  description: "Enterprise AI Solutions. Custom AI Engineering, LLM Systems, AI Automation, AI Governance."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
