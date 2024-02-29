import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setleftDie] = useState<number>(4);
    const [rightDie, setrightDie] = useState<number>(5);
    return (
        <div>
            <div>
                <span data-testid="left-die">left-die: {leftDie}</span>
                <Button onClick={() => setleftDie(d6)}>Roll Left</Button>
            </div>
            <div>
                <span data-testid="right-die">right-die: {rightDie}</span>
                <Button onClick={() => setrightDie(d6)}>Roll Right</Button>
            </div>
            <div>
                {leftDie !== rightDie ? null : leftDie === 1 ? (
                    <span>Lose</span>
                ) : (
                    <span>Win</span>
                )}
            </div>
        </div>
    );
}
