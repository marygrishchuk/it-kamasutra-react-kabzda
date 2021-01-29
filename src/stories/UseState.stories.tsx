import React, {useCallback, useMemo, useState} from "react";
import {SelectContainer} from "../components/Select/Select";
import s from "./UseMemo.module.css"

export default {
    title: 'useState demo'
}

export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(0)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}