import ReactDOM from "react-dom/client";
import { MainRouter } from "./router/router.tsx";

import { ReactQueryInstanceClient } from "./components/layouts/react-query-instance-client/react-query-instance-client.tsx";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "./styles/global.css"
import "./styles/reset.css"


ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReactQueryInstanceClient >
    <MainRouter />
    <ToastContainer />
  </ReactQueryInstanceClient>
);
