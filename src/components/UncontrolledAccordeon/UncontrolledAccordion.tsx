import React, {useState} from "react";

type AccordionPropsType = {
    title: string,
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')

    let [collapsed, setCollapsed] = useState(false)

        return <div>
            <AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>
            { !collapsed && <AccordionBody/> }
        </div>
}//Результат !collapsed :   setCollapsed будет всегда менять значение collapsed на противоположное!

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => { props.onClick() }}>-- {props.title} --</h3>
}

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