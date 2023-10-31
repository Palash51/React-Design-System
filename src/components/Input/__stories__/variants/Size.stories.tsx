import React from 'react';
import Input, { InputProps } from '../../input'


export default {
    title: "Components/Input/variants/Size",
    placeholder: "Input",
    component: Input
}

export const Small = () => <Input size="small" placeholder="Small input"></Input>
export const Medium = () => <Input size="medium" placeholder="Medium input"></Input>
export const Large = () => <Input size="large" placeholder="Large input"></Input>
