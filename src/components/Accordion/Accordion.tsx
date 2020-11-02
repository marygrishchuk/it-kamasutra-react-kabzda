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

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

        return <div>
            <AccordionTitleContainer title={props.title} onChange={props.onChange}/>
            { !props.collapsed && <AccordionBodyContainer items={props.items} onClick={props.onClick}/> }
        </div>
}
export const AccordionContainer = React.memo(Accordion)

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => props.onChange()}>-- {props.title} --</h3>
}
const AccordionTitleContainer = React.memo(AccordionTitle)

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
const AccordionBodyContainer = React.memo(AccordionBody)