import { render, screen } from "@testing-library/react";
import Typography from ".";

describe("Typography atom", () => {
  it("renders children text", () => {
    render(<Typography>Test Text</Typography>);

    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });

  it("forwards variant prop correctly", () => {
    render(
      <Typography variant="h4">
        Heading Text
      </Typography>
    );

    // MUI renders h4 as heading level 4
    expect(
      screen.getByRole("heading", { level: 4 })
    ).toBeInTheDocument();
  });

  it("forwards color prop", () => {
    render(
      <Typography color="primary">
        Colored Text
      </Typography>
    );

    expect(screen.getByText("Colored Text")).toBeInTheDocument();
  });

  it("forwards additional props to MuiTypography", () => {
    render(
      <Typography data-testid="typography">
        Props Test
      </Typography>
    );

    expect(
      screen.getByTestId("typography")
    ).toBeInTheDocument();
  });

  it("renders correct HTML element for body text", () => {
    render(
      <Typography variant="body1">
        Body Text
      </Typography>
    );

    // body1 defaults to <p>
    expect(screen.getByText("Body Text").tagName.toLowerCase())
      .toBe("p");
  });
});
