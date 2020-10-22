import React from "react";

type ItemType = {
    title: string
    value: any   //Димыч хочет в value передавать id-шник
}

type AccordionPropsType = {
    title: string,
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

        return <div>
            <AccordionTitle title={props.title} onChange={props.onChange}/>
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
        </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => props.onChange()}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')


    return (
        <ul>
            {props.items.map((i, index) => <li key={index} onClick={() => props.onClick(i.value)}>{i.title}</li>)}
        </ul>
    )
}