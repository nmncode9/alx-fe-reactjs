import { useState, useEffect } from "react";
import fetchUserData from "../services/githubService";

export default function Search() {

  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputStyle = {
    width: "50%",
    height: "56px",
    fontSize: "1.5rem",
    paddingLeft: "1rem",
    border: '1px solid hsla(0, 0%, 100%, 0.45)',
    borderRadius: "10px",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    outline: "none",
  }

  const repoCardStyle = {
    border: '1px solid hsla(0, 0%, 100%, 0.20)',
    borderRadius: "10px",
    width: "50%",
    margin: "1rem auto",
    padding: "1rem",
  }

  const avatarStyle = {
    borderRadius: "100px",
  }

  function handleChange(e) {
    setSearchTerm(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!searchTerm.trim()) return

    setLoading(true)
    setError(null)
    setUser(null)

    try {
      const data = await fetchUserData(searchTerm);
      setUser(data);
      setSearchTerm("");
    } catch (error) {
      setError("Looks like we cant find the user")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a repo"
          style={inputStyle}
          value={searchTerm}
          onChange={handleChange} /><br/><br/>
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <article style={repoCardStyle}>
          <img style={avatarStyle} src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer noopener">View profile</a>
        </article>
      )}

    </>
  )
}