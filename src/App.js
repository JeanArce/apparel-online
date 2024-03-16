// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation sample="hello sample">sample children</Navigation>}>
        <Route index element={<p>Homepage</p>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
