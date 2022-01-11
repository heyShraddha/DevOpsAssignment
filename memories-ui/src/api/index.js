import axios from 'axios';


export const fetchPosts = () => axios.get('http://localhost:5001/posts');
export const createPost = (newPost) => axios.post('http://localhost:5002/posts', newPost);
export const likePost = (id) => axios.patch(`${'http://localhost:5001/posts'}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${'http://localhost:5001/posts'}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${'http://localhost:5002/posts'}/${id}`);
