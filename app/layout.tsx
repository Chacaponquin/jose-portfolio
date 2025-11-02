import Background from "./components/Background/Background";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-dvh items-center justify-center pt-32 px-5">
          <Background />

          <Navbar />

          <main className="w-full max-w-[950px] flex flex-col grow">
            <div className="flex flex-col grow w-full">{children}</div>

            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
