"use client";

import Link from "next/link";
import { useState } from "react";
import { courses } from "../../app/data/course.js";
import { useRegistration } from "@/components/Registration/RegistrationContext.jsx";
import "./CoursesSection.css";

export default function CoursesSection() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const { openRegistration } = useRegistration();

  const homeCourses = courses.filter(
    (course) =>
      course.shortTitle === "FIT" ||
      course.shortTitle === "AI"
  );

  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        <div className="courses-heading">
          <span className="courses-label">
            {/* <span className="courses-label-dot"></span> */}
             Courses
          </span>

          <h2>
            Start Learning.
            <br />
            <span>Build Your Future.</span>
          </h2>

          <p>
            Every student begins with FIT — our mandatory foundation program —
            before advancing to a specialization.
          </p>
        </div>

        <div className="courses-grid">
          {homeCourses.map((course) => (
            <article
              className="course-card"
              key={course.title}
            >
              <div className="course-card-header">
                <span className="course-number">
                  {course.number}
                </span>

                <span className="course-category">
                  {course.category}
                </span>
              </div>

              {/* <div className="course-icon">
                <span>{course.shortTitle}</span>
              </div> */}

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="course-meta">
                <span>{course.duration}</span>
                <span>{course.type}</span>
              </div>

              <div className="course-actions">
                <button
                  type="button"
                  className="course-enroll-button"
                  onClick={openRegistration}
                >
                  Enroll Now
                </button>

                {course.moduleAvailable ? (
                  <a
                    href={course.module}
                    download
                    className="course-module-button"
                  >
                    Download Module
                  </a>
                ) : (
                  <button
                    type="button"
                    className="course-module-button"
                    onClick={() => setShowComingSoon(true)}
                  >
                    Coming Soon
                  </button>
                )}
              </div>

              <div className="course-card-accent"></div>
            </article>
          ))}
        </div>

        <div className="courses-footer">
          <Link
            href="/courses"
            className="view-all-courses"
          >
            View All Courses
            <span>→</span>
          </Link>
        </div>
      </div>

      {showComingSoon && (
        <div
          className="course-modal-overlay"
          onClick={() => setShowComingSoon(false)}
        >
          <div
            className="course-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="course-modal-close"
              onClick={() => setShowComingSoon(false)}
              aria-label="Close popup"
            >
              ×
            </button>

            <div className="course-modal-icon">
              <span>+</span>
            </div>

            <h3>Course Module Coming Soon</h3>

            <p>
              The module for this course will be available soon.
              Stay tuned for updates.
            </p>

            <button
              type="button"
              className="course-modal-button"
              onClick={() => setShowComingSoon(false)}
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </section>
  );
}