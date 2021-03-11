import React from "react";
import {ClockViewPropsType} from "./ControlledClock";

const getTwoDigitString = (num: number) => num < 10 ? "0" + num : num //time util

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <div>
        <span>{getTwoDigitString(date.getHours())}</span>
        :
        <span>{getTwoDigitString(date.getMinutes())}</span>
        :
        <span>{getTwoDigitString(date.getSeconds())}</span>
    </div>

}