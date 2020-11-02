import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Rating(props: RatingPropsType) {
    console.log('Select rendering')

    return (
        <div>
            <StarContainer selected={props.value > 0} onClick={props.onClick} value={1}/>
            <StarContainer selected={props.value > 1} onClick={props.onClick} value={2}/>
            <StarContainer selected={props.value > 2} onClick={props.onClick} value={3}/>
            <StarContainer selected={props.value > 3} onClick={props.onClick} value={4}/>
            <StarContainer selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}
export const RatingContainer = React.memo(Rating)

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return <span onClick={() => {props.onClick(props.value)}}
    >
    { props.selected ? <b>star </b> : "star " }
    </span>
}
//Real onClick is inside Star! The rest of onClicks are actually setValue!
const StarContainer = React.memo(Star)