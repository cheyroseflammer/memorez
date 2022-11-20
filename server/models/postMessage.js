import mongoose from 'mongoose';

// Creating schema

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creatore: String,
  // Will be an array of strings
  tags: [String],
  // Will convert image from a string using base64
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Turning schema into model

const PostMessage = mongoose.model('PostMessage', postSchema);

// Exporting mongoose model where we can later run commands find, create, delete & update on
export default PostMessage;
