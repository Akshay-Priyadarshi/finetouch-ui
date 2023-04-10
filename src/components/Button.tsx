import { Component } from "solid-js"

const Button: Component<{ name: string }> = (props) => {
    return <div>{props.name}</div>
}

export default Button
