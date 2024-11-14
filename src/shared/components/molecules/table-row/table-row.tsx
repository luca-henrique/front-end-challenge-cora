import { formatDateTime } from "../../../utils/format-date";
import { formatMoney } from "../../../utils/format-money";
import { TransactionItemProps } from "../box/box.body";
import { PaymentType } from "../payment-type-icon/payment-type-icon";
import { TransactionDescription } from "../transaction-description/transaction-description";


const textEntryStyle: Record<PaymentType, string> = {
  DEBIT: "debit",
  INVOICE: "invoice",
  CASHBACK: "cashback",
};

export const TableRow = ({ entry, description, label, dateEvent, amount }: TransactionItemProps) => {
  const style = textEntryStyle[entry as PaymentType];
  const isNotPaymentMethodInvoice = entry.toLowerCase() !== "invoice";
  const mathSignal = isNotPaymentMethodInvoice ? "+" : "-";

  return (
    <tr className="line">
      <TransactionDescription
        entry={entry}
        description={description}
        className={isNotPaymentMethodInvoice ? "positivo" : ""}
      />
      <td>{label}</td>
      <td>{formatDateTime(dateEvent)}</td>
      <td className="value">
        <strong className={`${style}`}>
          {mathSignal} {formatMoney(amount)}
        </strong>
      </td>
    </tr>
  );
};
