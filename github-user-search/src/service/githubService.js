const fetchGitHubUser = async (username) => {
  const apiKey = process.env.REACT_APP_GITHUB_API_KEY;
  const url = `https://api.github.com/users/${username}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `token ${apiKey}`,
    },
  });

  if (!response.ok) {
    throw new Error("User not found or API error");
  }

  return response.json();
};

export { fetchGitHubUser };
