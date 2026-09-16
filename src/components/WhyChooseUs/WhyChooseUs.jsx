import "./WhyChooseUs.css";

const features = [
  {
    number: "01",
    title: "Quality Curriculum",
    description:
      "Learn through carefully structured courses designed around the skills and knowledge that matter in today's technology industry.",
  },
  {
    number: "02",
    title: "Expert Instructors",
    description:
      "Learn from experienced instructors who guide you with practical knowledge, industry insights, and personalized support.",
  },
  {
    number: "03",
    title: "Hands-On Learning",
    description:
      "Turn knowledge into real skills through practical exercises, projects, and learning experiences that prepare you for real work.",
  },
  {
    number: "04",
    title: "Career-Focused Growth",
    description:
      "Build confidence, strengthen your technical abilities, and develop the skills you need to move forward in your career.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-section">
      <div className="why-container">
        <div className="why-heading">
          <span className="why-label">
            <span className="why-label-dot"></span>
            Why Choose Us
          </span>

          <h2>
            Everything You Need
            <br />
            <span>to Succeed in Tech</span>
          </h2>

          <p>
            We combine quality curriculum, expert instruction, and practical
            experience to give you the best learning outcome.
          </p>
        </div>

        
      </div>
    </section>
  );
}