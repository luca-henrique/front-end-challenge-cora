
import { useLoginModel } from "./login.model";
import { LoginView } from "./login.view";

export default function Login() {
  const props = useLoginModel();

  return (
    <LoginView {...props} />
  );
}
