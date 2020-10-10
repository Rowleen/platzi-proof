import axios from "axios";
const urlServer = "https://reqres.in";

// GET all users by pages
export const getUsers = () => axios.get(`${urlServer}/api/users`);
