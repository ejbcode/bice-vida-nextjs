import {GetStaticProps} from 'next';
import Cards from '@components/Cards/Cards';
import styles from '@pageStyles/Seguros.module.css';

interface Props {
  insurances: Insurance[];
}

const AllInsurances: React.FC<Props> = ({insurances}) => {
  return (
    <div>
      <h1>Conoce nuestros seguros</h1>
      <p>
        En BiceVida pensamos en ti. Encuentra el seguro que mejor se adapte a
        tus necesidades.
      </p>
      <div className={styles.cards}>
        {insurances.map((insurance) => (
          <Cards key={insurance.id} insurance={insurance} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://bice-vida-nextjs.vercel.app/api/seguros`);
  const insurances = await res.json();

  return {
    // revalidate: 10, An optional amount in seconds after which a page re-generation can occur. If not neccesary if the data of insurances is always the same
    props: {
      insurances: insurances.results,
    },
  };
};

export default AllInsurances;
