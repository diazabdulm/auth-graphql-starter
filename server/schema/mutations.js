const { GraphQLObjectType, GraphQLString } = require("graphql");

const UserType = require("./types/user_type");
const AuthService = require("../services/auth");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signUp: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, args, req) {
        return AuthService.signup({ ...args, req });
      },
    },
    logIn: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, args, req) {
        return AuthService.login({ ...args, req });
      },
    },
    logOut: {
      type: UserType,
      resolve(parentValue, args, req) {
        return AuthService.logout(req);
      },
    },
  },
});

module.exports = mutation;
