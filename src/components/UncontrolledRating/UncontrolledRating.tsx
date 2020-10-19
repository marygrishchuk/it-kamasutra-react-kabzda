import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange?: (value: RatingValueType) => void
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('UncontrolledRating rendering')

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1); props.onChange? props.onChange(1): console.log(value)}}/>
            <Star selected={value > 1} setValue={() => {setValue(2); props.onChange? props.onChange(2): console.log(value)}}/>
            <Star selected={value > 2} setValue={() => {setValue(3); props.onChange? props.onChange(3): console.log(value)}}/>
            <Star selected={value > 3} setValue={() => {setValue(4); props.onChange? props.onChange(4): console.log(value)}}/>
            <Star selected={value > 4} setValue={() => {setValue(5); props.onChange? props.onChange(5): console.log(value)}}/>
        </div>
    )
}         //в setValue добавили 2 действия через ; !!!

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return <span onClick={() => {props.setValue()}}>
    {props.selected ? <b>star </b> : <>star </>}
    </span>
}
// Второй star можно сделать строкой: "star "
//И Если бы не надо было вешать onClick на span, то работало бы и так:
//      return props.selected ? <span><b>star</b> : <span>star </span>