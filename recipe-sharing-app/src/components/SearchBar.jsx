import { useRecipeStore } from './recipeStore';

export default function SearchBar() {

  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  const searchBarStyle = {
    width: '688px',
    padding: '16px',
    border: '1px solid hsla(0, 0%, 100%, 0.45)',
    borderRadius: '10px',
    outline: 'none',
    fontSize: '1rem',
    boxSizing: 'border-box',   // ✅ include padding + border in the 650px
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',

  }

  return (
    <input
      style={searchBarStyle}
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};