import React, { Component } from "react";
import Root from "../src/component/root";
import renderer from "react-test-renderer";

test('root component testing', () => {
    const props = {
        hello: "Hello world"
    }
    const component = renderer.create(
        <Root greetings={props}/>  
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
