import { Component } from "solid-js"

const Button: Component<{ name: string }> = (props) => {
    return <button>{props.name}</button>
}

export default Button
