import { Route, Routes } from "react-router"
import CreateSneaker from "./components/views/CreateSneaker";
import Home from './components/views/Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new/sneaker" element={<CreateSneaker/>} />

      </Routes>
    </div>
  );
}

export default App;
