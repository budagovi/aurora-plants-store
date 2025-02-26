import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "../lib/theme/ThemeRegistry";

export const metadata: Metadata = {
  title: {
    default: "Aurora Plants",
    template: "Aurora Plants - %s",
  },
  description: "Online store for  indoor and outdoor plants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
