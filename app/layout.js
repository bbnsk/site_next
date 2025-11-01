import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Bbnsk Art Universe",
  description: "Portfolio of Anastasia Babanska",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
        {/* Navbar поверх баннера */}
        <Navbar />     
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
