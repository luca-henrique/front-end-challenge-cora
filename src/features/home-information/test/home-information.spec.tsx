import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomeInformation } from "../ui/home-information";

describe("HomeInformation Component", () => {
  it("deve renderizar o logo, título e subtítulo", () => {
    render(
      <MemoryRouter>
        <HomeInformation />
      </MemoryRouter>
    );

    expect(screen.getByAltText("Cora")).toBeInTheDocument();
    expect(screen.getByText("Hey There 👋")).toBeInTheDocument();
    expect(screen.getByText("Tenha um ótimo teste!!!")).toBeInTheDocument();
  });

  it("deve renderizar os links com os textos e URLs corretos", () => {
    render(
      <MemoryRouter>
        <HomeInformation />
      </MemoryRouter>
    );

    const todoLink = screen.getByText("TO-DO LIST");
    const loginLink = screen.getByText("IBANKING");

    expect(todoLink).toHaveAttribute("href", "/todo");
    expect(loginLink).toHaveAttribute("href", "/login");
  });
});
