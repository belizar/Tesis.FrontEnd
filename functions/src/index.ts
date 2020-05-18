

const admin = require("firebase-admin");
const functions = require("firebase-functions");
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { Kind } = require('graphql/language');
const { GraphQLScalarType } = require('graphql');
const serviceAccount = require("../service_account.json");
const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tesis-213dc.firebaseio.com"
});

const typeDefs = gql`
  scalar Date
  type Clientes {
      ID: String;
      Apellido: String
      Nombre: String
      CUIL: String
      Email: String
      FechaDeNacimiento: Date
    }
  type Query {
    clientes: [Clientes],
    pageClientes(take:Int, skip:Int): [Clientes]
  }
`;

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value: any) {
      return new Date(value).getTime(); // value from the client
    },
    serialize(value: any) {
      return new Date(value);
        // value sent to the client
    },
    parseLiteral(ast: any) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
    Query: {
        clientes: () =>
            admin
                .firestore()
                .collection("clientes")
                .then((res: any) => res.docs)
                .then((docs: any) => docs.map((doc: any) => {
                    return {ID: doc.id, ...doc.data()};
                  }))
                .then((val: any) => Object.keys(val).map(key => val[key])),
        pageClientes: (parent: any, args: any, context: any, info: any) => {
          return admin
              .firestore()
              .collection("clientes")
              .then((res: any) => res.docs)
              .then((docs: any) => docs.map((doc: any) => {
                  return {ID: doc.id, ...doc.data()};
                }))
              .then((snap: any) => snap.val())
              .then((val: any) => val.slice(args.skip, args.take))
              .then((val: any) => Object.keys(val).map(key => val[key]))
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/", cors: true });
exports.graphql = functions.https.onRequest(app);