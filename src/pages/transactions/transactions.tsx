import { TransactionItemProps } from "../../components/molecules/box/box.body";
import { useTransactionModel } from "./transactions.model";
import { TransactionsView } from "./transactions.view";

export interface TransactionGroupProps {
  items: TransactionItemProps[];
  date: string;
}

const Transactions = () => {
  const props = useTransactionModel();

  return (
    <TransactionsView {...props} />
  );
};

export default Transactions;
