import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {action} from "@storybook/addon-actions";
import {AccordionContainer} from './Accordion';

export default {
    title: 'AccordionContainer',
    component: AccordionContainer,
};

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <AccordionContainer title={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>;
//{x => x} в onChange - это заглушка
export const UsersUncollapsedMode = () => <AccordionContainer title={"Users"}
                                                     collapsed={false}
                                                     onChange={callback}
                                                     items={[{title: "Dimych", value: 1},
                                                         {title: "Valera", value: 2},
                                                         {title: "Artem", value: 3},
                                                         {title: "Victor", value: 4}]}
                                                     onClick={onClickCallback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <AccordionContainer title={"Users"} collapsed={value} onChange={() => setValue(!value)}
                      items={[{title: "Dimych", value: 1},
                          {title: "Valera", value: 2},
                          {title: "Artem", value: 3},
                          {title: "Victor", value: 4}]}
                      onClick={(value) => alert(`user with id ${value} should be happy`)}/>
}
