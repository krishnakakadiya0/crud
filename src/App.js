import React from "react";
import AddUser from "./components/AddUser";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => (
  <Provider store={store}>
    <AddUser />
  </Provider>
);

export default App;
