import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  UserRound,
  Mail,
  LockKeyhole,
  Phone,
  School,
  Eye,
  EyeOff,
  UserPlus
} from "lucide-react";

function Signup() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    stream: "",
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

  const newUser = {
    id: Date.now(),
    name: formData.name,
    email: formData.email,
    mobile: formData.mobile,
    qualification: formData.qualification,
    stream: formData.stream,
    password: formData.password
  };

  // Demo account browser me save
  localStorage.setItem(
    "registeredUser",
    JSON.stringify(newUser)
  );

  alert("Account created successfully!");

  navigate("/login");
};

  return (
    <main className="auth-page signup-page">

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

        <div className="student-id-card">

          <div className="id-card-top">

            <div>
              <GraduationCap size={27} />
              <span>CAREERMART</span>
            </div>

            <strong>2026</strong>

          </div>

          <span className="id-small">
            STUDENT REGISTRATION CARD
          </span>

          <div className="id-photo">

            <UserRound size={52} />

          </div>

          <div className="id-lines">

            <div>
              <span>STUDENT NAME</span>
              <strong>
                Your Name Here
              </strong>
            </div>

            <div>
              <span>ACADEMIC STAGE</span>
              <strong>
                10th / 12th / Graduate
              </strong>
            </div>

          </div>

          <div className="id-barcode">

            || ||| || |||| | ||| || ||||

          </div>

          <small>
            Build Your Future
          </small>

        </div>

      </section>

      <section className="auth-right signup-right">

        <div className="auth-form-container signup-form">

          <div className="student-ticket">

            <School size={18} />

            <span>
              NEW REGISTRATION
            </span>

            <strong>
              FORM-01
            </strong>

          </div>

          <span className="auth-eyebrow">
            STUDENT ADMISSION FORM
          </span>

          <h1>
            Create Account
          </h1>

          <p className="auth-subtitle">
            Create your CareerMart account to save
            courses and compare career opportunities.
          </p>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            <div className="signup-grid">

              <div className="auth-field">

                <label>Full Name</label>

                <div className="auth-input">

                  <UserRound size={18} />

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              <div className="auth-field">

                <label>Mobile Number</label>

                <div className="auth-input">

                  <Phone size={18} />

                  <input
                    type="tel"
                    name="mobile"
                    placeholder="10-digit mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

            </div>

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

            <div className="signup-grid">

              <div className="auth-field">

                <label>
                  Current Qualification
                </label>

                <div className="auth-input">

                  <GraduationCap size={18} />

                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select
                    </option>

                    <option value="10th">
                      10th
                    </option>

                    <option value="12th">
                      12th
                    </option>

                    <option value="graduation">
                      Graduation
                    </option>

                  </select>

                </div>

              </div>

              <div className="auth-field">

                <label>Stream</label>

                <div className="auth-input">

                  <BookOpen size={18} />

                  <select
                    name="stream"
                    value={formData.stream}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select Stream
                    </option>

                    <option value="pcm">
                      PCM
                    </option>

                    <option value="pcb">
                      PCB
                    </option>

                    <option value="commerce">
                      Commerce
                    </option>

                    <option value="arts">
                      Arts
                    </option>

                    <option value="other">
                      Other
                    </option>

                  </select>

                </div>

              </div>

            </div>

            <div className="auth-field">

              <label>Create Password</label>

              <div className="auth-input">

                <LockKeyhole size={18} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Minimum 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                  minLength={6}
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

              <input
                type="checkbox"
                required
              />

              <span>
                I agree to the terms and privacy
                policy.
              </span>

            </label>

            <button
              className="auth-submit"
              type="submit"
            >
              Create Student Account
              <UserPlus size={18} />
            </button>

          </form>

          <div className="auth-divider">
            <span>ALREADY REGISTERED?</span>
          </div>

          <p className="auth-switch">
            Already have an account?
            <Link to="/login">
              Login Here
            </Link>
          </p>

        </div>

      </section>

    </main>
  );
}

export default Signup;