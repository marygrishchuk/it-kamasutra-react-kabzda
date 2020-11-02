import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { UncontrolledAccordionContainer } from './UncontrolledAccordion';

export default {
    title: 'UncontrolledAccordionContainer',
    component: UncontrolledAccordionContainer,
};

export const AccordionMenuUncontrolled = () => <UncontrolledAccordionContainer title={"Menu"} />
