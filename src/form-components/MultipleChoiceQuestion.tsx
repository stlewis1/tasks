import React, { useState } from "react";
import { FormGroup, FormLabel, FormSelect } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <FormGroup controlId="answerOptions">
                <FormLabel>Choose an Answer</FormLabel>
                <FormSelect value={choice} onChange={updateChoice}>
                    {options.map((o: string) => (
                        <option key={o} value={o}>
                            {o}
                        </option>
                    ))}
                </FormSelect>
            </FormGroup>
            {expectedAnswer === choice ? "✔️" : "❌"}
        </div>
    );
}
