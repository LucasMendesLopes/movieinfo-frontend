import * as s from "./styled";
import { Button } from "../../components/Button";
import { CtaIconPlay } from "../../assets";
import { getTrendingList, getMovieTrailer } from "../../services/api";
import { LoopCircleLoading } from "react-loadingg";
import { MovieRow } from "../../components/MovieRow";
import { ModalVideo } from "../../components/ModalVideo";
import { Navbar } from "../../components/Navbar";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [active, setActive] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [openModalVideo, setOpenModalVideo] = useState(false);
  const [randomMovie, setRandomMovie] = useState();
  const [videoId, setVideoId] = useState();

  const [navbarColor, setNavbarColor] = useState(false);

  useEffect(() => {
    function loadRandomMovie() {
      try {
        setIsLoading(true);

        getTrendingList()
          .then((resp) => {
            let randomMovieIndex = Math.floor(
              Math.random() * resp.results.length
            );

            if (
              resp.results[randomMovieIndex].backdrop_path &&
              resp.results[randomMovieIndex].overview
            ) {
              setRandomMovie(resp.results[randomMovieIndex]);
            } else {
              randomMovieIndex++;
              setRandomMovie(resp.results[randomMovieIndex]);
            }
          })
          .catch((erro) => console.log("erro :>> ", erro));
      } catch (erro) {
        console.log("erro :>> ", erro);
      } finally {
        setIsLoading(false);
      }
    }

    loadRandomMovie();
  }, []);

  async function handleMovieTrailer() {
    await getMovieTrailer(randomMovie.id)
      .then((resp) => {
        setVideoId(resp.videos.results[0].key);

        if (resp.videos.results[0].key) {
          setOpenModalVideo(true);
        } else setOpenModalVideo(false);
      })
      .catch((erro) => {
        console.log("erro :>> ", erro);
        toast.error("Erro ao exibir trailer");
      });
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      setNavbarColor(true);
    } else setNavbarColor(false);
  });

  if (isLoading || !randomMovie) {
    return <LoopCircleLoading color={"#7010d2"} size={"large"} speed={1} />;
  } else
    return (
      <>
        <Navbar navbarColor={navbarColor} />

        <s.Banner
          url={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
        >
          <s.MovieInfos>
            <h1>{randomMovie.title || randomMovie.name}</h1>
            <s.MarginTop />

            <p>
              {String(
                randomMovie.first_air_date || randomMovie.release_date
              ).substring(0, 4)}
            </p>

            <s.MarginTop />
            <p>
              {String(randomMovie.overview).length <= 200
                ? randomMovie.overview
                : `${randomMovie.overview.substring(0, 200)}...`}
            </p>

            <s.CtaContainer active={active}>
              <s.CtaPlay>
                <img
                  onClick={() => handleMovieTrailer()}
                  onMouseOver={() => setActive(true)}
                  onMouseOut={() => setActive(false)}
                  src={CtaIconPlay}
                  alt=""
                />
              </s.CtaPlay>

              <Button
                text={"SAIBA MAIS"}
                onClick={() => navigate(`/movie/${randomMovie.id}`)}
              />

              {/* <Button text={"Login"} onClick={() => navigate(`login`)} /> */}
            </s.CtaContainer>
          </s.MovieInfos>

          {openModalVideo && (
            <ModalVideo
              videoId={videoId}
              openModalVideo={openModalVideo}
              setOpenModalVideo={setOpenModalVideo}
            />
          )}

          <Toaster position="bottom-right" reverseOrder={false} />
        </s.Banner>

        <s.ListContainer>
          <MovieRow title={"Lançamentos"} />

          <MovieRow title={"Ação"} genre={"action"} />

          <MovieRow title={"Aventura"} genre={"adventure"} />

          <MovieRow title={"Comédia"} genre={"comedy"} />

          <MovieRow title={"Drama"} genre={"drama"} />

          <MovieRow title={"Terror"} genre={"horror"} />
        </s.ListContainer>
      </>
    );
}
