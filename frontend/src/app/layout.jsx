// import { Geist, Geist_Mono } from "next/font/google";
import vazirFont from "@/constants/localFont";
import "@/styles/globals.css"
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthContext";
import ReactQueryProvider from "@/provider/ReactQueryProvider";
import DarkModeProvider from "./context/DarkModeContext";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: {
    template: '%s | بلاگ اپ',
    default: 'بلاگ اپ',
  },
  description: "مدیریت بلاگ ها",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="dark-mode">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <DarkModeProvider>
          <Toaster />
          <ReactQueryProvider>
            <AuthProvider >
              {children}
            </AuthProvider>
          </ReactQueryProvider>
        </DarkModeProvider>

      </body>
    </html>
  );
}
