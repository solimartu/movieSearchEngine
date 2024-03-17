import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();
  return (
    <div>
      <header>
        <h1>Buscador de películas</h1>
        <form className="form">
          <label>Movie to search</label>
          <input placeholder="Avengers, Star Wars, The Notebook..." />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
