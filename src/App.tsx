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
        <Route path="/men" element={<Men option="m"/>} />
        <Route path="/women" element={<Men option="w"/>} />

      </Routes>
    </div>
  );
}

export default App;
