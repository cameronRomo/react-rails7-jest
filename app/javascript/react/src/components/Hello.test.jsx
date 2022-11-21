import React from "react";
import { screen } from "@testing-library/dom";
import renderer from "react-test-renderer";

import Hello from "./Hello";

/**
 * @jest-environment jsdom
 */


describe("jest works!", () => {
  describe("my beverage", () => {
    test("is delicious", () => {
      expect(myBeverage.delicious).toBeTruthy();
    });
    
    test("is not sour", () => {
      expect(myBeverage.sour).toBeFalsy();
    });
  });
  
  describe("should render", () => {
    test("use jsdom in this test file", () => {
      const element = document.createElement("div");
      expect(element).not.toBeNull();
    });

    test("hello rails!", () => {
      renderer.create(<Hello />);
      expect(screen.findByText("hello, rails 7!")).toBeTruthy();
    });
  });
});
