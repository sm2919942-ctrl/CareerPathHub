import {
  School,
  Calculator,
  Microscope,
  Landmark,
  Palette,
  GraduationCap
} from "lucide-react";

const qualifications = [
  {
    title: "After 10th",
    text: "Explore streams, diploma courses and career paths.",
    icon: <School size={30} />,
    className: "card-orange"
  },
  {
    title: "12th PCM",
    text: "Engineering, science, defence and technical careers.",
    icon: <Calculator size={30} />,
    className: "card-blue"
  },
  {
    title: "12th PCB",
    text: "Medical, pharmacy, nursing and life sciences.",
    icon: <Microscope size={30} />,
    className: "card-green"
  },
  {
    title: "Commerce",
    text: "Finance, banking, CA, management and business.",
    icon: <Landmark size={30} />,
    className: "card-purple"
  },
  {
    title: "Arts",
    text: "Law, civil services, media, design and teaching.",
    icon: <Palette size={30} />,
    className: "card-pink"
  },
  {
    title: "Graduation",
    text: "Jobs, higher studies and government opportunities.",
    icon: <GraduationCap size={30} />,
    className: "card-dark"
  }
];

function QualificationSection() {
  return (
    <section className="qualification-section">

      <div className="section-heading">
        <span className="mini-title">CHOOSE YOUR STAGE</span>

        <h2>
          Where Are You In Your
          <span> Education Journey?</span>
        </h2>

        <p>
          Select your current qualification and explore the best
          opportunities available for you.
        </p>
      </div>

      <div className="qualification-grid">

        {qualifications.map((item, index) => (
          <div className="qualification-card" key={index}>

            <div className={`qualification-icon ${item.className}`}>
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

            <button>
              Explore
              <span>→</span>
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default QualificationSection;