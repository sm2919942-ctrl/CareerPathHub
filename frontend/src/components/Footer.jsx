import { BookOpen } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">

        <div className="footer-logo">
          <BookOpen />
        </div>

        <div>
          <h2>CareerMart</h2>
          <p>
            Helping students understand education,
            careers and opportunities.
          </p>
        </div>

      </div>

      <div className="footer-links">
        <span>Courses</span>
        <span>Careers</span>
        <span>Exams</span>
        <span>Government Jobs</span>
        <span>About</span>
      </div>

      <p className="copyright">
        © 2026 CareerMart. Build Your Future.
      </p>

    </footer>
  );
}

export default Footer;