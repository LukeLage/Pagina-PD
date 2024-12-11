// semestre4.js

const semester4 = [
    {
      title: "O aluno opta entre um dos 02 eixos (Web ou App):",
      hours: null, // Não exibe horas
    },
    {
      title: "Banca de dados não relacional",
      hours: 60,
    },
    {
      title: "Padrões de projeto de teste básico de Software",
      hours: 40,
    },
    {
      title: "Projetos IV",
      hours: 40,
    },
    {
      title: "Eixo Web",
      hours: -2, // Subtópico expansível
      subtopics: [
        { title: "Framework FullStack para Web", hours: 40 },
        { title: "Desenvolvimento de API", hours: 40 },
        { title: "Teste de Software para Web", hours: 40 },
      ],
    },
    {
      title: "Eixo App",
      hours: -2, // Subtópico expansível
      subtopics: [
        { title: "Java para Android", hours: 40 },
        { title: "Persistência para dispositivos móveis", hours: 40 },
        { title: "Testes de Software para Aplicativos Swift para iOS", hours: 40 },
      ],
    },
    {
      title: "CERTIFICADO DE CONCLUSÃO",
      hours: -1, // Não exibe horas, pois é apenas informativo
    },
  ];
  
  export default semester4;
  