import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditUserData from "../components/EditUserData";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("Edit user test", () => {
  it("Edit user", () => {
    render(
      <Provider store={store}>
        <EditUserData clicked={() => {}} />
      </Provider>
    );
    const editIcon = screen.getByTestId("editUser");
    fireEvent.click(editIcon);
  });
});
