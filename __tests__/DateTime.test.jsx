import { render, screen, waitFor } from "@testing-library/react";
import DateTime from "@components/monitor/DateTime/DateTime";
describe("DateTime", () => {
  jest.useFakeTimers();
  jest.spyOn(global, "setTimeout");
  it("Should show date as the value of state initially", () => {
    render(<DateTime />);
    const dateValue = screen.getByTestId("date-element").textContent;
    expect(dateValue).toBe("0-0-0 |  ");
  }),
    it("Should have called setTimeOut", async function () {
      render(<DateTime />);
      await waitFor(() =>
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
      );
    });
});
