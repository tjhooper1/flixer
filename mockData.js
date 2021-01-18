/**
 * Mock data should have Users, Shows/Movies
 */

const show = [
  {
    showId: 1,
    title: "Bridgerton",
    description: "This is a show on Netflix.",
  },
  {
    showId: 2,
    title: "Death Note",
    description: "Boy finds himself in possession of a book with powers.",
  },
  {
    showId: 3,
    title: "Cobra Kai",
    description: "Daniel Larusso and Johnny find themselves as the master now.",
  },
];

const user = [
  {
    userId: 1,
    firstName: "Tom",
    lastName: "Hooper",
    email: "Tomh386@gmail.com",
    password: "test123",
    likes: [1, 2, 3],
    friends: [2],
  },
  {
    userId: 2,
    firstName: "Katie",
    lastName: "Herrin-Hooper",
    email: "akh6122@yahoo.com",
    password: "test123",
    likes: [1, 3],
    friends: [1],
  },
];

module.exports = {
  show,
  user,
};
