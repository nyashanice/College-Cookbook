const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const { connectDB } = require("./config/connection");

const PORT = process.env.PORT || 3002;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: "bounded",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
  try {
    await server.start();
    // Apply the Apollo Server middleware
    server.applyMiddleware({ app });
    
    if (process.env.NODE_ENV === "production") {
      console.log(process.env.NODE_ENV == 'production');
      console.log('hiiiii');
      // Serve the static assets from the React build folder
      app.use(express.static(path.join(__dirname, "../client/build")));

      // Serve the React app for all requests that don't match an API route
      app.get("/", (req, res) => {
        // res.sendFile(path.join(__dirname, "../client/build/index.html"));
        res.send("Hello, World!");
      });
    }

    await connectDB(); // Establish the database connection

    app.listen(PORT, () => {
      console.log(`API server is running on port ${PORT}`);
      console.log(
        `GraphQL server running at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();
//   server.applyMiddleware({ app });

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//     })
//   })
//   };

startApolloServer(typeDefs, resolvers);
