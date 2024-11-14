const options = {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 3,
};
const formatNumber = new Intl.NumberFormat("pt-BR", options);

export const formatMoney = (money: number) => {
  return formatNumber.format(money);
};
