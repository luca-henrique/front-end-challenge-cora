import PaymentTypeIcon, { PaymentType } from "../payment-type-icon/payment-type-icon";
import { TdTransactionDescription } from "./style";

interface TransactionDescriptionProps {
  entry: PaymentType
  description: string;
  className?: string;
}

export const TransactionDescription: React.FC<TransactionDescriptionProps> = ({
  entry,
  description,
  className = ''
}) => {
  return (
    <TdTransactionDescription>
      <PaymentTypeIcon type={entry} />
      <h5 className={`${className} money text-ellipsis`}>{description}</h5>
    </TdTransactionDescription>
  );
};
