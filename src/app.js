import React, { Component } from "react";
import Relay from "react-relay";
import ReactDOM from "react-dom";

class Root extends Component {
    render() {
        const { hello } = this.props.greetings;
        return (
            <h1>{hello}</h1>        
        );
    }
}

Root = Relay.createContainer(Root, {
    fragments: {
        greetings: () => Relay.QL`
            fragment on greeting{
                hello
            }
        `
    }
});

class Route extends Relay.Route {
    static routeName = "Hello";
    static queries = {
        greetings: (Component) => Relay.QL`
            query GreetingsQuery {
                greetings {
                    ${Component.getFragment("greetings")}
                },
            }
        `,
    }
}

ReactDOM.render(
    <Relay.RootContainer
        Component={Root}
        route={new Route}
    />,
    document.getElementById("root")  
);
