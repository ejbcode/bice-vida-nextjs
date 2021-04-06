const InsuranceItem = ({insurance}) => {
  const {id, name, image, description, price} = insurance;

  return (
    <div>
      Static
      <p>{name}</p>
      <img alt={name} src={image} />
      <pre>
        <code>{JSON.stringify(insurance, null, 4)}</code>
      </pre>
    </div>
  );
};

export const getStaticProps = async ({params}) => {
  const res = await fetch(
    `https://bice-vida-nextjs.vercel.app/api/seguros/${params.id}`,
  );
  const insurance = await res.json();

  return {
    props: {
      insurance,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://bice-vida-nextjs.vercel.app/api/seguros/`);
  const insurance = await res.json();
  const ids = insurance.results.map((item) => item.id);
  const paths = ids.map((id) => ({params: {id: id.toString()}}));

  return {
    paths,
    fallback: false,
  };
};

export default InsuranceItem;
