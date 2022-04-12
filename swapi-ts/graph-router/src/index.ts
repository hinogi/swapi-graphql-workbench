import { resolve } from 'path';
import { readFileSync } from 'fs';
import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const isProd = process.env.NODE_ENV === "production";
if(!isProd)require('dotenv').config();

let gateway;
if(process.env.APOLLO_KEY && process.env.APOLLO_GRAPH_REF) {
  //Default to Apollo Managed Federation
  gateway = new ApolloGateway();
} else {
  const supergraphSdl = readFileSync(resolve(__dirname, '..', 'supergraph-schema.graphql'), { encoding: "utf8" });
  gateway = new ApolloGateway({ supergraphSdl });
}
const server = new ApolloServer({ gateway });

const port = process.env.PORT ||4000;
server.listen({ port }).then(({ url }) => {
    console.log(`🚀 Graph Router ready at ${url}`);
});