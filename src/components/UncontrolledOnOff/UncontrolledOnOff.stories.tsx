import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { UncontrolledOnOffContainer } from './UncontrolledOnOff';
import { action } from '@storybook/addon-actions';

export default {
    title: 'UncontrolledOnOffContainer',
    component: UncontrolledOnOffContainer,
};

export const OnMode = () => <UncontrolledOnOffContainer defaultOn={true} onChange={action("on or off clicked")} />
export const OffMode = () => <UncontrolledOnOffContainer defaultOn={false} onChange={action("on or off clicked")} />

export const ModeChanging = () => {
    const [on, setOn] = useState(false);
    return <div><UncontrolledOnOffContainer onChange={setOn} />{on.toString()}</div>
}

export const DefaultInputValue = () => <input defaultValue={"yo"} />