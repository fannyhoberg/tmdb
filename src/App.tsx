import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./assets/scss/App.scss";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useContext } from "react";

import HomePage from "./pages/HomePage";
import NowPlayingPage from "./pages/NowPlayingPage";
import TrendingPage from "./pages/TrendingPage";
import TopRatedPage from "./pages/TopRatedPage";
import NotfoundPage from "./pages/NotfoundPage";
import GenrePage from "./pages/GenrePage";
import OverviewGenresPage from "./pages/OverviewGenresPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import PersonDetailPage from "./pages/PersonDetailPage";

import LoadingSpinner from "./components/LoadingSpinner";
import { ThemeContext } from "./contexts/ThemeContextProvider";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Can't use ThemeContext");
  }

  const { darkMode } = themeContext;

  return (
    <div id="App" className={!darkMode ? "bg-white text-dark" : ""}>
      <Navigation />

      <Container className="py-2">
        <LoadingSpinner />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/now-playing" element={<NowPlayingPage />}></Route>
          <Route path="/top-rated" element={<TopRatedPage />}></Route>
          <Route path="/trending" element={<TrendingPage />}></Route>
          <Route path="/genres" element={<OverviewGenresPage />}></Route>

          <Route path="/movie/:id" element={<MovieDetailPage />}></Route>
          <Route path="/person/:id" element={<PersonDetailPage />}></Route>
          <Route path="/genre/:id" element={<GenrePage />}></Route>

          <Route path="*" element={<NotfoundPage />}></Route>
        </Routes>
      </Container>
      <Footer />
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
