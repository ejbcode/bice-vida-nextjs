import Head from 'next/head';
import {useState} from 'react';
import Select from '@components/Select/Select';
import styles from '@pageStyles/Select.module.css';
import Card from '@components/Card/Card';
import {GetStaticProps} from 'next';

interface Props {
  insurances: Insurance[];
}

const SelectingInsurance: React.FC<Props> = ({insurances}) => {
  const [option, setOption] = useState<number | null>();
  const optionSelected = insurances.filter(
    (insurance) => insurance.id === option,
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={styles.main}>
        <h1>Conoce nuestros seguros</h1>
        <p>
          En BiceVida pensamos en ti. Encuentra el seguro que mejor se adapte a
          tus necesidades{' '}
        </p>
        <Select insurances={insurances} setOption={setOption} />
        {option && <Card optionSelected={optionSelected} />}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://bice-vida-nextjs.vercel.app/api/seguros`);
  const insurances = await res.json();

  return {
    props: {
      insurances: insurances.results,
    },
  };
};

export default SelectingInsurance;
