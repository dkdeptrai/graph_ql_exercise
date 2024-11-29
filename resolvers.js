let users = [
  { id: 1, username: "John Doe", description: "A passionate developer" },
  { id: 2, username: "Jane Doe", description: "A GraphQL enthusiast" },
];

const resolvers = {
  Query: {
    getUser: (_, { id }) => users.find((user) => user.id == id),
  },

  Mutation: {
    updateUserDescription: (_, { id, description }) => {
      const user = users.find((user) => user.id == id);
      if (!user) throw new Error("User not found");
      user.description = description;
      return user;
    },
    addUser: (_, { username, description }) => {
      const newUser = { id: users.length + 1, username, description };
      users.push(newUser);
      return newUser;
    },
  },
};

module.exports = resolvers;
