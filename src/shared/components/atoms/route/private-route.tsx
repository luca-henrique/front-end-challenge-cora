import { useAuthStore } from "../../../../app/store/use-auth-store";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuth = useAuthStore((state) => state.token);

  const isUserAuthenticated = (): boolean => {
    return !!isAuth
  }

  if (!isUserAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
}




