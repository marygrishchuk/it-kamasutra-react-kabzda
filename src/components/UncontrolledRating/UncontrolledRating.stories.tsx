import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {UncontrolledRatingContainer} from './UncontrolledRating';
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledRatingContainer',
    component: UncontrolledRatingContainer,
};

const callback = action("rating changed inside component")

export const RatingUncontrolled0 = () => <UncontrolledRatingContainer defaultValue={0} onChange={callback}/>;
export const RatingUncontrolled1 = () => <UncontrolledRatingContainer defaultValue={1} onChange={callback}/>;
export const RatingUncontrolled2 = () => <UncontrolledRatingContainer defaultValue={2} onChange={callback}/>;
export const RatingUncontrolled3 = () => <UncontrolledRatingContainer defaultValue={3} onChange={callback}/>;
export const RatingUncontrolled4 = () => <UncontrolledRatingContainer defaultValue={4} onChange={callback}/>;
export const RatingUncontrolled5 = () => <UncontrolledRatingContainer defaultValue={5} onChange={callback}/>;

