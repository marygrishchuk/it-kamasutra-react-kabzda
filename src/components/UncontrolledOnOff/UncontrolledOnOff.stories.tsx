import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { UncontrolledOnOff } from './UncontrolledOnOff';
import { action } from '@storybook/addon-actions';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={action("on or off clicked")} />
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={action("on or off clicked")} />

export const ModeChanging = () => {
    const [on, setOn] = useState(false);
    return <div><UncontrolledOnOff onChange={setOn} />{on.toString()}</div>
}

export const DefaultInputValue = () => <input defaultValue={"yo"} />