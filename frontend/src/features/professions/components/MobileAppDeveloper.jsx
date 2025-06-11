import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const skillResources = {
  Swift: {
    articles: [
      {
        title: "Welcome to Develop in Swift Tutorials – Apple Developer",
        url: "https://developer.apple.com/tutorials/develop-in-swift/welcome-to-develop-in-swift-tutorials",
      },
      {
        title: "Getting Started – Swift.org",
        url: "https://swift.org/getting-started/",
      },
    ],
    courses: [
      {
        title:
          "iOS & Swift - The Complete iOS App Development Bootcamp (Udemy)",
        url: "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
      },
      {
        title:
          "Swift 5 iOS Application Developer Specialization (Coursera & LearnQuest)",
        url: "https://www.coursera.org/specializations/swift-5-ios-app-developer",
      },
    ],
    youtube: [
      {
        title:
          "Swift Programming For Beginners 2025 | Swift Crash Course 2025 | Swift Tutorial",
        url: "https://www.youtube.com/watch?v=JJ-AandyU5o",
      },
      {
        title: "CodeWithChris - iOS & Swift Tutorials",
        url: "https://www.youtube.com/codewithchris",
      },
    ],
  },
  Kotlin: {
    articles: [
      {
        title: "Get started with Kotlin | Kotlin Documentation",
        url: "https://kotlinlang.org/docs/getting-started.html",
      },
      {
        title: "Kotlin Tutorial – Tutorialspoint",
        url: "https://www.tutorialspoint.com/kotlin/index.htm",
      },
    ],
    courses: [
      {
        title: "The Complete Kotlin Developer Course – Udemy",
        url: "https://www.udemy.com/course/kotlin-course/",
      },
      {
        title: "Kotlin for Java Developers – Coursera",
        url: "https://www.coursera.org/learn/kotlin-for-java-developers",
      },
    ],
    youtube: [
      {
        title:
          "Kotlin Crash Course for Beginners to Advanced (2025) – Programming with Rana Waqas",
        url: "https://www.youtube.com/watch?v=z3mbzwPkDH4",
      },
      {
        title: "Master Kotlin Programming in 2025: Complete Guide",
        url: "https://www.youtube.com/watch?v=h6JJ04tMidQ",
      },
    ],
  },
  ReactNative: {
    articles: [
      {
        title: "Learn the Basics – React Native Official Documentation",
        url: "https://reactnative.dev/docs/tutorial",
      },
      {
        title:
          "The Ultimate Guide to React Native Optimization (2025) – Reddit",
        url: "https://www.reddit.com/r/reactnative/comments/1jfl3sg/the_ultimate_guide_to_react_native_optimization/",
      },
    ],
    courses: [
      {
        title:
          "The Best React Native Course 2025 (From Beginner To Expert) – Udemy",
        url: "https://www.udemy.com/course/the-best-react-native-course/",
      },
      {
        title: "Complete React Native Developer 2025 – Zero To Mastery",
        url: "https://zerotomastery.io/courses/learn-react-native/",
      },
    ],
    youtube: [
      {
        title: "The Best React Native Course 2025",
        url: "https://www.youtube.com/watch?v=2vLP9gVqI-Y",
      },
      {
        title:
          "React Native Course for Beginners in 2025 | Build a Full Stack React Native App",
        url: "https://www.youtube.com/watch?v=f8Z9JyB2EIE",
      },
    ],
  },
};

function MobileAppDeveloper() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    fetch("api/v1/MobileAppDeveloper")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data.length > 0 && Array.isArray(data[0].skills)) {
          setSkills(data[0].skills);
        } else {
          setError("No skills found");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
    setLoading(false);
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <h2>Mobile App Developers</h2>
      <p>
        <b>What Do Mobile App Developers do?</b>
        <p>
          Mobile app developers design, build, and maintain software
          applications specifically for smartphones and tablets, using languages
          like Swift, Kotlin, or cross-platform frameworks such as React Native.
          They collaborate with teams to create user-friendly interfaces, test
          for bugs, and ensure apps perform well across different devices and
          operating systems.
        </p>
      </p>
      <Row xs={1} sm={2} md={3} className="g-4 mt-3">
        {skills.map((skill, idx) => (
          <Col key={idx}>
            <Card
              className="h-100 text-center shadow-sm"
              onClick={() => setSelectedSkill(skill)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <Card.Title>{skill}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedSkill && skillResources[selectedSkill] && (
        <div className="mt-4">
          <h3>Resources for {selectedSkill}</h3>
          <h5>Articles</h5>
          <ul>
            {skillResources[selectedSkill].articles.map((item, idx) => (
              <li key={idx}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <h5>Courses</h5>
          <ul>
            {skillResources[selectedSkill].courses.map((item, idx) => (
              <li key={idx}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <h5>YouTube Tutorials</h5>
          <ul>
            {skillResources[selectedSkill].youtube.map((item, idx) => (
              <li key={idx}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="btn btn-secondary mt-2"
            onClick={() => setSelectedSkill(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
export default MobileAppDeveloper;
