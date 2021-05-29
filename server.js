const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./Schema/TypeDefs')
const resolvers = require('./Schema/Resolvers')

const express = require('express')
const app = express()

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen({ port: 5000 }, () => {
  console.log('Server running on http://localhost:5000')
})
