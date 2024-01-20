
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import Store from "./components/screens/Store";
import Search from "./components/screens/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
