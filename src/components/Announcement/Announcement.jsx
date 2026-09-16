
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRegistration } from "@/components/Registration/RegistrationContext.jsx";
import "./Announcement.css";

export default function Announcement() {
  const [isOpen, setIsOpen] = useState(false);
  const { openRegistration } = useRegistration();

  useEffect(() => {
    const hasSeenAnnouncement = sessionStorage.getItem(
      "tech-x-ai-announcement-seen"
    );

    if (!hasSeenAnnouncement) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem(
          "tech-x-ai-announcement-seen",
          "true"
        );
      }, 700);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeAnnouncement = () => {
    setIsOpen(false);
  };

  const handleRegistration = () => {
    setIsOpen(false);
    openRegistration();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="ai-announcement-overlay"
      onMouseDown={closeAnnouncement}
    >
      <div
        className="ai-announcement-modal"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="ai-announcement-close"
          onClick={closeAnnouncement}
          aria-label="Close announcement"
        >
          ×
        </button>
{/* 
        <div className="ai-announcement-top">
          <span className="ai-announcement-badge">
            <span></span>
            New Program · 2026
          </span>

          <span className="ai-announcement-status">
            Now Enrolling
          </span>
        </div> */}

        <div className="ai-announcement-content">
          <p className="ai-announcement-eyebrow">
            TECH X ACADEMY PRESENTS
          </p>

          <h2>
            AI Is No Longer
            <br />
            <span>the Future. It's Here.</span>
          </h2>

          <p className="ai-announcement-description">
            Artificial Intelligence is transforming industries,
            careers, and the way we solve problems. Start building
            practical AI skills with TECH X ACADEMY's new
            Diploma in AI.
          </p>

          <div className="ai-announcement-divider"></div>

          <div className="ai-course-intro">
            <div>
              <span className="ai-course-label">
                Diploma Program
              </span>

              <h3>Diploma in Artificial Intelligence</h3>
            </div>

            <span className="ai-course-arrow">↗</span>
          </div>

          <div className="ai-course-highlights">
            <div className="ai-highlight">
              <span className="ai-highlight-number">01</span>
              <div>
                <strong>Python</strong>
                <span>Programming</span>
              </div>
            </div>

            <div className="ai-highlight">
              <span className="ai-highlight-number">02</span>
              <div>
                <strong>Machine Learning</strong>
                <span>Core Concepts</span>
              </div>
            </div>

            <div className="ai-highlight">
              <span className="ai-highlight-number">03</span>
              <div>
                <strong>Applied AI</strong>
                <span>Real-World Skills</span>
              </div>
            </div>
          </div>

          <div className="ai-announcement-bottom">
            <div className="ai-announcement-message">
              <span className="ai-message-dot"></span>

              <p>
                Build skills for the AI era.
              </p>
            </div>

            <div className="ai-announcement-actions">
              <Link
                href="/courses"
                className="ai-explore-button"
                onClick={closeAnnouncement}
              >
                Explore Diploma
                <span>→</span>
              </Link>

              <button
                type="button"
                className="ai-enroll-button"
                onClick={handleRegistration}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        {/* <div className="ai-announcement-footer">
          <span>TECH X ACADEMY</span>
          <span>Learn · Build · Grow</span>
        </div> */}
      </div>
    </div>
  );
}

