export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

  return formatter.format(price);
};
