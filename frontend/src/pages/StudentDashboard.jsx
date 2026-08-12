import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  BookOpen,
  Heart,
  GraduationCap,
  GitCompareArrows,
  UserRound,
  ArrowRight,
  Clock3,
  School,
  FileText,
  LogOut
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function StudentDashboard() {

  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");

  const user = storedUser
    ? JSON.parse(storedUser)
    : null;


  useEffect(() => {

    if (!user) {
      navigate("/login");
    }

  }, [user, navigate]);


  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };


  const recentCourses = [
    {
      id: 1,
      title: "B.Tech Computer Science",
      type: "Engineering",
      duration: "4 Years"
    },
    {
      id: 6,
      title: "MBBS",
      type: "Medical",
      duration: "5.5 Years"
    }
  ];


  if (!user) {
    return null;
  }


  return (
    <>
      <Navbar />

      <main className="dashboard-page">

        {/* =========================
            DASHBOARD HERO
        ========================== */}

        <section className="dashboard-hero">

          <div>

            <span className="dashboard-eyebrow">
              STUDENT PORTAL
            </span>

            <h1>
              Welcome Back,
              <span> {user.name || "Student"}.</span>
            </h1>

            <p>
              Continue exploring courses, saved career
              paths and your academic journey.
            </p>

            <button
              className="dashboard-logout"
              onClick={handleLogout}
            >
              <LogOut size={16} />
              Logout
            </button>

          </div>


          {/* STUDENT ACCESS CARD */}

          <div className="student-pass">

            <div className="student-pass-top">

              <GraduationCap size={26} />

              <span>
                CAREERMART
              </span>

            </div>

            <small>
              STUDENT ACCESS CARD
            </small>

            <h3>
              {user.name || "Student"}
            </h3>

            <p>
              Academic Stage:{" "}
              {user.qualification || "N/A"}{" "}
              {user.stream || ""}
            </p>

            <div className="student-pass-code">
              CM-2026-
              {String(user.id || 0).padStart(3, "0")}
            </div>

          </div>

        </section>


        {/* =========================
            DASHBOARD CONTENT
        ========================== */}

        <section className="dashboard-content">


          {/* DASHBOARD STATS */}

          <div className="dashboard-stats">

            <Link
              to="/saved"
              className="dashboard-stat-card"
            >

              <div className="dashboard-stat-icon">
                <Heart size={24} />
              </div>

              <div>

                <span>
                  SAVED
                </span>

                <strong>
                  03
                </strong>

                <p>
                  Saved Careers
                </p>

              </div>

            </Link>


            <div className="dashboard-stat-card">

              <div className="dashboard-stat-icon">
                <GitCompareArrows size={24} />
              </div>

              <div>

                <span>
                  COMPARE
                </span>

                <strong>
                  02
                </strong>

                <p>
                  Courses Selected
                </p>

              </div>

            </div>


            <div className="dashboard-stat-card">

              <div className="dashboard-stat-icon">
                <BookOpen size={24} />
              </div>

              <div>

                <span>
                  EXPLORED
                </span>

                <strong>
                  12
                </strong>

                <p>
                  Career Paths
                </p>

              </div>

            </div>


            <div className="dashboard-stat-card">

              <div className="dashboard-stat-icon">
                <FileText size={24} />
              </div>

              <div>

                <span>
                  EXAMS
                </span>

                <strong>
                  05
                </strong>

                <p>
                  Entrance Exams
                </p>

              </div>

            </div>

          </div>


          {/* =========================
              MAIN GRID
          ========================== */}

          <div className="dashboard-grid">


            {/* RECENT COURSES */}

            <section className="dashboard-panel">

              <div className="dashboard-panel-heading">

                <div>

                  <span>
                    CONTINUE READING
                  </span>

                  <h2>
                    Recently Explored
                  </h2>

                </div>

                <Link to="/careers/all">
                  View All
                </Link>

              </div>


              <div className="recent-course-list">

                {recentCourses.map(
                  (course, index) => (

                    <Link
                      to={`/career/${course.id}`}
                      className="recent-course"
                      key={course.id}
                    >

                      <div className="recent-number">

                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}

                      </div>


                      <div className="recent-course-info">

                        <span>
                          {course.type}
                        </span>

                        <h3>
                          {course.title}
                        </h3>

                        <p>

                          <Clock3 size={14} />

                          {course.duration}

                        </p>

                      </div>


                      <ArrowRight size={19} />

                    </Link>

                  )
                )}

              </div>

            </section>


            {/* =========================
                STUDENT PROFILE
            ========================== */}

            <aside className="dashboard-profile">

              <div className="profile-notebook">

                <div className="profile-pin"></div>

                <span>
                  STUDENT PROFILE
                </span>


                <div className="profile-avatar">

                  <UserRound size={38} />

                </div>


                <h3>
                  {user.name || "Student"}
                </h3>


                <p>
                  {user.email || "No Email"}
                </p>


                <div className="profile-details">

                  <div>

                    <span>
                      QUALIFICATION
                    </span>

                    <strong>
                      {user.qualification || "N/A"}
                    </strong>

                  </div>


                  <div>

                    <span>
                      STREAM
                    </span>

                    <strong>
                      {user.stream || "N/A"}
                    </strong>

                  </div>

                </div>


                <button>
                  Edit Profile
                </button>

              </div>

            </aside>

          </div>


          {/* =========================
              EXPLORE CAREERS
          ========================== */}

          <section className="dashboard-explore">

            <div className="dashboard-explore-content">

              <School size={39} />


              <div>

                <span>
                  CAREER LIBRARY
                </span>

                <h2>
                  Haven't found your path yet?
                </h2>

                <p>
                  Browse career options based on your
                  current education stage.
                </p>

              </div>

            </div>


            <Link
              to={
                user.stream
                  ? `/careers/${user.stream.toLowerCase()}`
                  : "/careers/all"
              }
              className="dashboard-explore-btn"
            >

              Explore Careers

              <ArrowRight size={18} />

            </Link>

          </section>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default StudentDashboard;