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

export const SetTimeoutExample = () => {
    console.log("SetTimeoutExample")
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString()
        }, 1000)
    }, [counter])

    return <>
        Hello, fake: {fake} counter: {counter}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetIntervalExample = () => {
    console.log("SetIntervalExample")
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, fake: {fake} counter: {counter}
    </>
}

export const SetIntervalClockExample = () => {
    console.log("SetIntervalClockExample")
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])

    return <>
        {time}
    </>
}