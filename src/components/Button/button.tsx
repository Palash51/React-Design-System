import React from 'react';
import './button.css';

export interface ButtonProps {
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const Button = (props: ButtonProps) => {
    const { variant = 'primary', children, ...rest } = props;
    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;