import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Pencil,
  Trophy,
  FileText
} from "lucide-react";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-decoration book-one">
        <BookOpen size={32} />
      </div>

      <div className="hero-decoration pencil-one">
        <Pencil size={28} />
      </div>

      <div className="hero-content">

        <div className="hero-badge">
          <GraduationCap size={18} />
          Your Career Starts Here
        </div>

        <h1>
          Confused About
          <span> What To Do Next?</span>
        </h1>

        <p>
          Discover courses, careers, exams and future opportunities
          after 10th, 12th and graduation — all in one place.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Careers
            <ArrowRight size={19} />
          </button>

          <button className="secondary-btn">
            Explore Courses
          </button>
        </div>

        <div className="hero-stats">

          <div>
            <strong>100+</strong>
            <span>Career Paths</span>
          </div>

          <div>
            <strong>200+</strong>
            <span>Courses</span>
          </div>

          <div>
            <strong>80+</strong>
            <span>Exams</span>
          </div>

        </div>

      </div>

      <div className="hero-visual">

        <div className="study-desk">

          <div className="paper paper-back"></div>

          <div className="exam-paper">

            <div className="paper-top">
              <span>CAREER EXAM</span>
              <FileText size={20} />
            </div>

            <h3>Find Your Direction</h3>

            <div className="question">
              <span>01</span>
              <div>
                <strong>What have you completed?</strong>
                <p>Select your current education level.</p>
              </div>
            </div>

            <div className="exam-options">
              <button>10th</button>
              <button>12th</button>
              <button>Graduate</button>
            </div>

            <div className="paper-line"></div>

            <div className="result-card">
              <Trophy size={21} />

              <div>
                <small>Your Goal</small>
                <strong>Discover Your Career</strong>
              </div>
            </div>

          </div>

          <div className="book-stack">
            <div className="book book-red">ENGINEERING</div>
            <div className="book book-blue">GOVT EXAMS</div>
            <div className="book book-yellow">CAREERS</div>
          </div>

          <div className="graduation-icon">
            <GraduationCap size={44} />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;