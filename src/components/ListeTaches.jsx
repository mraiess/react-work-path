import { useState } from 'react';
import Tache from './Tache';

function ListeTaches() {
  const [taches, setTaches] = useState([
    { id: 5, texte: 'Maîtriser UML', terminee: true },
    { id: 7, texte: 'Réviser JS', terminee: false },
  ]);
  const [nouvelleTache, setNouvelleTache] = useState('');

  const ajouterTache = (e) => {
    e.preventDefault();

    if (nouvelleTache.trim() === '') return;

    const tache = {
      id: Date.now(),
      texte: nouvelleTache.trim(),
      terminee: false,
    };

    setTaches([...taches, tache]);

    setNouvelleTache('');
  };

  const basculerTache = (id) => {
    setTaches(
      taches.map((t) =>
        t.id === id ? { ...t, terminee: !t.terminee } : t
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  const restantes = taches.filter((t) => !t.terminee).length;

  return (
    <div style={{ border: '1px solid #999', borderRadius: '8px', padding: '10px' }}>
      <h3>Gestion de taches</h3>

      <form onSubmit={ajouterTache}>
        <input
          type="text"
          placeholder="Nouvelle tâche..."
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      {taches.length === 0 ? (
        <p>Aucune tache pour le moment</p>
      ) : (
        <ul>
          {taches.map((tache) => (
            <Tache
              key={tache.id}
              tache={tache}
              onBasculer={basculerTache}
              onSupprimer={supprimerTache}
            />
          ))}
        </ul>
      )}

      {taches.length > 0 && (
        <p>
          {restantes} tache(s) restante(s) sur {taches.length}
        </p>
      )}
    </div>
  );
}

export default ListeTaches;
