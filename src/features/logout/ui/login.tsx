
import { useLogout } from "../model/useLogout";
import { CustomButton } from "./style";

export const Logout = () => {
  const { logoutAccount } = useLogout()

  return (
    <CustomButton onClick={() => logoutAccount()}>Sair</CustomButton>
  );
};
