import { useQuery } from '@tanstack/react-query';
import React, { createContext, useState } from 'react';
import api from "../../services/axios";
import { TransactionGroupProps } from '../../pages/transactions/transactions.view';
import { ButtonVariant } from '../../components/atoms/switch-button/switch-button';


export interface TransactionProviderProps {
  isLoading: boolean,
  error: Error | null;
  data: any[];
  changeVariantByFilterSelected: (value: string) => ButtonVariant
  selectOptionFilter: (value: string) => void
}

export const TransactionProvider = createContext<TransactionProviderProps>(
  {} as TransactionProviderProps,
);

interface PaymentMethodProviderProps {
  children: React.ReactNode;
}


export const fetchTransactionsData = async () => {
  const response = await api.get("/list");
  return response.data;
};

export function TransactionsProvider({ children }: PaymentMethodProviderProps) {

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


  return (
    <TransactionProvider.Provider
      value={{
        data: filteredResults,
        isLoading,
        error,
        changeVariantByFilterSelected,
        selectOptionFilter

      }}>
      {children}
    </TransactionProvider.Provider>
  );
}