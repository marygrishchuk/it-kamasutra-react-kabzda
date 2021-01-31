import React, {useCallback, useMemo, useState} from "react";
import {SelectContainer} from "../components/Select/Select";
import s from "./UseMemo.module.css"

export default {
    title: 'useState demo'
}

function generateData () {
    // difficult calculations
    console.log("generateData")
    return 1
}

export const Example1 = () => {
    console.log("Example1")

    //const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}