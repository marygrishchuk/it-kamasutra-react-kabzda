import React from "react";

type AccordeonPropsType = {
    title: string,
    collapsed: boolean
    onChange: () => void
}

export function Accordeon(props: AccordeonPropsType) {
    console.log('Accordeon rendering')

        return <div>
            <AccordeonTitle title={props.title} onChange={props.onChange}/>
            { !props.collapsed && <AccordeonBody/> }
        </div>
}

type AccordeonTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    console.log('AccordeonTitle rendering')
    return <h3 onClick={props.onChange}>-- {props.title} --</h3>
}

function AccordeonBody() {
    console.log('AccordeonBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}