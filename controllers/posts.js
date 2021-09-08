const Post = require("../models/posts");

const getPosts = (req, res) => {
  const post = Post.find()
    .select("title body")
    .then((post) => {
      res.json({ post: post }).catch((err) => console.log(err));
    });
};

const createPost = (req, res) => {
  const post = new Post(req.body);
  console.log("creating post:", req.body);
  post.save((err, result) => {
    res.status(200).json({
      post: result,
    });
  });
};

module.exports = {
  getPosts,
  createPost,
};
