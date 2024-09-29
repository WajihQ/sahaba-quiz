import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About", () => {
    it("renders the about page with the about text and back button correctly", () => {
        render(
            <About></About>
        );

        expect(screen.getByText("This was developed for kids to educate them about our eminent predecessors known as the Sahaba.")).toBeInTheDocument();
        expect(screen.getByText("Go Back")).toBeInTheDocument();
    })
});