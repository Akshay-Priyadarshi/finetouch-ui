import { Component } from "solid-js"

const Button: Component<{ name: string }> = (props) => {
    return <h2>{props.name}</h2>
}

export default Button
