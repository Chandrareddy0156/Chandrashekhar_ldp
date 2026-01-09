import { render, screen } from "@testing-library/react";
import Container from ".";

describe("Container component", () => {
  it("renders children correctly", () => {
    render(
      <Container>
        <div>Test Content</div>
      </Container>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies default maxWidth='lg'", () => {
    render(
      <Container data-testid="container">
        Default Width
      </Container>
    );

    const container = screen.getByTestId("container");

    // MUI applies maxWidth via class names
    expect(container.className).toMatch(/MuiContainer-maxWidthLg/);
  });

  it("allows overriding maxWidth via props", () => {
    render(
      <Container maxWidth="sm" data-testid="container">
        Small Width
      </Container>
    );

    const container = screen.getByTestId("container");

    expect(container.className).toMatch(/MuiContainer-maxWidthSm/);
  });

  it("forwards additional props to MuiContainer", () => {
    render(
      <Container data-testid="custom-container">
        Props Test
      </Container>
    );

    expect(screen.getByTestId("custom-container")).toBeInTheDocument();
  });
});
