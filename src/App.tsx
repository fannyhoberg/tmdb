import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Container } from "react-bootstrap";
import "./assets/scss/App.scss";

function App() {
  return (
    <div id="App">
      <Container className="py-2">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
