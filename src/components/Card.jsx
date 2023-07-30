import React from 'react';
import styles from '../styles/components/card.module.css';

const Card = ({ title, content, linkUrl }) => {
  return (
    <section className={styles.card}>
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className={styles.card_footer}>
           <a href={linkUrl} target="_blank" rel="noopener noreferrer">Link</a>
        </div> 
      </div>
    </section>
  );
};

export default Card;

