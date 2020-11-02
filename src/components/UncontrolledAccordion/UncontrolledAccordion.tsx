import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    title: string,
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')

    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        <AccordionTitleContainer title={props.title} onClick={() => {
            dispatch({type: TOGGLE_COLLAPSED})
        }}/>
        {!state.collapsed && <AccordionBodyContainer/>}
    </div>
}
export const UncontrolledAccordionContainer = React.memo(UncontrolledAccordion)

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => {
        props.onClick()
    }}>-- {props.title} --</h3>
}
const AccordionTitleContainer = React.memo(AccordionTitle)

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
const AccordionBodyContainer = React.memo(AccordionBody)