export default function RecipeItem({ recipe, onEdit, onDuplicate, onDelete }) {
  return (
    <div className="card">
      {recipe.image ? (
        <img src={recipe.image} alt={recipe.name} />
      ) : (
        <div className="noimg">🍽️</div>
      )}
      <div className="body">
        <div className="row">
          <h3 style={{ margin: 0 }}>{recipe.name}</h3>
          <span className="tag">{recipe.category}</span>
        </div>
        <p className="muted">{recipe.description}</p>
        <div>
          {recipe.ingredients.map((ing, i) => (
            <span key={i} className="tag">{ing}</span>
          ))}
        </div>
        <p style={{ margin: "8px 0 0" }}>
          <b>Difficulté :</b> {"🔥".repeat(recipe.difficulty)}
        </p>
        <span className="muted">Créée : {new Date(recipe.createdAt).toLocaleString()}</span>
      </div>
      <div className="actions">
        <button onClick={() => onEdit(recipe)}>Modifier</button>
        <button onClick={() => onDuplicate(recipe)}>Dupliquer</button>
        <button className="danger" onClick={() => onDelete(recipe.id)}>Supprimer</button>
      </div>
    </div>
  );
}
