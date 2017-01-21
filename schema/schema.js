const {
    GraphQLString,
    GraphQLSchema,
    GraphQLObjectType,
} = require("graphql");

const GREETINGS = {
    hello : "Hello world"
};

const GreetingsType = new GraphQLObjectType({
    name: "greetings",
    description: "...",
    fields: function() {
        return {
            hello: {
                type: GraphQLString,
                descripton: "Sample Hello world"
            }
        };
    }
});

const query = new GraphQLObjectType({
    name: "query",
    description: "...",
    fields: function() {
        return {
            greetings: {
                type: GreetingsType,
                resolve: function() {
                    return GREETINGS;
                }
            }
        };
    }
});


module.exports = new GraphQLSchema({
    query: query
});
