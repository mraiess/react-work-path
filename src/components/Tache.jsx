function Tache({ tache, onBasculer, onSupprimer }) {
  const styleBarrage = tache.terminee
    ? { textDecoration: 'line-through' }
    : {};

  return (
    <li>
      <input
        type="checkbox"
        checked={tache.terminee}
        onChange={() => onBasculer(tache.id)}
      />
      <span style={styleBarrage}> {tache.texte}</span>{' '}
      <button onClick={() => onSupprimer(tache.id)}>Supprimer</button>
    </li>
  );
}

export default Tache;
