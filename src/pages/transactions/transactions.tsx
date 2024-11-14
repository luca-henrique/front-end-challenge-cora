import { TransactionList } from "../../features/transaction-list/ui/transaction-list";
import {
  TransactionItemProps,
} from "../../components/molecules/box/box.body";
import { Container } from "./style";
import { TransactionFilter } from "../../features/transaction-filter/ui/transaction-filter";
import { TransactionsProvider } from "../../app/provider/transaction-provider";

export interface TransactionGroupProps {
  items: TransactionItemProps[];
  date: string;
}

const Transactions = () => {
  return (
    <TransactionsProvider>
      <Container>
        <TransactionFilter />
        <TransactionList />
      </Container>
    </TransactionsProvider>
  );
};


export default Transactions
