const user = require("./user");
const post = require("./post");
const comment = require("./comment");

Post.belongsTo(user, {
  foreignKey: "userId",
  onDelete: "CASCADE"
});

Post.hasMany(comment, {
  foreignKey: "postId",
  onDelete: "CASCADE"
});

Comment.belongsTo(user, {
  foreignKey: "userId",
  onDelete: "CASCADE"
});

module.exports = {
  user,
  comment,
  post
};