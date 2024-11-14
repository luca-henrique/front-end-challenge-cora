import { TransactionList } from "../../features/transaction-list/ui/transaction-list";
import {
  TransactionItemProps,
} from "../../shared/components/molecules/box/box.body";
import { Container, Header } from "./style";
import { TransactionFilter } from "../../features/transaction-filter/ui/transaction-filter";
import { TransactionsProvider } from "../../app/provider/transaction-provider";
import { Logout } from "../../features/logout/ui/login";

export interface TransactionGroupProps {
  items: TransactionItemProps[];
  date: string;
}

const Transactions = () => {
  return (
    <TransactionsProvider>
      <Container>
        <Header>
          <TransactionFilter />
          <Logout />
        </Header>
        <TransactionList />
      </Container>
    </TransactionsProvider>
  );
};


export default Transactions
