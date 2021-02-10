import React, {useEffect, useState} from "react";
import s from "./Clock.module.css"

type PropsType = {}

const getTwoDigitString = (num: number) => num < 10 ? "0" + num : num //time util
const getMinSecDegree = (num: number) => num === 0 ? 90 : ((360 / 60) * num) + 90 //adding extra 90 degrees for transform
const getHoursDegree = (num: number) => num === 0 ? 90 : ((360 / 24) * num * 2) + 90 //adding extra 90 degrees for transform

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())
    const [analogMode, setAnalogMode] = useState(false)

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return <>
        <button disabled={!analogMode} onClick={() => setAnalogMode(false)}>Digital Clock</button>
        <button disabled={!!analogMode} onClick={() => setAnalogMode(true)}>Analogue Clock</button>
        {analogMode
            ? <div className={s.clock}>
                <div className={s.clockFace}>
                    <div className={s.hand}
                         style={{transform: `rotate(${getHoursDegree(date.getHours())}deg)`}}></div>
                    <div className={s.hand}
                         style={{transform: `rotate(${getMinSecDegree(date.getMinutes())}deg)`}}></div>
                    <div className={s.hand}
                         style={{transform: `rotate(${getMinSecDegree(date.getSeconds())}deg)`}}></div>
                </div>
            </div>
            : <div>
                <span>{getTwoDigitString(date.getHours())}</span>
                :
                <span>{getTwoDigitString(date.getMinutes())}</span>
                :
                <span>{getTwoDigitString(date.getSeconds())}</span>
            </div>}
    </>
}