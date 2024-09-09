import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
    it("renders the home page with buttons correctly", () => {
        render(
            <Home></Home>
        );

        expect(screen.getByText("Play")).toBeInTheDocument();
        expect(screen.getByText("Settings")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
    })
});