import React from 'react';
import Input from './input';

// import { Story, Meta } from '@storybook/react/types-6-0';

export default {
    title: "Form/Input",
    placeholder: "Input",
    component: Input
}

export const Small = () => <Input size="small" placeholder="Small input"></Input>
export const Medium = () => <Input size="medium" placeholder="Medium input"></Input>
export const Large = () => <Input size="large" placeholder="Large input"></Input>



