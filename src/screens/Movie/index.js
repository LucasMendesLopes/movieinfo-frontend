import * as s from "./styled";
import { Button } from "../../components/Button";
import { getMovieTrailer } from "../../services/api";
import { LoopCircleLoading } from "react-loadingg";
import { ModalVideo } from "../../components/ModalVideo";
import { Navbar } from "../../components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { VoltarIcon } from "../../assets";

export default function Movie() {
  const { idFilme } = useParams();
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [openModalVideo, setOpenModalVideo] = useState(false);
  const [videoId, setVideoId] = useState();
  const [movieOverview, setMovieOverview] = useState(false);
  const navigate = useNavigate();

  const [navbarColor, setNavbarColor] = useState(false);

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

  function handleMovieOverview() {
    if (!movieOverview) {
      setMovieOverview(true);
    } else {
      setMovieOverview(false);
    }
  }

  async function handleMovieTrailer() {
    await getMovieTrailer(idFilme)
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

  if (isLoading || movie === undefined) {
    return <LoopCircleLoading color={"#7010d2"} size={"large"} speed={1} />;
  } else
    return (
      <>
        <Navbar navbarColor={navbarColor} />

        <s.Container
          url={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <s.VoltarContainer onClick={() => navigate("/")}>
            <img src={VoltarIcon} alt="" />
            <span>VOLTAR</span>
          </s.VoltarContainer>

          <s.MovieContainer>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <s.MovieInfosContainer>
              <h1>{movie.title}</h1>

              <p>
                {" "}
                {String(movie.first_air_date || movie.release_date).substring(
                  0,
                  4
                )}
              </p>

              <p>
                {movieOverview
                  ? movie.overview
                  : String(movie.overview).length <= 200
                  ? movie.overview
                  : `${movie.overview.substring(0, 200)}...`}

                {String(movie.overview).length > 200 && (
                  <button
                    className="button-overview"
                    onClick={() => handleMovieOverview()}
                  >
                    {!movieOverview ? "ver mais" : "ver menos"}
                  </button>
                )}
              </p>

              <ul>
                {movie.genres?.map((movie, index) => (
                  <li key={index}>{movie.name}</li>
                ))}
              </ul>

              <Button
                className="button-trailer"
                text={"VER TRAILER"}
                onClick={() => handleMovieTrailer()}
              />
            </s.MovieInfosContainer>
          </s.MovieContainer>

          {openModalVideo && (
            <ModalVideo
              videoId={videoId}
              openModalVideo={openModalVideo}
              setOpenModalVideo={setOpenModalVideo}
            />
          )}

          <Toaster position="bottom-right" reverseOrder={false} />
        </s.Container>
      </>
    );
}
