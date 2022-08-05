import { render, screen } from "@testing-library/react";
import { PluNumberCard } from "@components/plunumbers/";
describe("PluNumberCard", () => {
  it("PluNumberCard Successfully Renders the value of the state", () => {
    render(<PluNumberCard value='asd' />);
    const heading = screen.getByTestId("plu-number-card").textContent;
    expect(heading).toBe("asd");
  });
});
