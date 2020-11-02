import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {OnOffContainer} from './OnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOffContainer',
    component: OnOffContainer,
};

export const OnMode = () => <OnOffContainer on={true} onChange={action("on or off clicked")} />;
//{x => x} в onClickе - это заглушка
export const OffMode = () => <OnOffContainer on={false} onChange={action("on or off clicked")} />;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOffContainer on={value} onChange={setValue} />
}