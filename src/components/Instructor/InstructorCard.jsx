import "./InstructorCard.css";

export default function InstructorCard({ instructor }) {
  return (
    <article className="instructor-card">
      <div className="instructor-card-accent"></div>

      <div className="instructor-card-content">
        <span className="instructor-designation">
          {instructor.designation}
        </span>

        <h3>{instructor.name}</h3>

        <p className="instructor-introduction">
          {instructor.introduction}
        </p>

        {instructor.courses?.length > 0 && (
          <div className="instructor-courses">
            <span className="courses-label">
              Teaching
            </span>

            <div className="course-list">
              {instructor.courses.map((course) => (
                <span key={course}>{course}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}