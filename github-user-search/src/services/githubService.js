// services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
const headers = token ? { Authorization: `token ${token}` } : {};

/**
 * Search users by username (basic info only)
 * cannot query directly in "https://api.github.com/search/users?q"
 * as it's unsupported
 */
export const searchUsers = async (username) => {
  try {
    const query = `${username} in:login`;
    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`, {headers});
    return response.data.items;
  } catch (error) {
    throw new Error(`Error searching users: ${error.message}`);
  }
};

/**
 * Fetch detailed user data by login
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

    const detailedUsers = await Promise.all(
      basicUsers.map(async (user) => await getUserDetails(user.login))
    );

    const filtered = detailedUsers.filter(user => {
      const locationMatch = location
        ? user.location?.toLowerCase().includes(location.toLowerCase())
        : true;

      const repoMatch = user.public_repos >= minRepos;

      return locationMatch && repoMatch;
    });

    return filtered;
  } catch (error) {
    throw new Error(`Error fetching user data: ${error.message}`);
  }
};
