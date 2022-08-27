import "./movies.css";

const Movies = ({
  movies: { name, genre, year, plot, imdbLink, imageUrl },
}) => {
  return (
    <div className="movies">
      <div className="movies__card">
        <div className="movies__img-container">
          <img src={imageUrl} alt="movie-img" />
        </div>
        <div className="movies__content-container">
          <h2>
            <span>Movie: </span> {name}
          </h2>
          <p>
            <span>Genre: </span> {genre}
          </p>
          <p>
            <span>Year: </span> {year}
          </p>
          <p>
            <span>Plot: </span>
            {plot}
          </p>

          <a href={imdbLink} target="_blank" rel="noreferrer">
            &rArr; IMBD link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movies;
