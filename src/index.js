import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import Loader from "./components/common/Loader";

// react persist
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./ctx/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate loading={<Loader />} persistor={persistor}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
