import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddUser from "../components/AddUser";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <AddUser />
    </Provider>
  );
  const searchInput = utils.getByLabelText("searchInput");
  const addUser = utils.getByTestId("addUser");
  return {
    searchInput,
    addUser,
    ...utils,
  };
};

describe("Add user test", () => {
  it("On Input Change", () => {
    const { searchInput } = setup();
    fireEvent.change(searchInput, { target: { value: " " } });
  });
  it("Add user Button", () => {
    const { addUser } = setup();
    fireEvent.click(addUser);
  });
});
