import React, {Dispatch, SetStateAction} from 'react';

import styles from './Select.module.css';

interface Props {
  insurances: Insurance[];
  setOption: Dispatch<SetStateAction<number | null | undefined>>;
}

const Select: React.FC<Props> = ({insurances, setOption}) => {
  const handleChange = (event: React.FocusEvent<HTMLSelectElement>) => {
    setOption(parseInt(event.target.value));
  };

  return (
    <select className={styles.select} id="seguros" onChange={handleChange}>
      <option hidden value="">
        Selecciona una opción
      </option>
      {insurances.map((insurance) => (
        <option key={insurance.id} value={insurance.id}>
          {insurance.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
