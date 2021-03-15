import React, {useEffect, useState} from "react";

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
        const timeoutID = setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString()
        }, 1000)
        return () => {
            clearTimeout(timeoutID)
        }
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
        const intervalID = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return <>
        Hello, fake: {fake} counter: {counter}
    </>
}

export const SetIntervalClockExample = () => {
    console.log("SetIntervalClockExample")
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return <>
        {time}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("ResetEffectExample " + counter)

    useEffect(() => {
        console.log("EffectOccurred " + counter)

        return () => {
            console.log("Reset Effect " + counter)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>counter+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("")
    console.log("ResetEffectExample " + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener("keypress", handler)
        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeout3SecondsExample = () => {
    const [text, setText] = useState("")
    console.log("SetTimeout3SecondsExample " + text)

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log("TIMEOUT EXPIRED")
            setText("3 seconds passed")
        }, 3000)
        return () => {
            clearInterval(timeoutID)
        }
    }, [text])

    return <>
        text: {text}
    </>
}