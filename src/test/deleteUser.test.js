import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DeleteUser from "../components/DeleteUser";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <DeleteUser />
    </Provider>
  );
  const deleteIcon = utils.getByTestId("deleteIcon");
  const dialogOverlay = utils.getByTestId("dialogOverlay");
  return {
    deleteIcon,
    dialogOverlay,
    ...utils,
  };
};

describe("Delete User test", () => {
  it("click on Delete Icon ", () => {
    const { deleteIcon } = setup();
    fireEvent.click(deleteIcon);
  });
  it("close Dialog ", () => {
    
  });
});
