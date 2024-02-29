import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Christmas"
        | "Halloween"
        | "Thanksgiving"
        | "New Year's"
        | "4th of July";

    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    function nextHolidayYear(h: Holiday): Holiday {
        if (h === "New Year's") {
            return "4th of July";
        } else if (h === "4th of July") {
            return "Halloween";
        } else if (h === "Halloween") {
            return "Thanksgiving";
        } else if (h === "Thanksgiving") {
            return "Christmas";
        } else {
            return "New Year's";
        }
    }

    function nextHolidayName(h: Holiday): Holiday {
        if (h === "4th of July") {
            return "Christmas";
        } else if (h === "Christmas") {
            return "Halloween";
        } else if (h === "Halloween") {
            return "New Year's";
        } else if (h === "New Year's") {
            return "Thanksgiving";
        } else {
            return "4th of July";
        }
    }

    function setEmoji(h: Holiday): string {
        if (h === "4th of July") {
            return "🎆";
        } else if (h === "Christmas") {
            return "🎄";
        } else if (h === "Halloween") {
            return "👻";
        } else if (h === "New Year's") {
            return "🗓️";
        } else {
            return "🦃";
        }
    }

    return (
        <div>
            <div>Holiday: {setEmoji(holiday)}</div>
            <div>
                <Button onClick={() => setHoliday(nextHolidayName(holiday))}>
                    Advance by Alphabet
                </Button>
                <Button onClick={() => setHoliday(nextHolidayYear(holiday))}>
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
