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
    const [die1, setDie1] = useState<number>(4);
    const [die2, setDie2] = useState<number>(5);
    return (
        <div>
            <span>
                <Button onClick={() => setDie1(d6)}>Roll Left</Button>
            </span>
            <span>
                <Button onClick={() => setDie2(d6)}>Roll Right</Button>
            </span>
            <div>
                <span>Die 1: {die1}</span>
                <span>Die 2: {die2}</span>
            </div>
            <div>
                {die1 !== die2 ? (
                    ""
                ) : die1 === 1 ? (
                    <span>You Lose</span>
                ) : (
                    <span>You Win</span>
                )}
            </div>
        </div>
    );
}
