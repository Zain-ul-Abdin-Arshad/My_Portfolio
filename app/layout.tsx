
import "../styles/globals.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export const metadata = {
  title: "Zain Ul Abdin - Portfolio",
  description: "Machine Learning Engineer Portfolio",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
