import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Session, getServerSession } from "next-auth";
import "./globals.css";
import { authOptions } from "./api/auth/[...nextauth]/options";
import AuthSessionProvider from "@/context/auth-session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Playlist Shuffler",
  description: "Shuffle Play music across your playlist library",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions) as Session;

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthSessionProvider session={session}>
          {children}
        </AuthSessionProvider>
      </body>
    </html>
  );
}
