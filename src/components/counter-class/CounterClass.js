import React from "react";

export default class CounterClass extends React.Component {
    state = {
        counter: 0,
    };

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    handleClick = () => {
        this.setState({ counter: this.state.counter + 1});
    }

    render() {
        return (
            <div>
                <span>{this.state.counter}</span>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}