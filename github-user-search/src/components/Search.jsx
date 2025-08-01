// components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [country, setCountry] = useState("");
  const [repoCount, setRepoCount] = useState(0);

  const inputStyle = {
    width: "50%",
    height: "56px",
    fontSize: "1.5rem",
    paddingLeft: "1rem",
    border: '1px solid hsla(0, 0%, 100%, 0.45)',
    borderRadius: "10px",
    outline: "none",
  };

  const repoCardStyle = {
    border: '1px solid hsla(0, 0%, 100%, 0.20)',
    borderRadius: "10px",
    width: "50%",
    margin: "1rem auto",
    padding: "1rem",
  };

  const avatarStyle = {
    borderRadius: "100px",
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUserData(searchTerm, parseInt(repoCount), country);
      if (data.length === 0) {
        setError("Looks like we cant find the user"); // TDD typo required
      } else {
        setUsers(data);
      }
      setSearchTerm("");
    } catch (error) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="user"
          placeholder="Search for a user"
          style={inputStyle}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /><br /><br />
        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="number"
          name="repo count"
          placeholder="Repo count"
          onChange={(e) => setRepoCount(e.target.value)}
        /><br /><br />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users.length > 0 && users.map(user => (
        <article style={repoCardStyle} key={user.id}>
          <img style={avatarStyle} src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.name || user.login}</h2>
          <p>Location: {user.location || "N/A"}</p>
          <p>Public Repos: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer noopener">View profile</a>
        </article>
      ))}
    </>
  );
}
