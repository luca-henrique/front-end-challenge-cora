import ReactDOM from "react-dom/client";
import { MainRouter } from "./router/router.tsx";


import "./styles/global.css"
import "./styles/reset.css"
import { ReactQueryInstanceClient } from "./components/layouts/react-query-instance-client/react-query-instance-client.tsx";

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReactQueryInstanceClient >
    <MainRouter />
    <ToastContainer />
  </ReactQueryInstanceClient>
);
