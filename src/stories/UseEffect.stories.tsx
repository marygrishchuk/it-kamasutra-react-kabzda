import React, {useCallback, useEffect, useMemo, useState} from "react";
import {SelectContainer} from "../components/Select/Select";
import s from "./UseMemo.module.css"

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log("SimpleExample")
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log("useEffect for every render")
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log("useEffect only after the first render (componentDitMount analogue)")
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log("useEffect after the first render and after every counter change")
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, fake: {fake} counter: {counter}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}