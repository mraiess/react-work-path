export const CATEGORIES = ["Entrée", "Plat", "Dessert", "Boisson"];

export default function RecipeFilter({ search, category, onSearchChange, onCategoryChange }) {
  return (
    <div className="toolbar">
      <input
        type="text"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">Toutes catégories</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
