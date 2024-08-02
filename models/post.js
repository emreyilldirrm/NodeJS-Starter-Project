const mongoose = require('mongoose');
const moment =require('moment')

const schema = mongoose.Schema;

const BlogPost = new schema({
    title: String,
    detail: String,
    dateCreated: { type: String, default: moment().format('MM-dd-yy hh:ss') }
  });

  const Post = mongoose.model('Post', BlogPost);

  module.exports = Post