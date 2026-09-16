"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useRegistration } from "@/components/Registration/RegistrationContext.jsx";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openRegistration } = useRegistration();
  const pathname = usePathname();
  const router = useRouter();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleRegistration = () => {
    closeMenu();
    openRegistration();
  };

  const handleSectionNavigation = (sectionId) => {
    closeMenu();

    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const navbar = document.querySelector(".navbar-wrapper");
    const navbarHeight = navbar?.offsetHeight || 95;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `/#${sectionId}`
    );
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Link
          href="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <img
            src="/images/Logo.png"
            alt="Tech X Academy Logo"
          />

          <span className="brand-name">
            Tech X <strong>Academy</strong>
          </span>
        </Link>

        <div className="navbar-links">
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/courses" onClick={closeMenu}>
            Course
          </Link>

          <Link href="/instructors" onClick={closeMenu}>
            Instructor
          </Link>

          <button
            type="button"
            className="navbar-section-link"
            onClick={() =>
              handleSectionNavigation("why-us")
            }
          >
            Why Us
          </button>

          <button
            type="button"
            className="navbar-section-link"
            onClick={() =>
              handleSectionNavigation("contact")
            }
          >
            Contact
          </button>
        </div>

        <button
          type="button"
          className="register-button"
          onClick={handleRegistration}
        >
          Register Now
        </button>

        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>

        <Link href="/courses" onClick={closeMenu}>
          Course
        </Link>

        <Link href="/instructors" onClick={closeMenu}>
          Instructor
        </Link>

        <button
          type="button"
          className="mobile-section-link"
          onClick={() =>
            handleSectionNavigation("why-us")
          }
        >
          Why Us
        </button>

        <button
          type="button"
          className="mobile-section-link"
          onClick={() =>
            handleSectionNavigation("contact")
          }
        >
          Contact
        </button>

        <button
          type="button"
          className="mobile-register-button"
          onClick={handleRegistration}
        >
          Register Now
        </button>
      </div>
    </header>
  );
}