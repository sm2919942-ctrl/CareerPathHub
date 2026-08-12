import {
  Clock3,
  GraduationCap,
  BriefcaseBusiness,
  Star,
  Heart
} from "lucide-react";

function CareerCard({ career }) {
  return (
    <div className="course-card">

      <div className="course-card-top">
        <span className="course-tag">{career.type}</span>

        <button className="wishlist-btn">
          <Heart size={19} />
        </button>
      </div>

      <div className="course-book">
        <div className="book-spine"></div>

        <div className="book-content">
          <span>CAREER GUIDE</span>
          <h3>{career.title}</h3>
          <small>{career.category}</small>
        </div>
      </div>

      <div className="course-rating">
        <Star size={15} fill="currentColor" />
        {career.rating}
      </div>

      <h2>{career.title}</h2>

      <p className="course-description">
        {career.description}
      </p>

      <div className="course-info">

        <div>
          <Clock3 size={17} />
          <span>{career.duration}</span>
        </div>

        <div>
          <GraduationCap size={17} />
          <span>{career.eligibility}</span>
        </div>

        <div>
          <BriefcaseBusiness size={17} />
          <span>{career.scope}</span>
        </div>

      </div>

      <button className="view-course-btn">
        View Career Guide
        <span>→</span>
      </button>

    </div>
  );
}

export default CareerCard;