import axios from "axios";

export default async function fetchUserData(searchTerm, country, repoCount) {
  const baseUrl = "https://api.github.com/search/users";
  const q = `${searchTerm}`;
  const url = `${baseUrl}?q=${encodeURIComponent(q)}`;

  const response = await axios.get(url);
  return response.data.items; // Array of users
}