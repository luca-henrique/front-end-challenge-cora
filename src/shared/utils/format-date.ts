export const formatDateTime = (dateTime: string) => {
  const date = new Date(dateTime);

  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("pt-BR", { month: "short" });
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day} ${month} ${year} - ${hours}:${minutes}`;
};

export const formatDate = (value: string) => {
  const date = new Date(value);
  return date.toLocaleDateString("pt-BR");
};
