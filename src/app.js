import React, { Component } from "react";
import Relay from "react-relay";
import ReactDOM from "react-dom";

// Customized Components
import Root from "./component/root";

const RootRelayContainer = Relay.createContainer(Root, {
    fragments: {
        greetings: () => Relay.QL`
            fragment on greetings {
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
        Component={RootRelayContainer}
        route={new Route}
    />,
    document.getElementById("root")  
);
