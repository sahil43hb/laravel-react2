import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import View from "./pages/View";

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/create">
                  Create
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
