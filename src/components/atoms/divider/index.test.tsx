import { render, screen } from "@testing-library/react";
import { Divider } from ".";

describe("Divider component", () => {
  it("renders default text when no text prop is provided", () => {
    render(<Divider />);

    expect(screen.getByText("or")).toBeInTheDocument();
  });

  it("renders custom text when text prop is provided", () => {
    render(<Divider text="continue with" />);

    expect(screen.getByText("continue with")).toBeInTheDocument();
  });

  it("renders two divider lines (structure-based)", () => {
    const { container } = render(<Divider />);

    const root = container.firstChild as HTMLElement;

    // line | text | line
    expect(root.children.length).toBe(3);
  });

  it("does not alter the text content (lowercase is visual only)", () => {
    render(<Divider text="OR" />);

    expect(screen.getByText("OR")).toBeInTheDocument();
  });
});
