import React from 'react';
import styles from './box.module.css';

export default function Box({ title, text }) {
  return (
    <div>
      <div className={styles.highlightBox}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
