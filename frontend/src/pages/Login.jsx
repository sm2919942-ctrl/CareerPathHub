import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  LogIn,
  School
} from "lucide-react";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const savedUser = localStorage.getItem(
    "registeredUser"
  );

  if (!savedUser) {
    alert("No account found. Please create an account first.");
    navigate("/signup");
    return;
  }

  const registeredUser = JSON.parse(savedUser);

  if (
    registeredUser.email === formData.email &&
    registeredUser.password === formData.password
  ) {

    const loggedInUser = {
      id: registeredUser.id,
      name: registeredUser.name,
      email: registeredUser.email,
      mobile: registeredUser.mobile,
      qualification: registeredUser.qualification,
      stream: registeredUser.stream
    };

    localStorage.setItem(
      "user",
      JSON.stringify(loggedInUser)
    );

    alert("Login successful!");

    navigate("/dashboard");

  } else {

    alert("Invalid email or password.");

  }
};
  return (
    <main className="auth-page">

      <section className="auth-left">

        <button
          className="auth-back"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={17} />
          Back to CareerMart
        </button>

        <div className="auth-brand">

          <div className="auth-logo">
            <BookOpen size={27} />
          </div>

          <div>
            <h2>CareerMart</h2>
            <span>Student Career Portal</span>
          </div>

        </div>

        <div className="admission-cover">

          <div className="admission-binding"></div>

          <div className="admission-content">

            <div className="admission-header">
              <GraduationCap size={35} />

              <span>
                ACADEMIC SESSION
                <strong>2026–27</strong>
              </span>
            </div>

            <div className="admission-number">
              STUDENT
              <strong>PORTAL</strong>
            </div>

            <span className="admission-small">
              CAREER & EDUCATION GUIDANCE
            </span>

            <h1>
              Your Future
              Starts With
              The Right Choice.
            </h1>

            <p>
              Explore courses, compare career paths and save
              opportunities for your future.
            </p>

            <div className="admission-footer">
              CAREERMART • STUDENT EDITION
            </div>

          </div>

        </div>

      </section>

      <section className="auth-right">

        <div className="auth-form-container">

          <div className="student-ticket">

            <School size={18} />

            <span>
              STUDENT ACCESS
            </span>

            <strong>
              CM-2026
            </strong>

          </div>

          <span className="auth-eyebrow">
            WELCOME BACK
          </span>

          <h1>
            Student Login
          </h1>

          <p className="auth-subtitle">
            Continue exploring your saved courses,
            career paths and future opportunities.
          </p>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            <div className="auth-field">

              <label>Email Address</label>

              <div className="auth-input">

                <Mail size={18} />

                <input
                  type="email"
                  name="email"
                  placeholder="student@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            <div className="auth-field">

              <div className="auth-label-row">

                <label>Password</label>

                <button
                  type="button"
                  className="forgot-btn"
                >
                  Forgot Password?
                </button>

              </div>

              <div className="auth-input">

                <LockKeyhole size={18} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="password-eye"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword
                    ? <EyeOff size={17} />
                    : <Eye size={17} />
                  }
                </button>

              </div>

            </div>

            <label className="remember-row">

              <input type="checkbox" />

              <span>
                Keep me signed in
              </span>

            </label>

            <button
              className="auth-submit"
              type="submit"
            >
              Login to Portal
              <LogIn size={18} />
            </button>

          </form>

          <div className="auth-divider">
            <span>NEW STUDENT?</span>
          </div>

          <p className="auth-switch">
            Don't have an account?
            <Link to="/signup">
              Create Student Account
            </Link>
          </p>

          <div className="auth-note">

            <div></div>

            <p>
              Your account helps you save and compare
              courses. CareerMart does not decide your
              career for you.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Login;