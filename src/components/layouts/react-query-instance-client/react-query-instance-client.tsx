import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

interface ReactQueryInstanceClientProps {
  children: ReactNode
}

const queryClient = new QueryClient()

export const ReactQueryInstanceClient = ({ children }: ReactQueryInstanceClientProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
