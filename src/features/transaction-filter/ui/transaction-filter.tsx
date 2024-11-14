import { SwitchButton } from "../../../shared/components/atoms/switch-button/switch-button"
import { useTransactionFilter } from "../model/use-transaction-filter"
import { Header } from "./style"

export const TransactionFilter = () => {

  const { selectOptionFilter, changeVariantByFilterSelected } = useTransactionFilter()

  return (
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
  )
}
