import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  BookOpen,
  ChevronDown
} from "lucide-react";

import Navbar from "../components/Navbar";
import CareerCard from "../components/CareerCard";
import Footer from "../components/Footer";
import careers from "../data/careers";

function Careers() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "After 10th",
    "12th PCM",
    "12th PCB",
    "Commerce",
    "Arts"
  ];

  const filteredCareers = careers.filter((career) => {

    const categoryMatch =
      selectedCategory === "All" ||
      career.category === selectedCategory;

    const searchMatch =
      career.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      career.type
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <Navbar />

      <main className="careers-page">

        <section className="career-library-hero">

          <div className="library-text">

            <span className="library-label">
              DIGITAL CAREER LIBRARY
            </span>

            <h1>
              Find The Right
              <span> Career Book</span>
              For Your Future
            </h1>

            <p>
              Browse courses and careers according to your
              qualification, interests and future goals.
            </p>

          </div>

          <div className="library-books">

            <div className="big-book book-one-design">
              ENGINEERING
            </div>

            <div className="big-book book-two-design">
              MEDICAL
            </div>

            <div className="big-book book-three-design">
              GOVERNMENT
            </div>

            <div className="library-icon">
              <BookOpen size={55} />
            </div>

          </div>

        </section>

        <section className="career-marketplace">

          <div className="marketplace-top">

            <div>
              <span className="market-small">
                EXPLORE OPPORTUNITIES
              </span>

              <h2>
                Career Marketplace
              </h2>

              <p>
                {filteredCareers.length} career guides available
              </p>
            </div>

            <div className="career-search">

              <Search size={19} />

              <input
                type="text"
                placeholder="Search career, course..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

          </div>

          <div className="market-content">

            <aside className="career-sidebar">

              <div className="filter-title">
                <SlidersHorizontal size={18} />
                Filters
              </div>

              <div className="filter-group">

                <h3>Qualification</h3>

                {categories.map((category) => (

                  <button
                    key={category}
                    className={
                      selectedCategory === category
                        ? "filter-option active-filter"
                        : "filter-option"
                    }
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                  >
                    <span>{category}</span>
                    <span>›</span>
                  </button>

                ))}

              </div>

              <div className="exam-note">

                <span>STUDENT NOTE</span>

                <h3>
                  Not sure what to choose?
                </h3>

                <p>
                  Start by selecting your current qualification.
                </p>

              </div>

            </aside>

            <div className="career-results">

              <div className="results-bar">

                <p>
                  Showing
                  <strong> {filteredCareers.length} </strong>
                  results
                </p>

                <button>
                  Most Popular
                  <ChevronDown size={16} />
                </button>

              </div>

              <div className="courses-grid">

                {filteredCareers.length > 0 ? (

                  filteredCareers.map((career) => (
                    <CareerCard
                      key={career.id}
                      career={career}
                    />
                  ))

                ) : (

                  <div className="no-results">
                    <BookOpen size={45} />

                    <h2>No career found</h2>

                    <p>
                      Try another search or qualification.
                    </p>
                  </div>

                )}

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Careers;