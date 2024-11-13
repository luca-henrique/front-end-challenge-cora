import { useMemo } from "react";
import { formatMoney } from "../../../utils/format-money";
import { Table } from "../../atoms/table/table";
import { TableRow } from "../table-row/table-row";
import "./box-body.css";
import { formatDate } from "../../../utils/format-date";

export type PaymentType = "DEBIT" | "CASHBACK" | "INVOICE";
export type PaymentStatusType = "COMPLETED" | "PENDING" | "FAILED";

export interface TransactionItemProps {
  id: string;
  description: string;
  label: string;
  entry: PaymentType;
  amount: number;
  name: string;
  dateEvent: string;
  status: PaymentStatusType;
}

export interface TransactionGroupProps {
  items: TransactionItemProps[];
  date: string;
  size: number;
}

export const Box = ({ date, items = [], size }: TransactionGroupProps) => {
  const isLastTrasactionTable = size === items.length;

  const totalAmount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.amount, 0);
  }, [items]);

  return (
    <>
      {items.length >= 1 ? (
        <>
          <div className="table-header">
            <h4 className="date">{formatDate(date)}</h4>
            <h4 className="balance">
              saldo do dia <strong>{formatMoney(totalAmount)}</strong>
            </h4>
          </div>
          <div className="vertical-divider" />
          <Table className="border">
            <tbody className="table-content">
              {items.map((item: TransactionItemProps) => {
                return <TableRow {...item} key={item.id} />;
              })}
            </tbody>
          </Table>
          {isLastTrasactionTable && <div className="vertical-divider" />}
        </>
      ) : (
        <></>
      )}
    </>
  );
};
