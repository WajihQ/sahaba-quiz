import { render, screen } from "@testing-library/react";
import Settings from "./Settings";

describe("Settings", () => {
    it("renders the home page with buttons correctly", () => {
        render(
            <Settings></Settings>
        );

        expect(screen.getByText("Background Sound")).toBeInTheDocument();
        expect(screen.getByText("Click Sound")).toBeInTheDocument();
        expect(screen.getByText("Settings")).toBeInTheDocument();
    })
});