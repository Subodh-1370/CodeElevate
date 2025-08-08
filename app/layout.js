import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/AuthContext"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code Elevate - Programming Blog",
  description: "A comprehensive programming blog covering various technologies and coding concepts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Navbar/>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
