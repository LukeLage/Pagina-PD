// semestre3.js

const semester3 = [
    {
      title: "O aluno opta entre um dos 02 eixos (Web ou App):",
      hours: null, // Não exibe horas
    },
    {
      title: "Fundamentos de Interface",
      hours: 60,
    },
    {
      title: "Métodos ágeis para criação de protótipos",
      hours: 60,
    },
    {
      title: "Projetos III",
      hours: 40,
    },
    {
      title: "Eixo Web",
      hours: -2, // Subtópico expansível
      subtopics: [
        { title: "React TS", hours: 70 },
        { title: "Programação Web Intermediária - Frameworks", hours: 70 },
      ],
    },
    {
      title: "Eixo App",
      hours: -2, // Subtópico expansível
      subtopics: [
        { title: "Programação Multiplataforma com React Native", hours: 70 },
        { title: "Programação Multiplataforma com Flutter", hours: 70 },
      ],
    },
    {
      title: "NANODEGREE 3",
      hours: -1, // Exibe uma estrela
    },
  ];
  
  export default semester3;
  