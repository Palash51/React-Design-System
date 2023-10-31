import React from "react";
import "./input.css";

export interface InputProps {
    size: "small" | "medium" | "large";
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    icon?: string;
    required?: boolean;
    autoFocus?: boolean;
    onClear?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
}

const Input = (props: InputProps) => {
    const { size = "medium", placeholder, onChange, onClear, onClick, ...rest } = props;
    return (
        <input 
            className={`input ${size}`}
            placeholder={placeholder} 
            onChange={onChange}
            onClick={onClick}
            {...rest} 
            />
    );
}

export default Input;
