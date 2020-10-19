import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {UncontrolledRating} from './UncontrolledRating';
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};

const callback = action("rating changed inside component")

export const RatingUncontrolled0 = () => <UncontrolledRating defaultValue={0} onChange={callback}/>;
export const RatingUncontrolled1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>;
export const RatingUncontrolled2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>;
export const RatingUncontrolled3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>;
export const RatingUncontrolled4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>;
export const RatingUncontrolled5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>;

