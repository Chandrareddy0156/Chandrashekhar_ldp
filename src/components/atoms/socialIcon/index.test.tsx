import { render, screen } from "@testing-library/react";
import { SocialIcon } from ".";

describe("SocialIcon atom", () => {
  it("renders Facebook icon when platform is facebook", () => {
    render(<SocialIcon platform="facebook" />);

    // MUI icons expose data-testid by default
    expect(screen.getByTestId("FacebookIcon")).toBeInTheDocument();
  });

  it("renders Google icon when platform is google", () => {
    render(<SocialIcon platform="google" />);

    expect(screen.getByTestId("GoogleIcon")).toBeInTheDocument();
  });

  it("renders Apple icon when platform is apple", () => {
    render(<SocialIcon platform="apple" />);

    expect(screen.getByTestId("AppleIcon")).toBeInTheDocument();
  });

  it("renders only one icon at a time", () => {
    render(<SocialIcon platform="facebook" />);

    expect(screen.getAllByTestId(/Icon$/)).toHaveLength(1);
  });
});
