import React from "react";
import Button, { ButtonProps } from "./button";

export default {
    title: "Components/Button",
    component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
export const Warning = () => <Button variant="warning">Warning</Button>;
export const Info = () => <Button variant="info">Info</Button>;


const Template: React.FC<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryA: React.FC<ButtonProps> = (args) => (
  <Template {...args} />
);