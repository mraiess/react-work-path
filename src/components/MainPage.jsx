import { useState } from "react";
import RecipeFilter from "./RecipeFilter";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import Pagination from "./Pagination";
import Aide from "./Aide";

const PER_PAGE = 4;

const initialRecipes = [
  { id: 1, name: "Tacos méditerranéens", category: "Plat", ingredients: ["Tortilla", "Poulet", "Tomate", "Feta"], difficulty: 4, description: "Tacos légers et parfumés.", image: "", createdAt: Date.now() },
  { id: 2, name: "Smoothie mangue", category: "Boisson", ingredients: ["Mangue", "Lait d'amande", "Miel"], difficulty: 1, description: "Boisson fraîche et fruitée.", image: "", createdAt: Date.now() },
];

export default function MainPage() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null); 

  const filtered = recipes.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || r.category === category)
  );


  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const openCreate = () => { setEditing(null); setShowForm(true); };
  const openEdit = (recipe) => { setEditing(recipe); setShowForm(true); };
  const closeForm = () => { setShowForm(false); setEditing(null); };

  const handleSave = (data) => {
    if (editing) {
      setRecipes(recipes.map((r) => (r.id === editing.id ? { ...r, ...data } : r)));
    } else {
      setRecipes([...recipes, { ...data, id: Date.now(), createdAt: Date.now() }]);
    }
    closeForm();
  };

  const handleDuplicate = (recipe) =>
    setRecipes([...recipes, { ...recipe, id: Date.now(), name: recipe.name + " (copie)", createdAt: Date.now() }]);

  const handleDelete = (id) => {
    if (window.confirm("Supprimer cette recette ?")) {
      setRecipes(recipes.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>🍽️ Creative Recipe Builder</h1>
        <div className="toolbar">
          <RecipeFilter
            search={search}
            category={category}
            onSearchChange={(v) => { setSearch(v); setPage(1); }}
            onCategoryChange={(v) => { setCategory(v); setPage(1); }}
          />
          <button className="primary" onClick={openCreate}>+ Créer une nouvelle recette</button>
        </div>
      </div>

      <div className="layout">
        <div className="main">
          <RecipeList
            recipes={visible}
            onEdit={openEdit}
            onDuplicate={handleDuplicate}
            onDelete={handleDelete}
          />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
        </div>
        <Aide />
      </div>

      {showForm && <RecipeForm recipe={editing} onSave={handleSave} onClose={closeForm} />}
    </div>
  );
}
