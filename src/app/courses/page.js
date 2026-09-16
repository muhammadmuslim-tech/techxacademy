"use client";

import { useState } from "react";
import { courses } from "../data/course.js";
import { useRegistration } from "@/components/Registration/RegistrationContext.jsx";
import "./courses.css";

export default function CoursesPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const { openRegistration } = useRegistration();

  return (
    <main className="courses-page">
      <section className="courses-page-hero">
        <div className="courses-page-heading">
          <span className="courses-page-label">
            {/* <span></span> */}
            Tech X Academy
          </span>

          <h1>
            Our
            <span> Courses</span>
          </h1>

          <p>
            Hands-on, career-focused programs taught by industry experts. Choose your path and start building today.
          </p>
        </div>
      </section>

      <section className="all-courses-section">
        <div className="all-courses-container">
          <div className="all-courses-grid">
            {courses.map((course) => (
              <article
                className="all-course-card"
                key={course.title}
              >
                <div className="all-course-top">
                  {/* <span>{course.number}</span> */}
                  <small>{course.category}</small>
                </div>

                

                <h2>{course.title}</h2>

                <p>{course.description}</p>

                <div className="all-course-meta">
                  <span>{course.duration}</span>
                  <span>{course.type}</span>
                </div>

                <div className="all-course-actions">
                  <button
                    type="button"
                    className="all-course-enroll"
                    onClick={openRegistration}
                  >
                    Enroll Now
                  </button>

                  {course.moduleAvailable ? (
                    <a
                      href={course.module}
                      download
                      className="all-course-module"
                    >
                      Download Module
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="all-course-module"
                      onClick={() =>
                        setShowComingSoon(true)
                      }
                    >
                      Coming Soon
                    </button>
                  )}
                </div>

                <div className="all-course-line"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {showComingSoon && (
        <div
          className="all-course-modal-overlay"
          onClick={() => setShowComingSoon(false)}
        >
          <div
            className="all-course-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="all-course-modal-close"
              onClick={() => setShowComingSoon(false)}
              aria-label="Close popup"
            >
              ×
            </button>

            <div className="all-course-modal-icon">
              <span>+</span>
            </div>

            <h3>Course Coming Soon</h3>

            <p>
              The module for this course will be available soon.
              Stay tuned for updates.
            </p>

            <button
              type="button"
              className="all-course-modal-button"
              onClick={() => setShowComingSoon(false)}
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </main>
  );
}