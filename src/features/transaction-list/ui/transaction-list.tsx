import { Box, TransactionGroupProps } from "../../../shared/components/molecules/box/box.body"
import { useTransactionList } from "../model/use-transaction-list"

export const TransactionList = () => {
  const { data, error, isLoading } = useTransactionList()

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados.</p>;
  }

  return (
    <div>
      {data.map((item: TransactionGroupProps, index: number) => (
        <Box
          {...item}
          key={`${index}-${new Date().toLocaleDateString()}`}
          size={data.length}
        />
      ))}
    </div>
  )
}
