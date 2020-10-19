import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Select} from './Select';

export default {
    title: 'Select',
    component: Select,
};

export const CustomSelect = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [value, setValue] = useState<any>("2")

    return <Select value={value}
                   collapsed={collapsed}
                   onBlur={() => setCollapsed(true)}
                   onChange={() => setCollapsed(false)}
                   onItemClick={() => setCollapsed(true)}
                   onClick={setValue}
                   items={[{title: "Dimych", value: "1"},
                       {title: "Valera", value: "2"},
                       {title: "Artem", value: "3"},
                       {title: "Victor", value: "4"}]}/>;
}
