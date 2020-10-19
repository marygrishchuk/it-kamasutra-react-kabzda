import React, {FocusEvent, useState} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value: string
    collapsed: boolean
    onBlur: () => void
    onChange: () => void
    onClick: (value: string) => void
    onItemClick: () => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    console.log('Select rendering')

    const [active, setActive] = useState<boolean>(false)

    let selectTitle = props.items.find(i => i.value === props.value)

    let mappedItems = props.items.map((i) => <div key={i.value}
                                                  className={active ? s.item : ""}
                                                  tabIndex={0}
                                                  onBlur={() => props.onBlur()}
                                                  onClick={() => {
                                                      props.onClick(i.value);
                                                      props.onItemClick()
                                                  }}>
        {i.title}
    </div>)

    return (
        <div tabIndex={0} className={s.container}>
            <div tabIndex={0} onClick={() => {
                props.onChange();
                setActive(true)
            }}>
                {selectTitle && selectTitle.title} {"\u25BC"}
            </div>
            {!props.collapsed && mappedItems}
        </div>
    )
}