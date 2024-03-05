import React, { useState } from "react";
import { FormCheck, FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [eMode, setEMode] = useState<boolean>(false);
    const [uName, setuName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEMode(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <FormCheck
                type="switch"
                id="is-in-edit-mode"
                label="Edit Mode"
                checked={eMode}
                onChange={updateEditMode}
                role="checkbox"
                className="switch"
            />
            <FormCheck
                type="checkbox"
                id="is-a-student"
                label="Student?"
                checked={student}
                onChange={updateStudent}
                disabled={!eMode}
                role="checkbox"
                hidden={!eMode}
            />
            <div>
                <FormGroup controlId="formUName">
                    <FormLabel>User Name</FormLabel>
                    <FormControl
                        type="string"
                        value={uName}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setuName(event.target.value)}
                        disabled={!eMode}
                        hidden={!eMode}
                        role="textbox"
                        className="textbox"
                    />
                </FormGroup>
            </div>

            <div>
                {uName} {student ? " is a student" : " is not a student"}
            </div>
        </div>
    );
}
