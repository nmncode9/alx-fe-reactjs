import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export default async function fetchUserData(username) {

  // using GraphQL instead of the REST API version

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
  //const response = await axios.get(`https://api.github.com/users/${username}`);
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