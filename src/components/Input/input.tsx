import React from "react";
import "./input.css";

interface IProps {
    size: "small" | "medium" | "large";
    placeholder: string;
    onClick?: () => void;
}

const Input = (props: IProps) => {
    const { size = "medium", placeholder, ...rest } = props;
    return (
        <input className={`input ${size}`} {...rest} placeholder={placeholder} />
    );
}

export default Input;
