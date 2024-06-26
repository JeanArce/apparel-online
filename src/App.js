// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./routes/layout/layout.component";
import Home from "./routes/home/home.component";
import Checkout from "./routes/checkout/checkout.component";
import Shop from "./routes/shop/shop.component";
import Contact from "./routes/contact/contact.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/checkout/*" element={<Checkout />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="/contact/*" element={<Contact />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
