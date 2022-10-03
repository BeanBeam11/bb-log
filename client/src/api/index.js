import axios from 'axios';

const baseUrl = 'http://localhost:8080/';

export const createPost = async ({ title, author, image, content }) => {
    try {
        const res = await axios.post(`${baseUrl}api/v1/posts`, { title, author, image, content });
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
