"use client";

import { useEffect, useState } from "react";
import { courses } from "../../app/data/course.js";
import { useRegistration } from "./RegistrationContext.jsx";
import "./RegistrationModal.css";

export default function RegistrationModal() {
  const {
    isRegistrationOpen,
    closeRegistration,
  } = useRegistration();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    guardianName: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    address: "",
    course: "",
    recommendation: "",
  });

  const registrationCourses = courses.filter(
    (course) => course.registrationAvailable
  );

  useEffect(() => {
    if (!isRegistrationOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isRegistrationOpen]);

  useEffect(() => {
    if (isRegistrationOpen) {
      setStep(1);
    }
  }, [isRegistrationOpen]);

  const closeModal = () => {
    closeRegistration();
    setStep(1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleNext = (event) => {
    event.preventDefault();
    setStep(2);
  };

  const handleWhatsApp = () => {
    const message = `Assalam-o-Alaikum,

I have successfully completed my registration at TECH X ACADEMY.

Student Name: ${formData.fullName}
Selected Course: ${formData.course}

Please guide me about the next steps of my enrollment.

Thank you.
TECH X ACADEMY`;

    const whatsappUrl = `https://wa.me/923272979729?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (!isRegistrationOpen) {
    return null;
  }

  return (
    <div
      className="registration-overlay"
      onMouseDown={closeModal}
    >
      <div
        className="registration-modal"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="registration-close"
          onClick={closeModal}
          aria-label="Close registration form"
        >
          ×
        </button>

        {step === 1 ? (
          <>
            <div className="registration-header">
              <span className="registration-label">
                <span className="registration-label-dot"></span>
                Registration
              </span>

              <h2>Register at TECH X ACADEMY</h2>

              <p>
                Fill in your details. You will receive confirmation
                within 24 hours.
              </p>
            </div>

            <form
              className="registration-form"
              onSubmit={handleNext}
            >
              <div className="registration-form-section">
                <div className="registration-section-heading">
                  <span className="registration-section-number">
                    01
                  </span>

                  <div>
                    <h3>Personal Information</h3>
                    <p>Tell us a little about yourself.</p>
                  </div>
                </div>

                <div className="registration-fields">
                  <div className="registration-field">
                    <label htmlFor="fullName">
                      Full Name
                      <span>*</span>
                    </label>

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="registration-field">
                    <label htmlFor="guardianName">
                      Father / Guardian Name
                      <span>*</span>
                    </label>

                    <input
                      id="guardianName"
                      name="guardianName"
                      type="text"
                      placeholder="Enter father or guardian name"
                      value={formData.guardianName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="registration-field">
                    <label htmlFor="dateOfBirth">
                      Date of Birth
                    </label>

                    <input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="registration-form-section">
                <div className="registration-section-heading">
                  <span className="registration-section-number">
                    02
                  </span>

                  <div>
                    <h3>Contact Information</h3>
                    <p>How can we reach you?</p>
                  </div>
                </div>

                <div className="registration-fields">
                  <div className="registration-field">
                    <label htmlFor="phone">
                      Phone Number
                      <span>*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]{11}"
                      maxLength={11}
                      placeholder="03272979729"
                      value={formData.phone}
                      onChange={(event) => {
                        const value = event.target.value
                          .replace(/\D/g, "")
                          .slice(0, 11);

                        setFormData((previous) => ({
                          ...previous,
                          phone: value,
                        }));
                      }}
                      required
                    />
                  </div>

                  <div className="registration-field">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="registration-field registration-field-full">
                    <label htmlFor="address">
                      Address
                    </label>

                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Enter your current address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="registration-form-section">
                <div className="registration-section-heading">
                  <span className="registration-section-number">
                    03
                  </span>

                  <div>
                    <h3>Course Selection</h3>
                    <p>Choose the course you want to join.</p>
                  </div>
                </div>

                <div className="registration-fields">
                  <div className="registration-field registration-field-full">
                    <label htmlFor="course">
                      Which course do you want to join?
                      <span>*</span>
                    </label>

                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select a course
                      </option>

                      {registrationCourses.map((course) => (
                        <option
                          key={course.shortTitle}
                          value={course.title}
                        >
                          {course.shortTitle} — {course.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="registration-form-section">
                <div className="registration-section-heading">
                  <span className="registration-section-number">
                    04
                  </span>

                  <div>
                    <h3>Recommendation</h3>
                    <p>Help us know how you found us.</p>
                  </div>
                </div>

                <div className="registration-fields">
                  <div className="registration-field registration-field-full">
                    <label htmlFor="recommendation">
                      How did you hear about TECH X ACADEMY?
                      <span>*</span>
                    </label>

                    <select
                      id="recommendation"
                      name="recommendation"
                      value={formData.recommendation}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select an option
                      </option>

                      <option value="Facebook">
                        Facebook
                      </option>

                      <option value="Instagram">
                        Instagram
                      </option>

                      <option value="LinkedIn">
                        LinkedIn
                      </option>

                      <option value="WhatsApp">
                        WhatsApp
                      </option>

                      <option value="Friend or Family">
                        Friend or Family
                      </option>

                      <option value="Google Search">
                        Google Search
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="registration-form-footer">
                <div className="registration-progress">
                  <span className="active"></span>
                  <span></span>
                </div>

                <button
                  type="submit"
                  className="registration-next-button"
                >
                  Next
                  <span>→</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="registration-success">
            <div className="registration-success-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9.2 16.2-4.4-4.4-1.4 1.4 5.8 5.8L21 7.2 19.6 5.8 9.2 16.2Z" />
              </svg>
            </div>

            <span className="registration-success-label">
              Registration Received
            </span>

            <h2>Your registration has been received!</h2>

            <p>
              Thank you for choosing TECH X ACADEMY. Our team will
              review your information and contact you within 24 hours
              for confirmation and further guidance.
            </p>

            <div className="registration-summary">
              <div>
                <span>Student</span>
                <strong>{formData.fullName}</strong>
              </div>

              <div>
                <span>Selected Course</span>
                <strong>{formData.course}</strong>
              </div>
            </div>

            <div className="registration-whatsapp-box">
              <h3>Continue on WhatsApp</h3>

              <p>
                Send your registration details to TECH X ACADEMY
                on WhatsApp for further guidance.
              </p>

              <button
                type="button"
                className="registration-whatsapp-button"
                onClick={handleWhatsApp}
              >
                Continue on WhatsApp
                <span>→</span>
              </button>
            </div>

            <button
              type="button"
              className="registration-done-button"
              onClick={closeModal}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}