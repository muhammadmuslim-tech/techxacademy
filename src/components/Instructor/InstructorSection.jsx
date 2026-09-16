import { instructors } from "@/app/data/instructors.js";
import InstructorCard from "./InstructorCard.jsx";
import "./InstructorSection.css";

export default function InstructorSection() {
  return (
    <section
      className="instructor-section"
      id="instructors"
    >
      <div className="instructor-section-container">
        <div className="instructor-section-heading">
          <span className="instructor-section-label">
            Learn From The Experts
          </span>

          <h2>
            Meet Your
            <span> Instructors</span>
          </h2>

          <p>
            Learn directly from the instructors guiding your
            journey at TECH X ACADEMY. Build strong
            foundations, gain practical knowledge, and develop
            skills that prepare you for the world of technology.
          </p>
        </div>

        <div className="instructor-grid">
          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor.id}
              instructor={instructor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}