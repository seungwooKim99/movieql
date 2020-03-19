import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, { title }) => getMovies(title)
  }
};


export default resolvers;
