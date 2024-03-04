import React, { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);
    const requested = request || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Remaining: {attempts}</div>
            <FormGroup controlId="forumAttemptsRequest">
                <FormLabel>Request Attempts</FormLabel>
                <FormControl
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequest(parseInt(event.target.value))
                    }
                />
            </FormGroup>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts < 1}
            >
                use
            </Button>
            <Button onClick={() => setAttempts(attempts + requested)}>
                gain
            </Button>
        </div>
    );
}
