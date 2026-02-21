import React from 'react';
import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:8000'
});

const AxiosPublic = () => {
    return instance ;
};

export default AxiosPublic;