const fs = require("fs");
const path = require("path");
const { graphql } = require("graphql");
const { introspectionQuery, printSchema } = require("graphql/utilities");

const schema = require("../schema/schema");
const schemaPath = path.join(__dirname, "../schema/schema");

graphql(schema, introspectionQuery).then( function(result) {
    fs.writeFileSync(
        schemaPath + ".json",
        JSON.stringify(result, null, 2)
    );
});

fs.writeFileSync(
    schemaPath + ".graphql",
    printSchema(schema) 
);
