const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  author: {
    type: String,
    default: "Anonymous",
  },
  body: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    default:
      "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8=",
  },
  parent: {
    type: String,
    default: null,
  },
  created_at: {
    type: Date,
  },
});

commentSchema.pre("save", function (next) {
  this.created_at = Date.now();
  next();
});

module.exports = mongoose.model("Comment", commentSchema);
