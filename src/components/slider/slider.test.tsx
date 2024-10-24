import { render, screen } from "@testing-library/react";
import Slider from "./slider";

describe("Button",  () => {
    const rangeText = "Hello World";
    const onChangeMock = jest.fn();

    it("renders button with text correctly", () => {
        render(
            <Slider
                id="test-button"
                onChange={onChangeMock}
                value={1}
                title={rangeText}
            ></Slider>
        );

        expect(screen.getByText(rangeText)).toBeInTheDocument();
        expect(screen.getByTestId("input")).toHaveClass("test-button");
    });
});
