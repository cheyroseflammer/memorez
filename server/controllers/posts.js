// This file is to store the logic of requests in function calls
// to keep folder and file structure cleanly

import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    // Because our req takes time in needs to be asynchronous with await & async
    const postMessages = await PostMessage.find();
    // Returning a 200 status with data in json format
    res.status(200).json(postMessages);
  } catch (error) {
    // Returning a 404 error if data wasnt fetched
    res.status(404).json({ message: error.message });
  }
};
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
