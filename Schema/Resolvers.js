const users = require('../FakeUsers')

const resolvers = {
  Query: {
    getAllUsers() {
      return users
    },
    getFilteredUsers(parent, args) {
      return users.filter(
        (user) =>
          (args.name ? args.name === user.name : user) &&
          (args.email ? args.email === user.email : user) &&
          (args.age ? args.age === user.age : user) &&
          (args.sex ? args.sex === user.sex : user) &&
          (args.married ? args.married === user.married : user)
      )
    },
  },

  Mutation: {
    createUser(parent, args) {
      const newUser = args
      users.push(newUser)
      return newUser
    },
  },
}

module.exports = resolvers
