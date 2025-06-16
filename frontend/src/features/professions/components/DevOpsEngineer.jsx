import React, { useEffect, useState } from "react"; // Imports React, the core library for building UI components.
// useEffect is a hook for performing side effects (like data fetching) in functional components.
// useState is a hook for adding state (data that changes over time) to functional components.

import Card from "react-bootstrap/Card"; // Imports the Card component from React-Bootstrap for displaying content in a card format.
import Row from "react-bootstrap/Row"; // Imports the Row component for creating horizontal groups in Bootstrap's grid system.
import Col from "react-bootstrap/Col"; // Imports the Col component for creating columns within a Row in Bootstrap's grid system.
import Modal from "react-bootstrap/Modal"; // Imports the Modal component for creating pop-up dialogs.
import Button from "react-bootstrap/Button"; // Imports the Button component from React-Bootstrap.
import { // Imports specific icons from the Font Awesome icon library (via react-icons/fa).
  FaCloud, // Cloud icon (used for AWS).
  FaTools, // Tools icon (used for Azure and general DevOps).
  FaCodeBranch, // Code Branch icon (used for CI/CD).
  FaBook, // Book icon (for articles section in modal).
  FaChalkboardTeacher, // Chalkboard Teacher icon (for courses section in modal).
  FaVideo, // Video icon (for YouTube section in modal).
} from "react-icons/fa";

// --- Static Data Definitions ---

// skillResources is a JavaScript object (like a dictionary) that holds structured data for each skill.
// The keys are skill names (e.g., "AWS", "Azure", "CI/CD").
// Each value is another object containing arrays of related learning resources (articles, courses, youtube videos).
const skillResources = {
  "AWS": { // Data for the "AWS" skill.
    articles: [ // An array of article objects, each with a title and URL.
      { title: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
      {
        title: "AWS Getting Started Resource Center",
        url: "https://aws.amazon.com/getting-started/resources/",
      },
    ],
    courses: [ // An array of course objects.
      {
        title: "AWS Cloud Practitioner Essentials (Coursera)",
        url: "https://www.coursera.org/learn/aws-cloud-practitioner-essentials",
      },
      {
        title: "freeCodeCamp: AWS Certified Cloud Practitioner Full Course",
        url: "https://www.youtube.com/watch?v=3hLmDS179YE", // Placeholder URL
      },
    ],
    youtube: [ // An array of YouTube video objects.
      {
        title: "AWS Tutorial for Beginners",
        url: "https://www.youtube.com/watch?v=ulprqHHWlng", // Placeholder URL
      },
    ],
  },
  "Azure": { // Data for the "Azure" skill, structured similarly to AWS.
    articles: [
      {
        title: "Microsoft Azure Documentation",
        url: "https://docs.microsoft.com/en-us/azure/",
      },
      {
        title: "Azure Fundamentals Learning Path",
        url: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/",
      },
    ],
    courses: [
      {
        title: "Azure Fundamentals (Coursera)",
        url: "https://www.coursera.org/learn/microsoft-azure-fundamentals",
      },
      {
        title: "freeCodeCamp: Azure Fundamentals Full Course",
        url: "https://www.youtube.com/watch?v=3gkPEwQYxXw", // Placeholder URL
      },
    ],
    youtube: [
      {
        title: "Azure Tutorial for Beginners",
        url: "https://www.youtube.com/watch?v=izL4D1qX1fw", // Placeholder URL
      },
    ],
  },
  "CI/CD": { // Data for the "CI/CD" skill, structured similarly.
    articles: [
      {
        title: "What is CI/CD? (Red Hat)",
        url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
      },
      {
        title: "Atlassian: CI/CD Explained",
        url: "https://www.atlassian.com/continuous-delivery/ci-vs-ci-vs-cd",
      },
    ],
    courses: [
      {
        title: "Coursera: Continuous Integration and Continuous Deployment",
        url: "https://www.coursera.org/learn/continuous-integration-continuous-deployment",
      },
      {
        title: "Udacity: CI/CD Pipeline with Jenkins",
        url: "https://www.udacity.com/course/ci-cd-pipeline-with-jenkins--ud282",
      },
    ],
    youtube: [
      {
        title: "CI/CD Pipeline Tutorial",
        url: "https://www.youtube.com/watch?v=1hHMwLxN6EM", // Placeholder URL
      },
    ],
  },
};

// cardColors is a JavaScript object that maps skill names to CSS linear-gradient values.
// These are used to provide distinct background colors for each skill card.
const cardColors = {
  "AWS": "linear-gradient(120deg, #FF9900 0%, #FFB84D 100%)", // AWS brand color gradient.
  "Azure": "linear-gradient(120deg, #0078D7 0%, #00A4EF 100%)", // Azure brand color gradient.
  "CI/CD": "linear-gradient(120deg, #6f42c1 0%, #a475f9 100%)", // Purple gradient for CI/CD.
};

// heroStyle is a JavaScript object defining inline CSS styles for the main header/hero section.
const heroStyle = {
  background: // A dark, subtle gradient background for the hero section.
    "linear-gradient(120deg, #0f2027, #203a43, #2c5364)",
  color: "#fff", // White text color for readability against the dark background.
  padding: "3.5rem 1rem 2.5rem", // Padding around the content.
  borderRadius: "1.5rem", // Rounded corners for a softer look.
  marginBottom: "2.5rem", // Space below the hero section.
  textAlign: "center", // Centers the text horizontally.
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)", // A strong shadow for a "floating" effect.
};

// --- DevOpsEngineer Functional Component ---

function DevOpsEngineer() {
  // State variable to store the list of skills fetched from the backend.
  const [skills, setSkills] = useState([]);
  // State variable to track if data is still being loaded (true initially).
  const [loading, setLoading] = useState(true);
  // State variable to store any error message if fetching fails.
  const [error, setError] = useState(null);
  // State variable to store the name of the skill currently selected by the user (for the modal).
  const [selectedSkill, setSelectedSkill] = useState(null);

  // useEffect hook to perform data fetching when the component first mounts.
  // The empty dependency array `[]` ensures this effect runs only once after the initial render.
  useEffect(() => {
    // Initiates a network request to your backend API endpoint for DevOps Engineer skills.
    fetch("/api/v1/DevOpsEngineer")
      .then((res) => {
        // Checks if the network response was successful (HTTP status 200-299).
        if (!res.ok) throw new Error("Network response was not ok"); // Throws an error if response is not OK.
        return res.json(); // Parses the JSON body of the response.
      })
      .then((data) => {
        // Checks if data was returned and if the 'skills' property is an array.
        if (data.length > 0 && Array.isArray(data[0].skills)) {
          setSkills(data[0].skills); // Updates the 'skills' state with the fetched array of skills.
        } else {
          setError("No skills found"); // Sets an error if skills data is not in expected format.
        }
        setLoading(false); // Sets loading to false as the data fetching is complete.
      })
      .catch((err) => {
        // Catches any errors that occurred during the fetch operation.
        setError(err.message); // Sets the error state with the error message.
        setLoading(false); // Sets loading to false even if there was an error.
      });
  }, []); // Empty dependency array means this effect runs only ONCE when the component mounts.

  // Conditional rendering: If data is still loading, display a loading message.
  if (loading)
    return (
      <div className="text-center py-5 fs-4 text-secondary">Loading...</div>
    );
  // Conditional rendering: If an error occurred, display the error message.
  if (error)
    return (
      <div className="text-center py-5 text-danger fw-bold fs-5">{error}</div>
    );

  // Helper function to return the correct icon component based on the skill name.
  const getIcon = (skill) => {
    switch (skill) { // Uses a switch statement to match skill names.
      case "AWS": // If skill is "AWS".
        return <FaCloud />; // Return the cloud icon.
      case "Azure": // If skill is "Azure".
        return <FaTools />; // Return the tools icon.
      case "CI/CD": // If skill is "CI/CD".
        return <FaCodeBranch />; // Return the code branch icon.
      default: // If no match is found (shouldn't happen with current data).
        return null; // Return null (no icon).
    }
  };

  return (
    // The main container div for the component.
    <div>
      {/* --- Hero Section Display --- */}
      <section style={heroStyle}> {/* Applies the predefined hero section styles. */}
        <FaTools size={64} className="mb-3" /> {/* Displays a large tools icon. */}
        <h1 className="display-5 fw-bold mb-3">DevOps Engineer Skills</h1> {/* Main title for the page. */}
        <p className="lead mx-auto" style={{ maxWidth: 720 }}> {/* Lead paragraph with a max width for readability. */}
          <b>What Do DevOps Engineers Do?</b> {/* Bolded question. */}
          <br /> {/* Line break. */}
          DevOps engineers bridge the gap between software development and IT
          operations. They automate, monitor, and streamline processes for
          deploying, scaling, and managing applications and infrastructure,
          ensuring reliability, scalability, and rapid delivery of software
          products. {/* Description of a DevOps Engineer's role. */}
        </p>
      </section>

      {/* --- Skills Cards Display --- */}
      {/* Row component for a responsive grid of skill cards. */}
      {/* xs=1, sm=2, md=3 means 1 column on extra small, 2 on small, 3 on medium screens and up. */}
      {/* g-4 adds gutter (spacing) between grid columns. */}
      <Row xs={1} sm={2} md={3} className="g-4">
        {/* Maps over the 'skills' array (fetched from backend) to render a Card for each skill. */}
        {skills.map((skill, idx) => (
          <Col key={idx}> {/* Col component for each skill card, using index as a unique key for React. */}
            <Card
              className="h-100 text-center shadow-sm skill-card" // Bootstrap classes for full height, centered text, shadow, and custom class for hover.
              onClick={() => setSelectedSkill(skill)} // When card is clicked, set the selected skill state (opens modal).
              style={{ // Inline styles for the card.
                cursor: "pointer", // Changes cursor to a pointer to indicate it's clickable.
                background: cardColors[skill] || "#f8f9fa", // Sets background color using the 'cardColors' map; fallbacks to light grey.
                color: cardColors[skill] ? "#fff" : "#000", // Sets text color to white if gradient is present, else black.
                borderRadius: "1.5rem", // Rounded corners.
                transition: "transform 0.2s, box-shadow 0.3s", // Smooth transition for hover effects.
                boxShadow: "0 6px 18px rgba(0,0,0,0.12)", // Initial shadow.
              }}
              // Event handlers for mouse hover effects (making the card lift and shadow expand).
              onMouseEnter={(e) => { // When mouse enters the card.
                e.currentTarget.style.transform = "translateY(-7px) scale(1.05)"; // Lifts and slightly scales the card.
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.25)"; // Darkens and expands the shadow.
              }}
              onMouseLeave={(e) => { // When mouse leaves the card.
                e.currentTarget.style.transform = "scale(1)"; // Resets the card's transform.
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)"; // Resets the shadow.
              }}
            >
              <Card.Body className="d-flex flex-column justify-content-center"> {/* Card body for content, using flexbox for centering. */}
                <Card.Title className="fw-bold fs-4 d-flex justify-content-center align-items-center gap-2"> {/* Title with bold font, large size, centered icon and text. */}
                  {getIcon(skill)} {/* Renders the appropriate icon for the skill using the helper function. */}
                  {skill} {/* Displays the skill name. */}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* --- Modal for Displaying Skill Resources --- */}
      <Modal
        show={!!selectedSkill} // Controls modal visibility: true if 'selectedSkill' has a value, false otherwise.
        onHide={() => setSelectedSkill(null)} // Function to call when modal is closed (resets selectedSkill to null).
        centered // Centers the modal vertically on the screen.
        size="lg" // Sets the modal to a large size.
        aria-labelledby="devops-skill-modal" // Accessibility attribute to associate the modal title with the modal.
      >
        <Modal.Header closeButton> {/* Modal header with a close button. */}
          <Modal.Title id="devops-skill-modal"> {/* Modal title for accessibility. */}
            Resources for <span className="fw-bold">{selectedSkill}</span> {/* Displays the selected skill name in the title. */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> {/* Modal body for the main content (resources). */}
          {selectedSkill && skillResources[selectedSkill] && ( // Conditionally renders content only if a skill is selected AND resources exist for it.
            <> {/* React Fragment to group multiple elements without adding an extra DOM node. */}
              {/* Articles Section */}
              <h5 className="text-primary d-flex align-items-center gap-2 mb-2"> {/* Heading for articles, with primary color and icon. */}
                <FaBook /> {/* Book icon. */}
                Articles
              </h5>
              <ul className="ps-3"> {/* Unordered list for articles, with padding-start. */}
                {/* Maps over the 'articles' array for the selected skill to display each article. */}
                {skillResources[selectedSkill].articles.map((item, idx) => (
                  <li key={idx} className="mb-1"> {/* List item with a unique key and bottom margin. */}
                    <a // Anchor tag for the link.
                      href={item.url} // Sets the URL for the link.
                      target="_blank" // Opens the link in a new tab.
                      rel="noopener noreferrer" // Security best practice for links opening in new tabs.
                      className="text-decoration-none fw-medium" // Bootstrap classes to remove underline and set font weight.
                      style={{ color: "#333" }} // Custom text color for the link.
                    >
                      ▸ {item.title} {/* Displays a right-pointing triangle and the article title. */}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Courses Section (structured identically to Articles) */}
              <h5 className="text-primary d-flex align-items-center gap-2 mt-4 mb-2">
                <FaChalkboardTeacher />
                Courses
              </h5>
              <ul className="ps-3">
                {skillResources[selectedSkill].courses.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none fw-medium"
                      style={{ color: "#333" }}
                    >
                      ▸ {item.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* YouTube Tutorials Section (structured identically) */}
              <h5 className="text-primary d-flex align-items-center gap-2 mt-4 mb-2">
                <FaVideo />
                YouTube Tutorials
              </h5>
              <ul className="ps-3">
                {skillResources[selectedSkill].youtube.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none fw-medium"
                      style={{ color: "#333" }}
                    >
                      ▸ {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Modal.Body>
        <Modal.Footer> {/* Modal footer for action buttons. */}
          <Button
            variant="outline-secondary" // Outline style for the button.
            onClick={() => setSelectedSkill(null)} // Closes the modal by resetting selectedSkill.
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* --- Inline Style Block for Hover Effects --- */}
      {/* This <style> tag directly injects CSS rules into the document. */}
      {/* It's used here for complex hover effects that are harder to manage purely with inline styles. */}
      <style>{`
        .skill-card { /* Styles for elements with the 'skill-card' class. */
          transition: transform 0.2s, box-shadow 0.3s; /* Smooth transition for transform and box-shadow changes. */
        }
        .skill-card:hover, .skill-card:focus { /* Styles applied when a skill card is hovered or focused. */
          transform: translateY(-7px) scale(1.05); /* Lifts the card up by 7px and slightly increases its size. */
          box-shadow: 0 12px 32px rgba(0,0,0,0.25); /* Makes the shadow larger and darker. */
        }
      `}</style>
    </div>
  );
}

export default DevOpsEngineer; // Exports the DevOpsEngineer component so it can be used in other parts of the application (for example in App.js routing).