import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";
import { callToApiCity } from "../services/apiCity";
import callToApiWeather from "../services/apiWeather";

jest.mock("../services/apiCity");
jest.mock("../services/apiWeather");

describe("App components", () => {
  describe("when user loads the component", () => {
    it("should list cities", async () => {
      const cities = [
        {
          id: 1,
          name: "Sevilla",
          lng: [(10)[0]],
          lat: [(10)[0]],
          minX: [(10)[0]],
          minY: [(10)[0]],
          maxX: [(10)[0]],
          maxY: [(10)[0]],
        },
      ];
      callToApiCity.mockResolvedValueOnce(cities);

      render(<App />);
      callToApiCity.mockResolvedValueOnce(cities);
      const city = await screen.findByRole("Cardcity");

      expect(city).toBeInTheDocument();
    });
    it("click for show wheather", async () => {
      const cities = [
        {
          id: 1,
          name: "Sevilla",
          lng: [(10)[0]],
          lat: [(10)[0]],
          minX: [(10)[0]],
          minY: [(10)[0]],
          maxX: [(10)[0]],
          maxY: [(10)[0]],
        },
      ];

      callToApiCity.mockResolvedValueOnce(cities);

      render(<App />);

      const element = await screen.findByRole("Cardcity");
      const weather = {
        id: [10],
        name: "Sevilla",
        description: ["Esto es una descripción"],
        temp: 38,
        feel: 42,
        temp_min: 35,
        temp_max: 45,
        hum: 12,
        speed: 0.3,
      };
      callToApiWeather.mockResolvedValueOnce(weather);
      userEvent.click(element);
      const modal = await screen.findByRole("modal");
      expect(modal).toBeInTheDocument();
      //screen.debug();
      const descriptionModal = await screen.findByText(/descripción/i);
      expect(descriptionModal).toBeInTheDocument();
    });
    it("when user write in input", async () => {
      render(<App />);
      const Input = screen.getByLabelText(/Buscar/i);
      fireEvent.change(Input, {
        target: { value: "Madrid" },
      });
      expect(Input.value).toBe("Madrid");
    });
    it("change dark mode", () => {
      render(<App />);
      const button = screen.getByRole(/Switch/i);
      userEvent.click(button);
      const headerBlack = screen.getByTestId(/DarkModeIcon/i);
      expect(headerBlack).toBeInTheDocument();
      userEvent.click(button);
      const lightIcon = screen.getByTestId(/LightModeIcon/i);
      expect(lightIcon).toBeInTheDocument();
    });
  });
});
