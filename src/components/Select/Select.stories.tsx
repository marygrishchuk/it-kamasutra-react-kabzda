import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {SelectContainer} from './Select';

export default {
    title: 'SelectContainer',
    component: SelectContainer,
};

export const WithValue = () => {
    const [value, setValue] = useState("2")

    return <>
        <SelectContainer onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return <>
        <SelectContainer onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>
    </>
}