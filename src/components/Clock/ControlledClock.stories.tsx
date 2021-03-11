import React from "react";
import {ControlledClock} from "./ControlledClock";

export default {
    title: 'ControlledClock',
    component: ControlledClock,
};

export const DigitalClockExample = () => {
    return <ControlledClock mode={'digital'}/>
}

export const AnalogClockExample = () => {
    return <ControlledClock mode={'analog'}/>
}