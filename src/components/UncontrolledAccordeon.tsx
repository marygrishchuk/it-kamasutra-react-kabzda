import React, {useState} from "react";

type AccordeonPropsType = {
    title: string,
    // collapsed: boolean
}

export function UncontrolledAccordeon(props: AccordeonPropsType) {
    console.log('UncontrolledAccordeon rendering')

    let [collapsed, setCollapsed] = useState(false)

        return <div>
            <AccordeonTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>
            { !collapsed && <AccordeonBody/> }
        </div>
}//Результат !collapsed :   setCollapsed будет всегда менять значение collapsed на противоположное!

type AccordeonTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    console.log('AccordeonTitle rendering')
    return <h3 onClick={() => { props.onClick() }}>-- {props.title} --</h3>
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