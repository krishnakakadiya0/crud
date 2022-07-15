import React from "react";
import { render, screen, cleanup, debug } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddUser from "../components/AddUser";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("Add user test", () => {
  it("Add user", () => {
    render(<Provider store={store}><AddUser /></Provider>);
    expect(true).toBe(true);
  });
});