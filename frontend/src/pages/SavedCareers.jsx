import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  Heart,
  Trash2,
  Clock3,
  IndianRupee,
  BriefcaseBusiness,
  ArrowRight,
  BookMarked
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import careers from "../data/careers";

function SavedCareers() {

  const [savedIds, setSavedIds] =
    useState([1, 2, 6]);

  const savedCareers = careers.filter(
    career => savedIds.includes(career.id)
  );

  const removeCareer = (id) => {

    setSavedIds(
      savedIds.filter(item => item !== id)
    );

  };

  return (
    <>
      <Navbar />

      <main className="saved-page">

        <section className="saved-header">

          <Link
            to="/dashboard"
            className="saved-back"
          >
            <ArrowLeft size={16} />
            Student Dashboard
          </Link>

          <div className="saved-heading">

            <div>

              <span>
                MY CAREER LIBRARY
              </span>

              <h1>
                Saved Career Paths
              </h1>

              <p>
                Courses and careers you've bookmarked
                for later.
              </p>

            </div>

            <div className="saved-count">

              <Heart size={22} />

              <strong>
                {savedCareers.length}
              </strong>

              <span>
                SAVED ITEMS
              </span>

            </div>

          </div>

        </section>

        <section className="saved-content">

          {savedCareers.length > 0 ? (

            <div className="saved-grid">

              {savedCareers.map(
                (career, index) => (

                  <article
                    className="saved-card"
                    key={career.id}
                  >

                    <div className="saved-card-top">

                      <span className="saved-index">
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      <button
                        onClick={() =>
                          removeCareer(career.id)
                        }
                      >
                        <Trash2 size={17} />
                      </button>

                    </div>

                    <div className="saved-bookmark">

                      <BookMarked size={23} />

                    </div>

                    <span className="saved-type">
                      {career.type}
                    </span>

                    <h2>
                      {career.title}
                    </h2>

                    <p>
                      {career.description}
                    </p>

                    <div className="saved-meta">

                      <div>
                        <Clock3 size={15} />
                        {career.duration}
                      </div>

                      <div>
                        <IndianRupee size={15} />
                        {career.fees}
                      </div>

                    </div>

                    <div className="saved-career-outcome">

                      <BriefcaseBusiness size={18} />

                      <div>
                        <span>
                          CAREER PATH
                        </span>

                        <strong>
                          {
                            career
                              .careerProfiles?.[0]
                          }
                        </strong>
                      </div>

                    </div>

                    <Link
                      to={`/career/${career.id}`}
                      className="saved-view-btn"
                    >
                      View Course
                      <ArrowRight size={17} />
                    </Link>

                  </article>

                )
              )}

            </div>

          ) : (

            <div className="saved-empty">

              <Heart size={47} />

              <h2>
                Your career library is empty
              </h2>

              <p>
                Save interesting courses while
                exploring CareerMart.
              </p>

              <Link to="/careers/all">
                Explore Careers
              </Link>

            </div>

          )}

        </section>

      </main>

      <Footer />
    </>
  );
}

export default SavedCareers;