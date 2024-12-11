// semester3.js

const semester3 = [
  {
    title: "The student chooses between one of the 2 tracks (Web or App):",
    hours: null, // Does not display hours
  },
  {
    title: "Interface Fundamentals",
    hours: 60,
  },
  {
    title: "Agile Methods for Prototyping",
    hours: 60,
  },
  {
    title: "Projects III",
    hours: 40,
  },
  {
    title: "Web Track",
    hours: -2, // Expandable subtopic
    subtopics: [
      { title: "React TS", hours: 70 },
      { title: "Intermediate Web Programming - Frameworks", hours: 70 },
    ],
  },
  {
    title: "App Track",
    hours: -2, // Expandable subtopic
    subtopics: [
      { title: "Cross-Platform Programming with React Native", hours: 70 },
      { title: "Cross-Platform Programming with Flutter", hours: 70 },
    ],
  },
  {
    title: "NANODEGREE 3",
    hours: -1, // Displays a star
  },
];

export default semester3;
