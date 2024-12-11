import React from 'react'
import styles from './diftopicos.module.css'

export default function Diftopicos({ topic }) {
  return (
    <div className={styles.topic}>
        <span>{"->"}</span>{topic}
    </div>
  )
}
