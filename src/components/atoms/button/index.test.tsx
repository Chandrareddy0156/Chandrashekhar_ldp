import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("Button Atom", () => {
  test("renders button with text", () => {
    render(<Button>Log in</Button>);

    const button = screen.getByRole("button", {
      name: /log in/i,
    });

    expect(button).toBeInTheDocument();
  });

  test("applies correct styles", () => {
    render(<Button>Log in</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveStyle({
      height: "40px",
      backgroundColor: "#2CE080",
      color: "#03314B",
      fontWeight: "600",
      textTransform: "none",
    });
  });

  test("handles click event", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Log in</Button>);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("can be disabled", () => {
    render(<Button disabled>Log in</Button>);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  
  
});
