import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJhY2Nlc3MiOiJmdWxsIiwiaWF0IjoxNzM0NTQ4MTkxLCJleHAiOjE3MzQ1NTE3OTF9.3-Tgcs4mQvx3XHyB_pN60vtrjWpp0cj-6Q3aAcMVYcM',
    },
});



export default api;