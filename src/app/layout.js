import Navbar from "@/components/Navbar/Navbar.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import RegistrationModal from "@/components/Registration/RegistrationModal.jsx";
import { RegistrationProvider } from "@/components/Registration/RegistrationContext.jsx";
import Announcement from "@/components/Announcement/Announcement.jsx";
import "./globals.css";

export const metadata = {
  title: "Tech X Academy",
  description: "Learn, build and grow with Tech X Academy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RegistrationProvider>
          <Navbar />

          <main className="site-content">
            {children}
          </main>

          <Footer />

          <RegistrationModal />
          <Announcement />
        </RegistrationProvider>
      </body>
    </html>
  );
}