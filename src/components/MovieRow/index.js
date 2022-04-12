import * as s from "./styled";
import { getTrendingList, getGenreList } from "../../services/api";
import { IconPlay } from "../../assets";
import { LoopCircleLoading } from "react-loadingg";
import React, { useRef, useEffect, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { useNavigate } from "react-router-dom";

export function MovieRow({ title, genre }) {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState();

  const ref = useRef();
  const { events } = useDraggable(ref, {
    decayRate: 0.99,
    safeDisplacement: 11,
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function loadAll() {
      try {
        setIsLoading(true);

        await getTrendingList()
          .then((resp) => {
            setMoviesList(resp.results);
          })
          .catch((erro) => console.log("erro :>> ", erro));

        await getGenreList(genre)
          .then((resp) => {
            setMoviesList(resp.results);
          })
          .catch((erro) => console.log("erro :>> ", erro));
      } catch (erro) {
        console.log("erro :>> ", erro);
      } finally {
        setIsLoading(false);
      }
    }

    loadAll();
  }, []);

  if (isLoading) {
    return <LoopCircleLoading color={"#7010d2"} size={"large"} speed={1} />;
  } else
    return (
      <s.MovieRowContainer>
        <h2>{title}</h2>

        <ul {...events} ref={ref}>
          {moviesList?.map((movie, index) => {
            if (index < 15)
              return (
                <li
                  key={index}
                  url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                >
                  <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />

                  <img className="icon" src={IconPlay} alt="" />
                </li>
              );
          })}
        </ul>
      </s.MovieRowContainer>
    );
}
