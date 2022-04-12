import { getMovieTrailer } from "../../services/api";
import { LoopCircleLoading } from "react-loadingg";
import { useEffect, useState } from "react";
import * as s from "./styled.js";

export default function Movie() {
  const idFilme = "634649";
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadMovie() {
      try {
        setIsLoading(true);

        await getMovieTrailer(idFilme)
          .then((resp) => {
            setMovie(resp);
          })
          .catch((erro) => {
            console.log("erro :>> ", erro);
          });
      } catch (erro) {
        console.log("erro :>> ", erro);
      } finally {
        setIsLoading(false);
      }
    }

    loadMovie();
  }, []);

  if (isLoading || movie === undefined) {
    return <LoopCircleLoading color={"#7010d2"} size={"large"} speed={1} />;
  } else
    return (
      <s.Container>
        <ul>
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h1>{movie.title}</h1>
          </li>

          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h1>{movie.title}</h1>
          </li>

          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h1>{movie.title}</h1>
          </li>

          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h1>{movie.title}</h1>
          </li>

          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h1>{movie.title}</h1>
          </li>

          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h1>{movie.title}</h1>
          </li>

          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h1>{movie.title}</h1>
          </li>

          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h1>{movie.title}</h1>
          </li>

          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h1>{movie.title}</h1>
          </li>

          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h1>{movie.title}</h1>
          </li>

          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h1>{movie.title}</h1>
          </li>

          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h1>{movie.title}</h1>
          </li>

          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h1>{movie.title}</h1>
          </li>
        </ul>
      </s.Container>
    );
}
