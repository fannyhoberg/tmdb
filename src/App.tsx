import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Container } from "react-bootstrap";
import "./assets/scss/App.scss";
import NowPlayingPage from "./pages/NowPlayingPage";
import Navigation from "./components/Navigation";
import TopRated from "./pages/TopRated";
import TrendingPage from "./pages/TrendingPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import NotfoundPage from "./pages/NotfoundPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LoadingSpinner from "./components/LoadingSpinner";
import PersonDetailPage from "./pages/PersonDetailPage";
import GenrePage from "./pages/GenrePage";
import OverviewGenresPage from "./pages/OverviewGenresPage";

function App() {
  return (
    <div id="App">
      <Navigation />

      <Container className="py-2">
        <LoadingSpinner />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/now-playing" element={<NowPlayingPage />}></Route>
          <Route path="/top-rated" element={<TopRated />}></Route>
          <Route path="/trending" element={<TrendingPage />}></Route>
          <Route path="/genres" element={<OverviewGenresPage />}></Route>

          <Route path="/movie/:id" element={<MovieDetailPage />}></Route>
          <Route path="/person/:id" element={<PersonDetailPage />}></Route>
          <Route path="/genre/:id" element={<GenrePage />}></Route>

          <Route path="*" element={<NotfoundPage />}></Route>
        </Routes>
      </Container>

      <ReactQueryDevtools />
    </div>
  );
}

export default App;
