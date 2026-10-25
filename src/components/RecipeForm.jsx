import { useState } from "react";
import { CATEGORIES } from "./RecipeFilter";

export default function RecipeForm({ recipe, onSave, onClose }) {
  const isEdit = Boolean(recipe);

  const [name, setName] = useState(recipe?.name ?? "");
  const [category, setCategory] = useState(recipe?.category ?? "Plat");
  const [ingredients, setIngredients] = useState(recipe?.ingredients ?? [""]);
  const [difficulty, setDifficulty] = useState(recipe?.difficulty ?? 2);
  const [description, setDescription] = useState(recipe?.description ?? "");
  const [image, setImage] = useState(recipe?.image ?? "");
  const [error, setError] = useState("");

  const updateIngredient = (index, value) =>
    setIngredients(ingredients.map((ing, i) => (i === index ? value : ing)));

  const addIngredient = () => setIngredients([...ingredients, ""]);

  const removeIngredient = (index) =>
    setIngredients(ingredients.filter((_, i) => i !== index));

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Le nom est obligatoire.");
      return;
    }
    onSave({
      name: name.trim(),
      category,
      ingredients: ingredients.map((i) => i.trim()).filter(Boolean),
      difficulty: Number(difficulty),
      description,
      image,
    });
  };

  return (
    <div className="overlay">
      <form className="modal" onSubmit={handleSubmit}>
        <div className="row">
          <h2 style={{ margin: 0 }}>{isEdit ? "Modifier la recette" : "Nouvelle recette"}</h2>
          <button type="button" onClick={onClose}>Fermer</button>
        </div>

        <label>
          Nom
          <input
            type="text"
            placeholder="Ex: Pancakes maison"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {error && <div className="error">{error}</div>}

        <label>
          Catégorie
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>

        <label>Ingrédients</label>
        {ingredients.map((ing, i) => (
          <div key={i} className="row" style={{ marginBottom: 4 }}>
            <input
              type="text"
              placeholder={`Ingrédient ${i + 1}`}
              value={ing}
              onChange={(e) => updateIngredient(i, e.target.value)}
            />
            <button type="button" onClick={() => removeIngredient(i)}>Suppr</button>
          </div>
        ))}
        <button type="button" onClick={addIngredient} style={{ width: "100%" }}>
          + Ajouter ingrédient
        </button>

        <label>
          Difficulté : <b>{difficulty}</b>
          <input
            type="range"
            min="1"
            max="5"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>

        <label>
          Description
          <textarea rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>

        <label>
          Image
          <input type="file" accept="image/*" onChange={handleImage} />
        </label>
        {image && <img src={image} alt="aperçu" style={{ width: 80, marginTop: 6 }} />}

        <div className="row" style={{ marginTop: 14 }}>
          <button type="submit" className="primary" style={{ flex: 1 }}>Enregistrer</button>
          <button type="button" onClick={onClose} style={{ flex: 1 }}>Annuler</button>
        </div>
      </form>
    </div>
  );
}
