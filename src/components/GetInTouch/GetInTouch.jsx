import "./GetInTouch.css";

export default function GetInTouch() {
  const whatsappLink =
    "https://wa.me/923272979729?text=Hello%2C%20I%20want%20to%20enroll%20in%20TECH%20X%20ACADEMY.%20Please%20guide%20me%20about%20registration.";

  return (
    <section id="contact" className="get-in-touch-section">
      <div className="get-in-touch-container">
        <div className="get-in-touch-content">
          <div className="get-in-touch-heading">
            <span className="get-in-touch-label">
              Get In Touch
            </span>

            <h2>
              Ready to Start Your
              
              <span> Tech Journey?</span>
            </h2>

            <p>
              Reach out to us via WhatsApp, phone, or email. Our team is ready
              to guide you through course selection and enrollment — fast and
              friendly.
            </p>
          </div>

          <div className="get-in-touch-note">
            <span className="get-in-touch-note-line"></span>
            <span>We are here to help you choose the right path.</span>
          </div>
        </div>

        <div className="contact-options">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card whatsapp-card"
          >
            <div className="contact-icon whatsapp-contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3ZM12.2 21.6h-.1c-1.7 0-3.4-.5-4.8-1.4l-.3-.2-3.9 1 1-3.8-.2-.3a9.8 9.8 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 7 2.9 1.9 1.9 2.9 4.3 2.9 6.9 0 5.5-4.4 9.9-9.9 9.9Zm5.4-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.9.6.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" />
              </svg>
            </div>

            <div className="contact-card-content">
              <span className="contact-card-title">
                WhatsApp Chat
              </span>

              <span className="contact-card-detail">
                +92 327 2979729
              </span>

              <span className="contact-card-hint">
                Tap to message
              </span>
            </div>

            <span className="contact-card-arrow">↗</span>
          </a>

          <a
            href="tel:+923272979729"
            className="contact-card"
          >
            <div className="contact-icon phone-contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 2.5 4.8 2c-.8-.2-1.7.2-2.1 1l-1.2 2.7c-.3.7-.2 1.5.2 2.1 1.3 2.1 3 4.1 5 5.9 2 1.8 4.2 3.3 6.5 4.4.7.3 1.5.3 2.1-.2l2.4-1.7c.7-.5 1-1.4.7-2.2l-.6-1.8c-.2-.7-.9-1.2-1.6-1.3l-2.3-.3c-.6-.1-1.2.1-1.6.6l-.8.9a16.4 16.4 0 0 1-3.5-2.6 16.5 16.5 0 0 1-2.8-3.3l.8-.9c.4-.5.6-1.1.5-1.7l-.3-2.3c-.1-.7-.6-1.3-1.3-1.5Z" />
              </svg>
            </div>

            <div className="contact-card-content">
              <span className="contact-card-title">
                Call Us Directly
              </span>

              <span className="contact-card-detail">
                0327 2979729
              </span>

              <span className="contact-card-hint">
                Tap to call
              </span>
            </div>

            <span className="contact-card-arrow">↗</span>
          </a>

          <a
            href="mailto:techxacademypk@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon email-contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-9 5.5L3 8V6l9 5.5L21 6v2Z" />
              </svg>
            </div>

            <div className="contact-card-content">
              <span className="contact-card-title">
                Email Us
              </span>

              <span className="contact-card-detail email-detail">
                techxacademypk@gmail.com
              </span>

              <span className="contact-card-hint">
                Tap to email
              </span>
            </div>

            <span className="contact-card-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}