import { useState } from 'react';

function FavoriteMovies() {
  const [movieName, setMovieName] = useState('');

  const [movies, setMovies] = useState([
    'Inception',
    'Interstellar',
    'The Dark Knight',
  ]);

  const ajouterFilm = (e) => {
    e.preventDefault();
    if (movieName.trim() === '') return;

    setMovies([...movies, movieName.trim()]);

    setMovieName('');
  };

  const supprimerFilm = (film) => {
    setMovies(movies.filter((m) => m !== film));
  };

  return (
    <div >
      <h3>Mes films préférés</h3>

      <form onSubmit={ajouterFilm}>
        <input
          type="text"
          placeholder="Titre du film"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      {movies.length === 0 ? (
        <p>Votre liste de favoris est vide</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie}>
              {movie}{' '}
              <button onClick={() => supprimerFilm(movie)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriteMovies;
