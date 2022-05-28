import Home from './views/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
              <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
