import React from "react";

const Button = (props) => {
    return <button>{props.children || 'test'}</button>
}

export default Button