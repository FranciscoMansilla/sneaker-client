import { Route, Routes } from "react-router"
import CreateSneaker from "./components/views/CreateSneaker";
import Home from './components/views/Home';
import Sneaker from './components/views/Sneaker';
import Men from './components/views/Men';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new/sneaker" element={<CreateSneaker/>} />
        <Route path="/sneaker/:id" element={<Sneaker/>} />
        <Route path="/men/:page" element={<Men option="men"/>} />
        <Route path="/women/:page" element={<Men option="women"/>} />

      </Routes>
    </div>
  );
}

export default App;
