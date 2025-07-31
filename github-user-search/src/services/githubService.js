import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export default async function fetchUserData(username) {

  const query = `
    query ($username: String!) {
      user(login: $username) {
        login
        name
        avatarUrl
        url
      }
    }
  `

  const variables = { username };

  const response = await axios.post(
    "https://api.github.com/graphql", 
    { query, variables },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    }
  );
  return response.data.data.user;
}