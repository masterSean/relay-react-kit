const {
    GrahpQLString,
    GraphQLObjectType
} = require("graphql");

const GreetingsType = new GraphQLObjectType({
    name: "greetings",
    fields: function() {
        return {
            hello: { 
                type: GrahpQLString,
                resolve: function() {
                    return "hello";
                }
            }
        };
    }
});

module.exports = GreetingsType;
