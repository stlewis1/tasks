import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateResponse(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <FormGroup controlId="formUserResponse">
                <FormLabel>Answer:</FormLabel>
                <FormControl
                    value={userAnswer}
                    onChange={updateResponse}
                ></FormControl>
            </FormGroup>
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
