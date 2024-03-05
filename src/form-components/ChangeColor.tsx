import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "magenta",
        "white",
        "black"
    ];
    const [color, setColor] = useState<string>(COLORS[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((c: string) => (
                <FormCheck
                    inline
                    key={c}
                    value={c}
                    type="radio"
                    name="color"
                    id="color-option"
                    label={<span style={{ backgroundColor: c }}>{c}</span>}
                    onChange={updateColor}
                    checked={color === c}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
