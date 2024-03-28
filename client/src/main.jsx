import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from "./components/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeProvider>
          <App ></App>
        </ThemeProvider>
      </Provider>
    </PersistGate>
  </NextUIProvider>
);
