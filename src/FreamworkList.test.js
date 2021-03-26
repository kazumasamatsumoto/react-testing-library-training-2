import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import FreamworkList from "./FreamworkList";

afterEach(() => cleanup());

describe("Rendering the list with props", () => {
  it("Should render No data ! when no data propped", () => {
    render(<FreamworkList />);
    expect(screen.getByText("No data !")).toBeInTheDocument();
  });
  it("Should render list item correctly", () => {
    const dummyData = [
      { id: 1, item: "React dummy" },
      { id: 2, item: "Angular dummy" },
      { id: 3, item: "Vue dummy" },
    ];
    render(<FreamworkList frameworks={dummyData} />);
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((ele) => ele.textContent);
    const dummyItems = dummyData.map((ele) => ele.item);
    expect(frameworkItems).toEqual(dummyItems);
    expect(screen.queryByText("No data !")).toBeNull();
  });
});
