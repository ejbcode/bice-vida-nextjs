import { ReadSyncOptions } from 'node:fs';
import React from 'react'
import { formatPrice } from "../../utils/formatPrice";
import styles from './Card.module.css'
interface Props {
  optionSelected: Insurance[];
}

const Card: React.FC<Props> = ({ optionSelected }) => {
  console.log(optionSelected);
  const { image, name, price, description } = optionSelected[0]
  console.log(name);



  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={name} />
        <p className={styles.label}>{formatPrice(price)}</p>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{name}</p>
        <p className={styles.paragraph}>{description}</p>
      </div>
    </div>
  )
}

export default Card
