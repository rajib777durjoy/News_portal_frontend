import React from 'react';
import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://news-portal-backend-dxho.onrender.com'
});

const AxiosPublic = () => {
    return instance ;
};

export default AxiosPublic;