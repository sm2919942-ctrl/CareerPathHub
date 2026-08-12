import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  IndianRupee,
  GraduationCap,
  CheckCircle2,
  Building2,
  BriefcaseBusiness,
  Landmark,
  BookMarked,
  Heart,
  GitCompareArrows,
  ArrowRight,
  School,
  FileText,
  Award
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import careers from "../data/careers";

function CareerDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [saved, setSaved] = useState(false);

  const career = careers.find(
    item => item.id === Number(id)
  );
  const user = JSON.parse(
  localStorage.getItem("user")
);
const saveCareer = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first");
    navigate("/login");
    return;
  }

  const existingSaved =
    JSON.parse(localStorage.getItem("savedCareers")) || [];

  const alreadySaved = existingSaved.includes(career.id);

  if (alreadySaved) {
    alert("Career already saved");
    setSaved(true);
    return;
  }

  const updatedSaved = [
    ...existingSaved,
    career.id
  ];

  localStorage.setItem(
    "savedCareers",
    JSON.stringify(updatedSaved)
  );

  setSaved(true);

  alert("Career saved successfully!");
};

  if (!career) {
    return (
      <>
        <Navbar />

        <div className="career-not-found">
          <GraduationCap size={55} />

          <h2>Course not found</h2>

          <p>
            This course is currently unavailable.
          </p>

          <button onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="course-detail-page">

        <section className="course-detail-hero">

          <button
            className="detail-back-btn"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} />
            Back to catalogue
          </button>

          <div className="course-detail-grid">

            <div className="course-detail-main">

              <div className="course-breadcrumb">
                CAREER LIBRARY / {career.type.toUpperCase()}
              </div>

              <div className="course-number">
                COURSE
                <strong>
                  {String(career.id).padStart(2, "0")}
                </strong>
              </div>

              <h1>
                {career.title}
              </h1>

              <p className="course-hero-description">
                {career.description}
              </p>

              <div className="course-hero-buttons">

                <button
  className={
    saved
      ? "save-course-btn saved"
      : "save-course-btn"
  }
  onClick={saveCareer}
>
  <Heart
    size={18}
    fill={saved ? "currentColor" : "none"}
  />

  {saved ? "Saved" : "Save Course"}
</button>

                <button className="compare-course-btn">
                  <GitCompareArrows size={18} />
                  Compare
                </button>

              </div>

            </div>

            <div className="prospectus-book">

              <div className="book-binding"></div>

              <div className="prospectus-content">

                <div className="prospectus-top">
                  <GraduationCap size={30} />

                  <span>
                    CAREER MART
                  </span>
                </div>

                <div className="prospectus-year">
                  2026
                </div>

                <span className="prospectus-label">
                  ACADEMIC PROSPECTUS
                </span>

                <h3>
                  {career.shortTitle}
                </h3>

                <div className="prospectus-line"></div>

                <p>
                  Student Career Guide
                </p>

                <div className="prospectus-bottom">
                  EDUCATION • CAREER • FUTURE
                </div>

              </div>

            </div>

          </div>

        </section>

        <section className="course-facts">

          <div className="fact-card">
            <div className="fact-icon">
              <CalendarDays size={21} />
            </div>

            <div>
              <span>DURATION</span>
              <strong>{career.duration}</strong>
            </div>
          </div>

          <div className="fact-card">
            <div className="fact-icon">
              <IndianRupee size={21} />
            </div>

            <div>
              <span>ESTIMATED FEES</span>
              <strong>{career.fees}</strong>
            </div>
          </div>

          <div className="fact-card">
            <div className="fact-icon">
              <School size={21} />
            </div>

            <div>
              <span>COURSE TYPE</span>
              <strong>{career.type}</strong>
            </div>
          </div>

          <div className="fact-card">
            <div className="fact-icon">
              <Award size={21} />
            </div>

            <div>
              <span>LEVEL</span>
              <strong>Undergraduate</strong>
            </div>
          </div>

        </section>

        <section className="detail-content-layout">

          <div className="detail-main-content">

            <section className="academic-section">

              <div className="academic-heading">

                <div className="academic-heading-number">
                  01
                </div>

                <div>
                  <span>ADMISSION NOTES</span>
                  <h2>Eligibility</h2>
                </div>

              </div>

              <div className="notebook-box">

                <CheckCircle2 size={22} />

                <p>
                  {career.eligibility}
                </p>

              </div>

            </section>

            <section className="academic-section">

              <div className="academic-heading">

                <div className="academic-heading-number">
                  02
                </div>

                <div>
                  <span>ADMISSION ROUTE</span>
                  <h2>Entrance Exams</h2>
                </div>

              </div>

              <div className="exam-ticket-grid">

                {career.entranceExams.map(
                  (exam, index) => (
                    <div
                      className="exam-ticket"
                      key={exam}
                    >

                      <div>
                        <span>
                          EXAM
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <strong>{exam}</strong>
                      </div>

                      <FileText size={21} />

                    </div>
                  )
                )}

              </div>

            </section>

            <section className="academic-section">

              <div className="academic-heading">

                <div className="academic-heading-number">
                  03
                </div>

                <div>
                  <span>ACADEMIC INDEX</span>
                  <h2>What Will You Study?</h2>
                </div>

              </div>

              <div className="subject-notebook">

                <div className="notebook-margin"></div>

                {career.subjects.map(
                  (subject, index) => (
                    <div
                      className="notebook-row"
                      key={subject}
                    >
                      <span>
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <strong>{subject}</strong>

                      <BookOpen size={17} />
                    </div>
                  )
                )}

              </div>

            </section>

            <section className="academic-section">

              <div className="academic-heading">

                <div className="academic-heading-number">
                  04
                </div>

                <div>
                  <span>CAREER OUTCOME</span>
                  <h2>What Can You Become?</h2>
                </div>

              </div>

              <div className="job-profile-grid">

                {career.careerProfiles.map(
                  (profile, index) => (
                    <div
                      className="job-profile-card"
                      key={profile}
                    >
                      <span>
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <div className="job-profile-icon">
                        <BriefcaseBusiness size={21} />
                      </div>

                      <h3>{profile}</h3>

                      <p>
                        Career opportunity after
                        completing this course.
                      </p>
                    </div>
                  )
                )}

              </div>

            </section>

            <section className="academic-section">

              <div className="academic-heading">

                <div className="academic-heading-number">
                  05
                </div>

                <div>
                  <span>EMPLOYMENT</span>
                  <h2>Career Scope</h2>
                </div>

              </div>

              <div className="scope-grid">

                <div className="scope-board private-board">

                  <div className="scope-board-heading">
                    <Building2 size={26} />

                    <div>
                      <span>SECTOR A</span>
                      <h3>Private Sector</h3>
                    </div>
                  </div>

                  <ul>
                    {career.privateScope.map(
                      item => (
                        <li key={item}>
                          <ArrowRight size={14} />
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                </div>

                <div className="scope-board government-board">

                  <div className="scope-board-heading">
                    <Landmark size={26} />

                    <div>
                      <span>SECTOR B</span>
                      <h3>Government Sector</h3>
                    </div>
                  </div>

                  <ul>
                    {career.governmentScope.map(
                      item => (
                        <li key={item}>
                          <ArrowRight size={14} />
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                </div>

              </div>

            </section>

            <section className="academic-section">

              <div className="academic-heading">

                <div className="academic-heading-number">
                  06
                </div>

                <div>
                  <span>NEXT ACADEMIC STEP</span>
                  <h2>Higher Studies</h2>
                </div>

              </div>

              <div className="higher-study-list">

                {career.higherStudies.map(
                  (study, index) => (
                    <div key={study}>

                      <BookMarked size={20} />

                      <span>
                        OPTION{" "}
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <strong>{study}</strong>

                    </div>
                  )
                )}

              </div>

            </section>

          </div>

          <aside className="detail-sidebar">

            <div className="sidebar-paper">

              <div className="paper-pin"></div>

              <span className="sidebar-label">
                QUICK NOTE
              </span>

              <h3>
                Before Choosing This Course
              </h3>

              <p>
                Check your interests, eligibility,
                course syllabus, college quality,
                fees and career opportunities.
              </p>

              <div className="sidebar-rule"></div>

              <strong>
                Never select a course only because
                your friends are choosing it.
              </strong>

            </div>

          </aside>

        </section>

        <section className="roadmap-section">

          <div className="roadmap-heading">

            <span>
              YOUR ACADEMIC JOURNEY
            </span>

            <h2>
              From Student To Professional
            </h2>

            <p>
              Understand the complete journey before
              choosing your career path.
            </p>

          </div>

          <div className="roadmap-track">

            {career.roadmap.map(
              (item, index) => (
                <div
                  className="roadmap-step"
                  key={item.step}
                >

                  <div className="roadmap-marker">

                    <span>
                      {item.step}
                    </span>

                  </div>

                  {index !==
                    career.roadmap.length - 1 && (
                    <div className="roadmap-line"></div>
                  )}

                  <div className="roadmap-card">

                    <span>
                      STEP {item.step}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>

                </div>
              )
            )}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default CareerDetails;