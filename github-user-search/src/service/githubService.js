import axios from "axios";

const githubService = {
  getUserData: async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data from GitHub API:", error);
      throw error;
    }
  },
};

export default githubService;
