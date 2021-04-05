interface Insurance {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;

}
interface Props {
  insurances: Insurance[]
}