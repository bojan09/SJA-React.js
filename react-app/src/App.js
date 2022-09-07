// Router
import { Routes, Route } from "react-router-dom";
// Components
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Users } from "./components/Users";
import { User } from "./components/User";
import { NewUser } from "./components/NewUser";
// Layouts
import { UserLayouts } from "./layouts/UserLayouts";

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/users" element={<UserLayouts />} />
        <Route index element={<Users />} />
        <Route path="/:id" element={<User />} />
        <Route path="/new" element={<NewUser />} />
      </Routes>
    </div>
  );
};

export default App;
