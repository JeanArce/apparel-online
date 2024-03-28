// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Checkout from "./routes/checkout/checkout.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
