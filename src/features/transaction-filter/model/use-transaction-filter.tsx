import { TransactionProvider } from "../../../app/provider/transaction-provider"
import { useContext } from "react"


export const useTransactionFilter = () => {

  const { selectOptionFilter, changeVariantByFilterSelected } = useContext(TransactionProvider)

  return { selectOptionFilter, changeVariantByFilterSelected }
}
