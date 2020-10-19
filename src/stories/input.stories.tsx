import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'input',
    // component: input,
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChange}/> - {value}</>
} //value получит значение actualValue, и мы увидим его рядом с инпутом!

export const GetValueOfUncontrolledInputByButtonPush = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
//сначала указываем null, т.к. когда инпут только отрисовывается, ссылки еще нету!
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value}</>
} // при нажатии на кнопку будет показываться value справа от "actual value"

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("")
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

  return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

  return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("2")
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)

  return <select value={parentValue} onChange={onChange}>
    <option>none</option>
    <option value={"1"}>Minsk</option>
    <option value={"2"}>Moscow</option>
    <option value={"3"}>Kiev</option>
  </select>
} // в выпадающем списке select его элементы (option) имеют value, которое является их id.

export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>
