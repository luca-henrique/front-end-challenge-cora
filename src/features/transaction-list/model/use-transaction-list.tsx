import { TransactionProvider } from "../../../app/provider/transaction-provider"
import { useContext } from "react"


export const useTransactionList = () => {
  const { data, error, isLoading } = useContext(TransactionProvider)
  return { data, error, isLoading }
}
