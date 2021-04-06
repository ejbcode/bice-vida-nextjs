import {formatPrice} from '../../utils/formatPrice';

import styles from './Card.module.css';
interface Props {
  optionSelected: Insurance[];
}

const Card: React.FC<Props> = ({optionSelected}) => {
  const {image, name, price, description} = optionSelected[0];

  return (
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
  );
};

export default Card;
