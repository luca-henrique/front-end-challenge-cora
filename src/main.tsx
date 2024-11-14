import ReactDOM from "react-dom/client";
import { MainRouter } from "./app/router/router.tsx";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./app/styles/global.css";
import "./app/styles/reset.css";

import { AppProviders } from "./app/provider/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <MainRouter />
    <ToastContainer />
  </AppProviders>
);
