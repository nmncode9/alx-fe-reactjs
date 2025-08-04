// services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
const headers = token ? { Authorization: `token ${token}` } : {};

/**
 * Search users by username (basic info only)
 * cannot query for location or repo count directly in "https://api.github.com/search/users?q" 
 * as it's unsupported
 */
export const searchUsers = async (username) => {
  try {
    const query = `${username} in:login`;
    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`, {headers});
    return response.data.items;
    
    /** 
     * Github API response is shaped like this:
     * {
     *  "total_count": 123,
     *  "incomplete_results": false,
     *  "items": [ // array of user objects with basic info  ]
     * }
     * Axios puts all the response body in the data attribute
     * So we return response.data.item
     */

  } catch (error) {
    throw new Error(`Error searching users: ${error.message}`);
  }
};

/**
 * Fetch detailed single user data by login
 */
export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {headers});
    return response.data;
  } catch (error) {
    throw new Error(`User not found: ${error.message}`);
  }
};

/**
 * Full function to fetch and filter users by:
 * - login match
 * - country
 * - public repo count
 */
export const fetchUserData = async (username, minRepos = 0, location = "") => {
  try {
    const basicUsers = await searchUsers(username);

    const detailedUsers = await Promise.all( // Will throw if any promise returned by getUserDetails(user.login) fails
      basicUsers.map((user) => getUserDetails(user.login))
    );

    const filtered = detailedUsers.filter(user => {
      const locationMatch = location
        ? (user.location || "").toLowerCase().includes(location.toLowerCase())
        : true;

      const repoMatch = user.public_repos >= minRepos;

      return locationMatch && repoMatch;
    });

    return filtered;
  } catch (error) {
    throw new Error(`Error fetching user data: ${error.message}`);
  }
};
