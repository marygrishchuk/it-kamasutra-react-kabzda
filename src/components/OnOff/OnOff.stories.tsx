import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {OnOff} from './OnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
};

export const OnMode = () => <OnOff on={true} onChange={action("on or off clicked")} />;
//{x => x} в onClickе - это заглушка
export const OffMode = () => <OnOff on={false} onChange={action("on or off clicked")} />;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue} />
}