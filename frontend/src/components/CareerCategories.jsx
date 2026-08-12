import {
  Code2,
  Stethoscope,
  Landmark,
  Shield,
  Scale,
  BriefcaseBusiness,
  Banknote,
  BookOpenCheck
} from "lucide-react";

const categories = [
  { title: "Engineering", icon: <Code2 /> },
  { title: "Medical", icon: <Stethoscope /> },
  { title: "Government", icon: <Landmark /> },
  { title: "Defence", icon: <Shield /> },
  { title: "Law", icon: <Scale /> },
  { title: "Management", icon: <BriefcaseBusiness /> },
  { title: "Banking", icon: <Banknote /> },
  { title: "Teaching", icon: <BookOpenCheck /> }
];

function CareerCategories() {
  return (
    <section className="career-section">

      <div className="section-heading">

        <span className="mini-title">
          CAREER LIBRARY
        </span>

        <h2>
          Explore Career
          <span> Departments</span>
        </h2>

      </div>

      <div className="career-grid">

        {categories.map((item, index) => (
          <div className="career-card" key={index}>

            <div className="career-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <span>Explore Department →</span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CareerCategories;