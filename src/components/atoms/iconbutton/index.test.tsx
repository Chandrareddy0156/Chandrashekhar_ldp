import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IconButton from ".";
import CloseIcon from "@mui/icons-material/Close";

describe("IconButton component", () => {
  it("renders children correctly", () => {
    render(
      <IconButton aria-label="close">
        <CloseIcon />
      </IconButton>
    );

    expect(screen.getByLabelText("close")).toBeInTheDocument();
  });

  it("forwards props to MuiIconButton", () => {
    render(
      <IconButton aria-label="menu" data-testid="icon-button">
        <span>icon</span>
      </IconButton>
    );

    const button = screen.getByTestId("icon-button");
    expect(button).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(
      <IconButton aria-label="close" onClick={handleClick}>
        <CloseIcon />
      </IconButton>
    );

    await user.click(screen.getByLabelText("close"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as a button element for accessibility", () => {
    render(
      <IconButton aria-label="icon button">
        <span>icon</span>
      </IconButton>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
