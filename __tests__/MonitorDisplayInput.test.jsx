import { render, screen, fireEvent } from "@testing-library/react";
import { MonitorDisplayInput } from "@components/monitor";
describe("MonitorDisplayInputa", () => {
  it("It should not allow letters to be inputted/typed, alert message if typed", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    render(<MonitorDisplayInput />);
    const inputNode = screen.getByTestId("product-label");
    fireEvent.change(inputNode, { target: { value: "a" } });
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
