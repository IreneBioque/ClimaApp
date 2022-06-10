import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
  getByRole,
} from "@testing-library/react";
import App from "./components/App";
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";
import * as ApiService from "./services/apiWeather";
import ModalCity from "./components/ModalCity";

ApiService.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: 1,
        name: "LOLA",
        description: "Esto es una descriptción",
        temp: 38,
        feel: 34.48,
        temp_min: 32.41,
        temp_max: 35,
        hum: 0.1,
        speed: 5.66,
      }),
  })
);

// const server = setupServer(
//   rest.get(
//     `https://api.openweathermap.org/data/2.5/weather?lat=12&lon=12&appid=${process.env.REACT_APP_API_WEATHER_KEY}&units=metric&lang=es`,
//     (req, res, ctx) => {
//       return res(
//         ctx.delay(1500),
//         ctx.status(202, "Mocked status"),
//         ctx.json({
//           id: 1,
//           name: "LOLA",
//           description: "Esto es una descriptción",
//           temp: 38,
//           feel: 34.48,
//           temp_min: 32.41,
//           temp_max: 35,
//           hum: 0.1,
//           speed: 5.66,
//         })
//       );
//     }
//   )
// );
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

test("render App", () => {
  render(<App />);
  const component = screen.getByText(/Bienvenido/i);
  expect(component).toBeInTheDocument();
});

test("write in input", () => {
  render(<App />);
  const Input = screen.getByLabelText(/Buscar/i);
  fireEvent.change(Input, {
    target: { value: "Sevilla" },
  });
  expect.toBeInTheDocument(/Sevilla/i);
});
// test("Open Modal", async () => {
//   render(<App />);
//   const Input = screen.getByLabelText(/Buscar/i);
//   fireEvent.change(Input, {
//     target: { value: "Sevilla" },
//   });
//   const button = screen.getByText(/Tiempo/i);
//   fireEvent.click(button);
//   expect.toBeInTheDocument(/Lola/i);
// });
// test("Fail fetch weather", async () => {
//   server.use(
//     rest.get(
//       `https://api.openweathermap.org/data/2.5/weather?lat=12&lon=12&appid=${process.env.REACT_APP_API_WEATHER_KEY}&units=metric&lang=es`,
//       (req, res, ctx) => {
//         return res(
//           ctx.delay(1500),
//           ctx.status(500, "Mocked status"),
//           ctx.json({ message: "Internal Server Error"
//           })
//         );
//       }
//     )
//   );
//   render(<App />);
//   const Input = screen.getByLabelText(/Buscar/i);
//   fireEvent.change(Input, {
//     target: { value: "Sevilla" },
//   });
//   const button = screen.getByText(/Tiempo/i);
//   fireEvent.click(button);
//   expect.not.toBeInTheDocument(/Lola/i);
// });
test("Open Modal", async () => {
   render(<App />);
   const Input = screen.getByLabelText(/Buscar/i);
   fireEvent.change(Input, {
     target: { value: "Sevilla" },
  });
   const button = screen.getByText(/Ver el tiempo/i);
  fireEvent.click(button);
  const Modal = screen.getByRole("modal")
  expect.toBeInTheDocument(Modal)
});
