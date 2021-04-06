import Link from 'next/link';
import React from 'react';

import {formatPrice} from '../../utils/formatPrice';

import styles from './Cards.module.css';

interface Props {
  insurance: Insurance;
}

const Cards: React.FC<Props> = ({insurance}) => {
  const {id, image, name, price, description} = insurance;

  return (
    <Link passHref href={`/seguros/${id}`}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img alt={name} src={image} />
          <p className={styles.label}>{formatPrice(price)}</p>
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{name}</p>
          <p className={styles.paragraph}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
