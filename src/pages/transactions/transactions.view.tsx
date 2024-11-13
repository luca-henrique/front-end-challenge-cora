import { SwitchButton } from "../../components/atoms/switch-button/switch-button";
import {
  Box,
  TransactionItemProps,
} from "../../components/molecules/box/box.body";
import { Container, Header } from "./style";
import { useTransactionModel } from "./transactions.model";

export interface TransactionGroupProps {
  items: TransactionItemProps[];
  date: string;
}

export type TransactionsViewProps = ReturnType<typeof useTransactionModel>;

export const TransactionsView = ({
  data,
  isLoading,
  error,
  selectOptionFilter,
  changeVariantByFilterSelected
}: TransactionsViewProps) => {
  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados.</p>;
  }

  return (
    <Container>
      <Header>
        <SwitchButton
          onClick={() => selectOptionFilter("cashback")}
          variant={changeVariantByFilterSelected("cashback")}
        >
          Estorno
        </SwitchButton>
        <SwitchButton
          onClick={() => selectOptionFilter("invoice")}
          variant={changeVariantByFilterSelected("invoice")}
        >
          Boleto
        </SwitchButton>
        <SwitchButton
          variant={changeVariantByFilterSelected("debit")}
          onClick={() => selectOptionFilter("debit")}
        >
          Débito
        </SwitchButton>
      </Header>
      <div>
        {data.map((item: TransactionGroupProps, index: number) => (
          <Box
            {...item}
            key={`${index}-${new Date().toLocaleDateString()}`}
            size={data.length}
          />
        ))}
      </div>
    </Container>
  );
};
