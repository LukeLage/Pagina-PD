// semester4.js

const semester4 = [
  {
    title: "The student chooses between one of the 2 tracks (Web or App):",
    hours: null, // Does not display hours
  },
  {
    title: "Non-relational Database",
    hours: 60,
  },
  {
    title: "Basic Software Testing Design Patterns",
    hours: 40,
  },
  {
    title: "Projects IV",
    hours: 40,
  },
  {
    title: "Web Track",
    hours: -2, // Expandable subtopic
    subtopics: [
      { title: "FullStack Framework for Web", hours: 40 },
      { title: "API Development", hours: 40 },
      { title: "Software Testing for Web", hours: 40 },
    ],
  },
  {
    title: "App Track",
    hours: -2, // Expandable subtopic
    subtopics: [
      { title: "Java for Android", hours: 40 },
      { title: "Persistence for Mobile Devices", hours: 40 },
      { title: "Software Testing for Apps - Swift for iOS", hours: 40 },
    ],
  },
  {
    title: "COMPLETION CERTIFICATE",
    hours: -1, // Does not display hours, as it is informational
  },
];

export default semester4;
