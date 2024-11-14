import { Icon } from "../../../shared/assets/icons";

export type PaymentType = 'DEBIT' | 'CASHBACK' | 'INVOICE';

interface PaymentTypeIconProps {
  type: PaymentType;
}

const PaymentTypeIcon: React.FC<PaymentTypeIconProps> = ({ type }) => {
  const renderIcon = {
    DEBIT: <Icon.Debit />,
    CASHBACK: <Icon.Cashback />,
    INVOICE: <Icon.Invoice />,
  };

  return renderIcon[type] || <Icon.Debit />;
};

export default PaymentTypeIcon;
