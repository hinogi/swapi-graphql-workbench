import { resolve } from 'path';
import { readFileSync } from 'fs';
import { gql, ApolloServer } from 'apollo-server';
import { buildSubgraphSchema } from '@apollo/federation';
import { resolvers } from './resolvers';

const mocks = require('./mocks.js');
const typeDefs = gql(readFileSync(resolve(__dirname, "..","schema.graphql"), { encoding: "utf8" }));
const schema = buildSubgraphSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema, mocks });

const port = process.env.PORT || 5003;
server.listen({ port }).then(({ url }) => {
    console.log(`🚀 Subgraph planets ready at ${url}`);
});