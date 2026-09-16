"use client";

import { useRegistration } from "@/components/Registration/RegistrationContext.jsx";
import "./Hero.css";

export default function Hero() {
  const { openRegistration } = useRegistration();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Learn Skills.
          <br />
          <span>Build Your Future.</span>
        </h1>

        <p className="hero-description">
          Join TECH X ACADEMY and master in-demand tech skills with
          hands-on training, expert mentors, and real-world projects.
          Your career transformation starts here.
        </p>

        <div className="hero-actions">
          <button
            type="button"
            className="hero-register-button"
            onClick={openRegistration}
          >
            Register Now
          </button>

          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            className="hero-whatsapp-button"
          >
            Join WhatsApp
          </a> */}
        </div>
      </div>
    </section>
  );
}