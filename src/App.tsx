import { Route, Routes } from "react-router"
import CreateSneaker from "./components/views/CreateSneaker";
import Home from './components/views/Home';
import Sneaker from './components/views/Sneaker';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new/sneaker" element={<CreateSneaker/>} />
        <Route path="/sneaker/:id" element={<Sneaker/>} />
      </Routes>
    </div>
  );
}

export default App;
