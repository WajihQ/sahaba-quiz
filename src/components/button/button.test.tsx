import { render, screen } from "@testing-library/react";
import Button from "./button";
import { ReactComponent as MusicIcon } from "../../icons/music.svg";

describe("Button",  () => {
    const buttonText = "Hello World";
    const onClickMock = jest.fn();

    it("renders button with text correctly", () => {
        render(
            <Button
                variant="rectangular"
                onClick={onClickMock}
                text={buttonText}
            ></Button>
        );

        expect(screen.getByText(buttonText)).toBeInTheDocument();
        expect(screen.getByTestId("button")).toHaveClass("rectangular_button");
    });

    it("renders button with icon correctly",  () => {
        render(
            <Button
                variant="circular"
                onClick={onClickMock}
                icon={<MusicIcon />}
            ></Button>
        );
        expect(screen.getByTestId("button")).toHaveClass("circular_button");
        expect(screen.getByTestId("button")).toContainHTML('<span class="icon"><svg>music.svg</svg></span>');
    });
});
