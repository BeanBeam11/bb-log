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
