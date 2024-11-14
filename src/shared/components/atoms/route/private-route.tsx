import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode
  isAuthenticated: boolean
}

export const PrivateRoute = ({ children, isAuthenticated = false }: PrivateRouteProps) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
}


export const PublicRoute = ({ children, isAuthenticated = false }: PrivateRouteProps) => {
  return !isAuthenticated ? children : <Navigate to="/transacoes" />;
}

