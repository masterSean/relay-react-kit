const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const graphqlHTTP = require("express-graphql");

const schema = require("./schema/schema.js");
const config = require("./webpack.config.js");

const GRAPHQL_PORT = 5000;
const APP_PORT = 3000;

const graphqlServer = express();
graphqlServer.use("/", graphqlHTTP({
    schema: schema,
    graphiql: true
}));
graphqlServer.listen(GRAPHQL_PORT, () => {
    console.log("Grahpql server is running on port " + GRAPHQL_PORT);
});

const compiler = webpack(config);
const app = new webpackDevServer(compiler,{
    contentBase: "/public",
    proxy: {"/graphql": "http://localhost:5000"},
    publicPath: "/assets/",
    stats: { colors: true }
});

app.use("/", express.static(path.resolve(__dirname, "public")));
app.listen(APP_PORT, () => {
    console.log("Node server is running on port " + APP_PORT);
});
