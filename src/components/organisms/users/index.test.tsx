// UserProfile.test.tsx
import { render, screen } from "@testing-library/react";
import UserProfile from ".";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("UserProfile API testing", () => {
  test.only("shows user name on successful API call", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: { name: "Chndra" },
    });

    render(<UserProfile />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    expect(
      await screen.findByText("Chandra")
    ).toBeInTheDocument();
  });

  test("shows error message when API fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("API Error"));

    render(<UserProfile />);

    expect(
      await screen.findByText(/failed to load user/i)
    ).toBeInTheDocument();
  });
});


