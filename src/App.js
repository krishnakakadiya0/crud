import React from "react";
import "./App.css";
import { AddUser } from "./components/AddUser";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AddUser />
    </Provider>
  );
}

export default App;
