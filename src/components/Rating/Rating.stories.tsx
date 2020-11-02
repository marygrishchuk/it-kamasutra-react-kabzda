import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {RatingContainer, RatingValueType} from './Rating';

export default {
    title: 'RatingContainer',
    component: RatingContainer,
};

export const EmptyStars = () => <RatingContainer value={0} onClick={x => x} />;
//{x => x} в onClickе - это заглушка
export const Rating1 = () => <RatingContainer value={1} onClick={x => x} />;
export const Rating2 = () => <RatingContainer value={2} onClick={x => x} />;
export const Rating3 = () => <RatingContainer value={3} onClick={x => x} />;
export const Rating4 = () => <RatingContainer value={4} onClick={x => x} />;
export const Rating5 = () => <RatingContainer value={5} onClick={x => x} />;


export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <RatingContainer value={rating} onClick={setRating} />
}