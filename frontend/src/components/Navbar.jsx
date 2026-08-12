import { Link } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  Search,
  UserRound
} from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="logo-box">
          <BookOpen size={25} />
        </div>

        <div>
          <h2>CareerMart</h2>
          <span>Build Your Future</span>
        </div>
      </div>

      <div className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/careers?category=After10th">
    After 10th
  </Link>
  <Link to="/careers?category=12th">
    After 12th
  </Link>
  <Link to="/careers">Courses</Link>
  <Link to="/careers">Exams</Link>
  <Link to="/careers">Careers</Link>
</div>

      <div className="nav-actions">
        <button className="search-btn">
          <Search size={19} />
        </button>

      <Link to="/login" className="login-btn">
  <UserRound size={18} />
  Login
</Link>
      </div>
    </nav>
  );
}

export default Navbar;