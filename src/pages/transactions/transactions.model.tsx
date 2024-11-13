import { useQuery } from "@tanstack/react-query";
import { fetchTransactionsData } from "../../services/transaction";
import { useState } from "react";
import { TransactionGroupProps } from "./transactions";



export const useTransactionModel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["groups"],
    queryFn: fetchTransactionsData,
  });

  const [filterSelected, setFilterSelected] = useState('')


  const selectOptionFilter = (value: string) => {
    setFilterSelected(value)
  }

  const isSelectedFilter = filterSelected.length > 1

  const filteredResults = isSelectedFilter ? data?.results.map((group: TransactionGroupProps) => ({
    ...group,
    items: group.items.filter(item => item.entry.toLowerCase() === filterSelected)
  })) : data?.results;

  const changeVariantByFilterSelected = (value: string) => filterSelected === value ? "containedPrimary" : "containedSecondary"


  return {
    data: filteredResults,
    isLoading,
    error,
    filterSelected,
    selectOptionFilter,
    changeVariantByFilterSelected
  };
};
