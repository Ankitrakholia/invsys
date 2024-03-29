// src/services/http-common.js
import axios from 'axios';

export default axios.create({
  baseURL: "https://invsys-1.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
