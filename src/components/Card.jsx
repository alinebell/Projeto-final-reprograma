import React from 'react';
import styles from '../styles/components/card.module.css'

const Card = () => {
  return (
    <div className={styles.card}>
      <img src="imagem-do-card.jpg" alt="Imagem do card" />
      <div className={styles.card-content}>
        <h2>Título do Card</h2>
        <p>Conteúdo do card...</p>
      </div>
    </div>
  );
};

export default Card;
