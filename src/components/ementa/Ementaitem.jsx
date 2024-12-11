import React, { useState } from "react";
import styles from "./ementaitem.module.css";
import downArrow from "../../assets/img/downArrow.png"; // Certifique-se de que o caminho para a seta está correto

export default function Ementaitem({ semesterTitle, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

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
            <li key={index} className={styles.itemContainer}>
              {/* Nome e Horas */}
              <div className={styles.itemHeader}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.hours}>{item.hours}h</span>
              </div>
              
              {/* Objetivo */}
              <div className={styles.itemContent}>
                <p><strong>Objetivo:</strong> {item.objective}</p>
              </div>

              {/* Ementa */}
              <div className={styles.itemContent}>
                <p><strong>Ementa:</strong> {item.syllabus}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
