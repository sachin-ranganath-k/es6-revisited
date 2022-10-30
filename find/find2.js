let posts = [
  {
    id: 4,
    title: "New Post",
  },
  {
    id: 5,
    title: "Old Post",
  },
];

let comment = {
  postId: 4,
  content: "Awesome",
};

let a = function postForComment() {
  return posts.find((post) => {
    return post.id === comment.postId;
  });
};
console.log(a()); //{ id: 4, title: 'New Post' }
