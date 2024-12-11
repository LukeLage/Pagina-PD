import React, { useState } from "react";
import styles from "./dropdown.module.css";
import downArrow from "../../assets/img/downArrow.png"; // Certifique-se de que o caminho para a seta está correto

export default function Dropdown({ semesterTitle, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubtopics, setOpenSubtopics] = useState({}); // Gerenciar a abertura dos subtópicos

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Função para alternar subtópicos
  const toggleSubtopic = (index) => {
    setOpenSubtopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        <span className={styles.highlight}>{semesterTitle}</span>
        <img
          src={downArrow}
          alt="arrow icon"
          className={`${styles.arrow} ${isOpen ? styles.rotateArrow : ""}`}
        />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {/* Verifica se é um subtópico com horas == -2 */}
              {item.hours === -2 ? (
                <li
                  onClick={() => toggleSubtopic(index)}
                  className={styles.subtopic}
                >
                  <span className={styles.subtopicTitle}>{item.title}</span>
                  <img
                    src={downArrow}
                    alt="arrow icon"
                    className={`${styles.arrow} ${
                      openSubtopics[index] ? styles.rotateArrow : ""
                    }`}
                  />
                </li>
              ) : (
                <li>
                  <span>{item.title}</span>
                  {/* Exibe as horas se não forem null, -1 ou -2 */}
                  {item.hours !== null && (
                    <span className={styles.hours}>
                      {item.hours === -1 ? "★" : `${item.hours}h`}
                    </span>
                  )}
                </li>
              )}
              {/* Subtópico expansível */}
              {openSubtopics[index] && item.subtopics && (
                <ul className={styles.subtopicsList}>
                  {item.subtopics.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <span>{sub.title}</span>
                      <span className={styles.hours}>{sub.hours}h</span>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      )}
      <br />
    </div>
  );
}
