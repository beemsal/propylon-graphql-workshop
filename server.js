const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [
      require('apollo-server-core').ApolloServerPluginLandingPageGraphQLPlayground({
        // Apollo Studio Sandbox will be embedded
        settings: {
          'editor.theme': 'dark',
          'editor.cursorShape': 'line',
          'editor.fontFamily': '"Source Code Pro", "Consolas", "Inconsolata", "Droid Sans Mono", "Monaco", monospace',
          'editor.fontSize': 14,
          'editor.reuseHeaders': true,
          'editor.fontFamily': '"Source Code Pro", "Consolas", "Inconsolata", "Droid Sans Mono", "Monaco", monospace',
          'general.betaUpdates': false,
          'prettier.printWidth': 80,
          'prettier.tabWidth': 2,
          'prettier.useTabs': false,
          'request.credentials': 'omit',
          'schema.polling.enable': true,
          'schema.polling.endpointFilter': '*localhost*',
          'schema.polling.interval': 2000,
          'schema.disableComments': true,
          'tracing.hideTracingResponse': true
        }
      })
    ]
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: '/graphql',
    cors: {
      origin: true,
      credentials: true
    }
  });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`🚀 GraphQL server running at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`📖 GraphQL Playground available at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch(error => {
  console.error('Error starting server:', error);
});