import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

// User
export const login = async ({ email, password }) => {
    try {
        const res = await axios.post(`${baseUrl}api/v1/users/login`, { email, password });
        return res;
    } catch (err) {
        console.log(err.response);
        alert('登入失敗 (|||ﾟдﾟ)');
    }
};

export const register = async ({ name, email, password }) => {
    try {
        const res = await axios.post(`${baseUrl}api/v1/users/register`, { name, email, password });
        return res;
    } catch (err) {
        console.log(err.response);
        alert('註冊失敗 (|||ﾟдﾟ)');
    }
};

// Post
export const createPost = async ({ title, author, image, content }) => {
    try {
        const res = await axios.post(`${baseUrl}api/v1/posts`, { title, author, image, content });
        alert('成功發布文章！');
        return res;
    } catch (err) {
        console.log(err.response);
        alert('發布文章失敗 (|||ﾟдﾟ)');
    }
};

export const getAllPost = async () => {
    try {
        const res = await axios.get(`${baseUrl}api/v1/posts`);
        return res.data;
    } catch (err) {
        console.log(err.response);
        alert('讀取文章失敗 (|||ﾟдﾟ)');
    }
};

export const getPost = async ({ id }) => {
    try {
        const res = await axios.get(`${baseUrl}api/v1/posts/${id}`);
        return res.data;
    } catch (err) {
        console.log(err.response);
        alert('讀取文章失敗 (|||ﾟдﾟ)');
    }
};

export const searchPost = async ({ keyword }) => {
    try {
        const res = await axios.get(`${baseUrl}api/v1/posts/searchPost/${keyword}`);
        console.log(res.data)
        return res.data;
    } catch (err) {
        console.log(err.response);
        alert('讀取文章失敗 (|||ﾟдﾟ)');
    }
};
