import "@testing-library/jest-dom";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import App from "../components/App";
import CityList from "../components/CardList";

test("render App", () => {
  render(<App />);
  const component = screen.getByText(/Bienvenido/i);
  expect(component).toBeInTheDocument();
});

describe("Posts component", () => {
  let originFetch;
  beforeEach(() => {
    originFetch = global.fetch;
  });
  afterEach(() => {
    global.fetch = originFetch;
  });

  it("when load component should list cities", async () => {
    render(<App />);
    const Input = screen.getByLabelText(/Buscar/i);
    fireEvent.change(Input, {
      target: { value: "Sevilla" },
    });
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
    const mRes = { json: jest.fn().mockResolvedValueOnce(cities) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;
    await render(<CityList data={cities} />);
    const city = await waitFor(() => screen.findByRole("Cardcity"));
    expect(city).toBeInTheDocument();
  });
  it("when click button view weather", async () => {
    render(<App />);
    const Input = screen.getByLabelText(/Buscar/i);
    fireEvent.change(Input, {
      target: { value: "Sevilla" },
    });
    const cities = [
      {
        id: 15,
        name: "Sevilla",
        lng: [(10)[0]],
        lat: [(10)[0]],
        minX: [(10)[0]],
        minY: [(10)[0]],
        maxX: [(10)[0]],
        maxY: [(10)[0]],
      },
    ];
    const response = { json: jest.fn().mockResolvedValueOnce(cities) };
    const MockerFetch = jest.fn().mockResolvedValueOnce(response);
    global.fetch = MockerFetch;
    await render(<CityList data={cities} />);

    const weather = {
      id: [(10)[0]],
      name: "Sevilla",
      description: ["Esto es una descripción"[0]],
      temp: 38,
      feel: 42,
      temp_min: 35,
      temp_max: 45,
      hum: 12,
      speed: 0.3,
    };
    jest.mock("axios");
    axios.get = jest.fn();
    await axios.get.mockResolvedValueOnce(weather);

    const element = screen.getByRole("Cardcity");
    act(() => {
      userEvent.click(element);
    });
    const modal = await screen.findByRole("modal");
    expect(modal).toBeInTheDocument();
    expect.toBeInTheDocument(/Esto es una descripción/i);
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
