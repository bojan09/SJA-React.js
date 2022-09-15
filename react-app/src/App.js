// Routes
import { Route, Routes } from "react-router-dom";
// components
import { Nav, Weather, Cities } from "./components/";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/search-cities" element={<Cities />} />
      </Routes>
    </div>
  );
};

export default App;
