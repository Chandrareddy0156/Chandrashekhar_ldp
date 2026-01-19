import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EmailPasswordForm } from "."

describe("EmailPasswordForm", () => {
  const setup = (onSubmit = jest.fn()) => {
    const user = userEvent.setup();
    render(<EmailPasswordForm onSubmit={onSubmit} />);
    return { user, onSubmit };
  };

  test("renders email and password inputs and submit button", () => {
    setup();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /log in with email/i })
    ).toBeInTheDocument();
  });

  test("allows user to type email and password", async () => {
    const { user } = setup();

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await user.type(emailInput, "test@example.com");
    await user.type(passwordInput, "password123");

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  test("calls onSubmit with email and password on form submit", async () => {
    const { user, onSubmit } = setup();

    await user.type(screen.getByLabelText(/email/i), "user@test.com");
    await user.type(screen.getByLabelText(/password/i), "secret123");

    await user.click(
      screen.getByRole("button", { name: /log in with email/i })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      email: "user@test.com",
      password: "secret123",
    });
  });

  test("renders forgot password link", () => {
    setup();

    expect(
      screen.getByText(/forgot your password\?/i)
    ).toBeInTheDocument();
  });
});
