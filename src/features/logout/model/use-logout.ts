import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  const logoutAccount = () => {
    localStorage.clear();
    navigate("/");
  };

  return { logoutAccount };
};
