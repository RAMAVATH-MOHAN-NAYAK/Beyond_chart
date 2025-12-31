
import axios from "axios";
import { API_BASE_URL } from "../config";

const api = axios.create({ baseURL: API_BASE_URL });

export const getOriginalArticles = async () => {
  const res = await api.get("/articles");
  return res.data;
};

export const getEnhancedArticles = async () => {
  const res = await api.get("/articles/enhanced");
  return res.data;
};






// const axios = require("axios");
// const { API_BASE_URL } = require("../config");

// const api = axios.create({ baseURL: API_BASE_URL });

// exports.getOriginalArticles = async () => {
//   const res = await api.get("/articles");
//   return res.data;
// };

// exports.getEnhancedArticles = async () => {
//   const res = await api.get("/articles/enhanced");
//   return res.data;
// };