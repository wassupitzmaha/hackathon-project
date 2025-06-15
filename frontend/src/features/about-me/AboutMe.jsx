import { FaLightbulb, FaUsers, FaRocket, FaHeart } from "react-icons/fa"; //importing specific icons

function AboutMe() {
  return (
    <div // Main container for the About Me section
      style={{
        background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)", //gradient
        borderRadius: "1.5rem",
        color: "#22223b",
        padding: "2.5rem 2rem",
        marginBottom: "2.5rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
        maxWidth: 900,
        margin: "0 auto",
        position: "relative",
        overflow: "hidden"
      }}
      className="text-center"
    >
      {/* background icons for visual */}
      <FaHeart
        size={64}
        color="#fff"
        style={{
          position: "absolute",
          top: -32,
          left: 32,
          opacity: 0.13,
          zIndex: 0
        }}
        aria-hidden="true"
      />
      <FaRocket
        size={90}
        color="#fff"
        style={{
          position: "absolute", //carefully set the position to absolute 
          bottom: -40,
          right: 24,
          opacity: 0.10, //low opacity
          zIndex: 0
        }}
        aria-hidden="true"
      />
      <h2
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 800,
          fontSize: "2.2rem",
          marginBottom: "2rem",
          letterSpacing: "0.02em",
          zIndex: 1,
          position: "relative"
        }}
      >
        Why Maha & Ali Are Deeply Invested in ProfessioNest
      </h2>
      <div style={{ textAlign: "left", maxWidth: 750, margin: "0 auto", zIndex: 1, position: "relative" }}>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}> {/* ul is for the entire list, everything inside this list doesn't have to be in speicfic order*/}
          <li style={{ marginBottom: "2.2rem" }}> {/* li is for individual items, each of the bullet points it in its own <li> */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.5rem" }}>
              <FaLightbulb color="#a259ff" size={28} />
              <span style={{ fontWeight: 700, fontSize: "1.15rem" }}>Personal Motivation and Experience</span>
            </div>
            <ul style={{ marginLeft: "2.2rem", marginTop: 0 }}>
              <li style={{ marginBottom: "0.4rem" }}>Ali and Maha are ambitious leaders focused on career growth.</li>
              <li style={{ marginBottom: "0.4rem" }}>They have experienced the difficulty of finding tech resources, mentorship, and industry insights, which are often scattered across many platforms.</li>
              <li>This fragmented process wastes time and can discourage progress toward career goals.</li>
            </ul>
          </li>
          <li style={{ marginBottom: "2.2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.5rem" }}>
              <FaUsers color="#8ec5fc" size={28} />
              <span style={{ fontWeight: 700, fontSize: "1.15rem" }}>Addressing a Real Need</span>
            </div>
            <ul style={{ marginLeft: "2.2rem", marginTop: 0 }}>
              <li style={{ marginBottom: "0.4rem" }}>They created ProfessioNest to centralize resources for aspiring tech professionals.</li>
              <li style={{ marginBottom: "0.4rem" }}>The platform streamlines access to quality materials, so learners spend less time searching and more time building skills.</li>
              <li>ProfessioNest empowers users to efficiently tailor their educational paths.</li>
            </ul>
          </li>
          <li style={{ marginBottom: "2.2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.5rem" }}>
              <FaHeart color="#e0c3fc" size={28} />
              <span style={{ fontWeight: 700, fontSize: "1.15rem" }}>Passion for Tech and Community Impact</span>
            </div>
            <ul style={{ marginLeft: "2.2rem", marginTop: 0 }}>
              <li style={{ marginBottom: "0.4rem" }}>Both have a strong interest in tech careers, especially front-end development, design, and backend integration.</li>
              <li style={{ marginBottom: "0.4rem" }}>Their technical and organizational skills help them understand and serve the needs of the tech community.</li>
              <li>They are committed to building a supportive ecosystem that lowers barriers and democratizes access to tech career resources.</li>
            </ul>
          </li>
          <li style={{ marginBottom: "2.2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.5rem" }}>
              <FaRocket color="#f16529" size={28} />
              <span style={{ fontWeight: 700, fontSize: "1.15rem" }}>Vision for the Future</span>
            </div>
            <ul style={{ marginLeft: "2.2rem", marginTop: 0 }}>
              <li style={{ marginBottom: "0.4rem" }}>Ali and Maha see ProfessioNest as a catalyst for changing how people approach tech career development.</li>
              <li style={{ marginBottom: "0.4rem" }}>By centralizing resources and fostering community, they aim to inspire confidence, efficiency, and belonging.</li>
              <li>Their investment is driven by personal experience and a desire to make a lasting impact on tech education.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
