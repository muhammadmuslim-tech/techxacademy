"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRegistration } from "@/components/Registration/RegistrationContext.jsx";
import "./Footer.css";

export default function Footer() {
  const { openRegistration } = useRegistration();
  const pathname = usePathname();
  const router = useRouter();

  const handleCoursesNavigation = () => {
    if (pathname !== "/courses") {
      router.push("/courses");
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", "/courses");
  };

  const handleSectionNavigation = (sectionId) => {
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
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <img
                src="/images/Logo.png"
                alt="Tech X Academy Logo"
              />

              <span>
                Tech X <strong>Academy</strong>
              </span>
            </Link>

            <p className="footer-description">
              Empowering the next generation of tech professionals with
              practical, in-demand skills. Learn, build, and launch your career
              with confidence.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/tech_x_academy?igsh=MTJxeHV3eG4zbnRlag=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-link"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/tech-x-academy-715b02406/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-link"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 3.5A2.5 2.5 0 1 1 5 8a2.5 2.5 0 0 1 0-4.5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.8 2.7 4.8 6.2V21h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9V9Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Courses</h3>

            <ul>
              <li>
                <button
                  type="button"
                  className="footer-navigation-button"
                  onClick={handleCoursesNavigation}
                >
                  FIT (Foundation)
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="footer-navigation-button"
                  onClick={handleCoursesNavigation}
                >
                  CIT
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="footer-navigation-button"
                  onClick={handleCoursesNavigation}
                >
                  Web Development
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="footer-navigation-button"
                  onClick={handleCoursesNavigation}
                >
                  Python Development
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="footer-navigation-button"
                  onClick={handleCoursesNavigation}
                >
                  Diploma in AI
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <button
                  type="button"
                  className="footer-register-link"
                  onClick={openRegistration}
                >
                  Register Now
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="footer-navigation-button"
                  onClick={() =>
                    handleSectionNavigation("why-us")
                  }
                >
                  Why Choose Us
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="footer-navigation-button"
                  onClick={() =>
                    handleSectionNavigation("contact")
                  }
                >
                  Get In Touch
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="footer-navigation-button"
                  onClick={handleCoursesNavigation}
                >
                  All Courses
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact</h3>

            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3ZM12.2 21.6h-.1c-1.7 0-3.4-.5-4.8-1.4l-.3-.2-3.9 1 1-3.8-.2-.3a9.8 9.8 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 7 2.9 1.9 1.9 2.9 4.3 2.9 6.9 0 5.5-4.4 9.9-9.9 9.9Zm5.4-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.9.6.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" />
                  </svg>
                </div>

                <a
                  href="https://wa.me/923272979729?text=Hello%2C%20I%20want%20to%20enroll%20in%20TECH%20X%20ACADEMY.%20Please%20guide%20me%20about%20registration."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.6 2.5 4.8 2c-.8-.2-1.7.2-2.1 1l-1.2 2.7c-.3.7-.2 1.5.2 2.1 1.3 2.1 3 4.1 5 5.9 2 1.8 4.2 3.3 6.5 4.4.7.3 1.5.3 2.1-.2l2.4-1.7c.7-.5 1-1.4.7-2.2l-.6-1.8c-.2-.7-.9-1.2-1.6-1.3l-2.3-.3c-.6-.1-1.2.1-1.6.6l-.8.9a16.4 16.4 0 0 1-3.5-2.6 16.5 16.5 0 0 1-2.8-3.3l.8-.9c.4-.5.6-1.1.5-1.7l-.3-2.3c-.1-.7-.6-1.3-1.3-1.5Z" />
                  </svg>
                </div>

                <a href="tel:+923272979729">
                  0327 2979729
                </a>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-9 5.5L3 8V6l9 5.5L21 6v2Z" />
                  </svg>
                </div>

                <a href="mailto:techxacademypk@gmail.com">
                  techxacademypk@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © 2026 TECH X ACADEMY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}