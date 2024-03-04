import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

interface newValueProps {
    newVal: () => void;
}
function Doubler({ newVal }: newValueProps): JSX.Element {
    return <Button onClick={newVal}>Double</Button>;
}

function Halver({ newVal }: newValueProps): JSX.Element {
    return <Button onClick={newVal}>Halve</Button>;
}
export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const doubleVal = () => setDhValue(2 * dhValue);
    const halveVal = () => setDhValue(0.5 * dhValue);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler newVal={doubleVal}></Doubler>
            <Halver newVal={halveVal}></Halver>
        </div>
    );
}
