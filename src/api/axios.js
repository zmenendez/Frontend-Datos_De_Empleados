import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJhY2Nlc3MiOiJmdWxsIiwiaWF0IjoxNzM0NTM4NzAwLCJleHAiOjE3MzQ1NDIzMDB9.IDlPbmYpWhZ_K15T3CiznsuQ4QlDYwG1cyW5J22FXEc',
    },
});



export default api;