// Imports: GraphQL
import { ApolloServer } from 'apollo-server-express';

// Imports: GraphQL TypeDefs & Resolvers
import typedefs from './types.js';
import resolvers from './resolvers/resolvers.js';

// GraphQL: Schema
const server = new ApolloServer({
    typeDefs: typedefs,
    resolvers: resolvers,
    playground: {
        endpoint: `http://localhost:8080/graphql`,
        settings: {
            'editor.theme': 'dark'
        }
    }
});

// Exports
export default server;