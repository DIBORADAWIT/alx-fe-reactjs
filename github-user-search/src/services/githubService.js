const buildSearchQuery = (username, location, minRepos) => {
  let query = `q=${username ? `in:login ${username}` : ""}`;

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  return `https://api.github.com/search/users?${query}`;
};

const fetchUsers = async (username, location, minRepos) => {
  const query = buildSearchQuery(username, location, minRepos);
  const response = await fetch(query);
  const data = await response.json();
  return data.items;
};
const renderResults = (users) => {
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = ""; // Clear previous results

  users.forEach((user) => {
    const userElement = document.createElement("div");
    userElement.className = "p-4 border rounded-md shadow-sm hover:bg-gray-50";

    userElement.innerHTML = `
        <div class="font-semibold text-lg"><a href="${
          user.html_url
        }" target="_blank">${user.login}</a></div>
        <p class="text-sm text-gray-600">Location: ${
          user.location || "Not provided"
        }</p>
        <p class="text-sm text-gray-600">Repositories: ${user.public_repos}</p>
      `;

    resultsContainer.appendChild(userElement);
  });
};

const handleLoadMore = (nextPageUrl) => {
  fetch(nextPageUrl)
    .then((res) => res.json())
    .then((data) => {
      renderResults(data.items);
      if (data.items.length > 0) {
        document.getElementById("load-more").onclick = () =>
          handleLoadMore(data.next);
      }
    });
};
