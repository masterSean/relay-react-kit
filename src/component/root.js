import React, { Component } from "react";

export default class Root extends Component {
    render() {
        const { hello } = this.props.greetings;
        return <h1>{hello}</h1>
    }
}
