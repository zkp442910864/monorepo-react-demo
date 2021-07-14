import React from 'react';
// import {ComponentStory, ComponentMeta} from '@storybook/react';
import MyCheckbox from './index';

export default {
    title: 'react/MyCheckbox',
    component: MyCheckbox,
    argTypes: {
    },
};

const Template = (args) => {
    return <MyCheckbox {...args} >{args.checked}</MyCheckbox>;
};

export const 改变默认值 = Template.bind({});
改变默认值.args = {
    trueValue: 1,
    falseValue: 2,
    checked: 1,
    // change: action('change')
};