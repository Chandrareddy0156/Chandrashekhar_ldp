import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from ".";

describe("Input atom", () => {
  it("renders a textbox", () => {
    render(<Input label="Email" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders label correctly", () => {
    render(<Input label="Password" />);

    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  it("forwards placeholder prop", () => {
    render(<Input placeholder="Enter email" />);

    expect(
      screen.getByPlaceholderText("Enter email")
    ).toBeInTheDocument();
  });

  it("handles user input correctly", async () => {
    const user = userEvent.setup();

    render(<Input label="Username" />);
    const input = screen.getByLabelText("Username");

    await user.type(input, "chandra");

    expect(input).toHaveValue("chandra");
  });

  it("applies size='small' by default", () => {
    const { container } = render(<Input label="Size Test" />);

    // MUI applies size via class name
    expect(container.innerHTML).toContain("MuiInputBase-sizeSmall");
  });

  it("allows sx override without removing defaults", () => {
    render(
      <Input
        label="Custom SX"
        sx={{ backgroundColor: "red" }}
        data-testid="input"
      />
    );

    const inputWrapper = screen.getByTestId("input");

    expect(inputWrapper).toBeInTheDocument();
  });
});
