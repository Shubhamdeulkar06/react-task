import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../index.css";
const AppLayout = () => {
  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
