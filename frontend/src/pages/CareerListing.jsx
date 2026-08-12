import careers from "../data/careers";
import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Heart,
  Clock3,
  IndianRupee,
  GraduationCap,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  X
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const pageContent = {

  "10th": {
    eyebrow: "AFTER CLASS 10",
    title: "Choose What Comes",
    highlight: "After Your 10th.",
    description:
      "Compare streams, diploma programs and skill-based courses before choosing your next academic step."
  },

  pcm: {
    eyebrow: "12TH • SCIENCE • PCM",
    title: "Engineering Is Not",
    highlight: "Your Only Option.",
    description:
      "Explore engineering, science, defence, architecture and other career paths available after PCM."
  },

  pcb: {
    eyebrow: "12TH • SCIENCE • PCB",
    title: "Explore Careers Beyond",
    highlight: "Just MBBS.",
    description:
      "Discover medicine, pharmacy, nursing, research and healthcare opportunities after PCB."
  },

  commerce: {
    eyebrow: "12TH • COMMERCE",
    title: "Turn Numbers Into",
    highlight: "A Strong Career.",
    description:
      "Explore finance, accounting, banking, management and professional commerce programs."
  },

  arts: {
    eyebrow: "12TH • HUMANITIES",
    title: "Your Subjects Can Lead",
    highlight: "Almost Anywhere.",
    description:
      "Explore law, civil services, journalism, design, education and humanities careers."
  },

  graduation: {
    eyebrow: "AFTER GRADUATION",
    title: "Your Degree Is",
    highlight: "Only The Beginning.",
    description:
      "Explore higher studies, government examinations and professional career options."
  },

  all: {
    eyebrow: "CAREER LIBRARY",
    title: "Browse Every",
    highlight: "Career Path.",
    description:
      "Search courses and career opportunities from multiple educational backgrounds."
  }

};

function CareerListing() {

  const { category } = useParams();

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [selectedType, setSelectedType] = useState("All");

  const [saved, setSaved] = useState([]);

  const content =
    pageContent[category] || pageContent.all;

  const categoryCareers = useMemo(() => {

    if (category === "all") {
      return allCareers;
    }

    return allCareers.filter(
      (career) => career.category === category
    );

  }, [category]);

  const availableTypes = [
    "All",
    ...new Set(categoryCareers.map(item => item.type))
  ];

  const filteredCareers = categoryCareers.filter((career) => {

    const matchesSearch =
      career.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      career.career
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesType =
      selectedType === "All" ||
      career.type === selectedType;

    return matchesSearch && matchesType;
  });

  const toggleSaved = (id) => {

    setSaved((current) =>
      current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id]
    );

  };

  return (
    <>

      <Navbar />

      <main className="listing-page">

        <section className="listing-hero">

          <button
            className="back-home-btn"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={16} />
            Back to campus
          </button>

          <div className="listing-hero-grid">

            <div className="listing-intro">

              <span className="listing-eyebrow">
                {content.eyebrow}
              </span>

              <h1>
                {content.title}
                <span>{content.highlight}</span>
              </h1>

              <p>
                {content.description}
              </p>

            </div>

            <div className="library-card">

              <div className="library-card-top">

                <span>
                  CAREER LIBRARY
                </span>

                <BookOpen size={19} />

              </div>

              <div className="library-number">
                {String(categoryCareers.length).padStart(2, "0")}
              </div>

              <p>
                Available paths in this section
              </p>

              <div className="library-stamp">
                STUDENT EDITION • 2026
              </div>

            </div>

          </div>

        </section>

        <section className="career-shop">

          <div className="shop-toolbar">

            <div className="career-search">

              <Search size={19} />

              <input
                type="text"
                placeholder="Search course or career..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                >
                  <X size={17} />
                </button>
              )}

            </div>

            <div className="filter-label">

              <SlidersHorizontal size={18} />

              Filter paths

            </div>

          </div>

          <div className="type-filters">

            {availableTypes.map(type => (

              <button
                key={type}
                className={
                  selectedType === type
                    ? "type-filter active"
                    : "type-filter"
                }
                onClick={() =>
                  setSelectedType(type)
                }
              >
                {type}
              </button>

            ))}

          </div>

          <div className="shop-heading">

            <div>
              <span>
                COURSE CATALOGUE
              </span>

              <h2>
                Recommended Study Paths
              </h2>
            </div>

            <p>
              Showing {filteredCareers.length} of{" "}
              {categoryCareers.length} paths
            </p>

          </div>

          {filteredCareers.length > 0 ? (

            <div className="career-product-grid">

              {filteredCareers.map((career, index) => (

                <article
                  className="career-product-card"
                  key={career.id}
                >

                  <div className="card-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="product-top">

                    <div className="course-symbol">
                      {career.icon}
                    </div>

                    <button
                      className={
                        saved.includes(career.id)
                          ? "wishlist-btn saved"
                          : "wishlist-btn"
                      }
                      onClick={() =>
                        toggleSaved(career.id)
                      }
                    >
                      <Heart
                        size={18}
                        fill={
                          saved.includes(career.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>

                  </div>

                  {career.label && (
                    <span className="course-tag">
                      {career.label}
                    </span>
                  )}

                  <span className="course-type">
                    {career.type}
                  </span>

                  <h3>
                    {career.title}
                  </h3>

                  <p className="course-description">
                    {career.description}
                  </p>

                  <div className="subject-list">

                    {career.subjects.map(subject => (

                      <span key={subject}>
                        {subject}
                      </span>

                    ))}

                  </div>

                  <div className="course-data">

                    <div>
                      <Clock3 size={16} />
                      <span>
                        {career.duration}
                      </span>
                    </div>

                    <div>
                      <IndianRupee size={16} />
                      <span>
                        {career.fees}
                      </span>
                    </div>

                  </div>

                  <div className="career-result">

                    <div className="result-icon">
                      <BriefcaseBusiness size={18} />
                    </div>

                    <div>
                      <span>
                        CAREER OUTCOME
                      </span>

                      <strong>
                        {career.career}
                      </strong>
                    </div>

                  </div>

                  <div className="product-actions">

                    <button
                      className="details-btn"
                      onClick={() =>
                        navigate(
                          `/career/${career.id}`
                        )
                      }
                    >
                      View Details
                      <ArrowRight size={17} />
                    </button>

                    <button className="compare-btn">
                      Compare
                    </button>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="no-results">

              <GraduationCap size={42} />

              <h3>No career found</h3>

              <p>
                Try another search or remove the
                current filter.
              </p>

            </div>

          )}

        </section>

        <section className="guidance-banner">

          <div>

            <span>
              STILL EXPLORING?
            </span>

            <h2>
              Don't choose a course
              just because everyone else does.
            </h2>

            <p>
              Read eligibility, syllabus, career outcomes
              and future scope before making your decision.
            </p>

          </div>

          <div className="guidance-decoration">

            <Building2 size={85} />

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}

export default CareerListing;