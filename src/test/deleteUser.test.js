import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DeleteUser from "../components/DeleteUser";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("Delete User test", () => {
  it("click on Delete Icon ", () => {
    render(
      <Provider store={store}>
        <DeleteUser />
      </Provider>
    );
    const deleteIcon = screen.getByTestId("deleteIcon");
    fireEvent.click(deleteIcon);
  });
   
  it("click on Cancle button ", () => {
    render(
      <Provider store={store}>
        <DeleteUser />
      </Provider>
    );
    const cancleButton = screen.getByTestId("cancleButton");
    fireEvent.click(cancleButton);
  });

  it("click on Delete button ", () => {
    render(
      <Provider store={store}>
        <DeleteUser />
      </Provider>
    );
    const deleteButton = screen.getByTestId("deleteButton");
    fireEvent.click(deleteButton);
  });

  it("click on Dialog Overlay ", () => {
    render(
      <Provider store={store}>
        <DeleteUser />
      </Provider>
    );
    const dialogOverlay = screen.getByTestId("dialogOverlay");
    
  });
});
