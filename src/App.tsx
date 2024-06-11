import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Container } from "react-bootstrap";
import "./assets/scss/App.scss";
import NowPlayingPage from "./pages/NowPlayingPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div id="App">
      <Navigation />
      <Container className="py-2">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/now-playing" element={<NowPlayingPage />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
