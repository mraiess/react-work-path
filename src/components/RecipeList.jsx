import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipes, onEdit, onDuplicate, onDelete }) {
  if (recipes.length === 0) {
    return <p className="muted">Aucune recette trouvée. Créez-en une !</p>;
  }
  return (
    <div className="grid">
      {recipes.map((r) => (
        <RecipeItem
          key={r.id}
          recipe={r}
          onEdit={onEdit}
          onDuplicate={onDuplicate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
