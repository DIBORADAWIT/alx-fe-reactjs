import axios from "axios";

const API_URL = "https://api.github.com/users/";

const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${API_URL}${username}`, {
      headers: {
        Authorization: `token ${GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
