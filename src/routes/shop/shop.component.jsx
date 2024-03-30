import { Routes, Route } from "react-router-dom";
import ProductDetail from "../product-detail/product-detail.component";
import Home from "../home/home.component";
const Shop = () => {
    
    return (
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path=":id" element={<ProductDetail />}></Route>
        </Routes>
    )
    
};

export default Shop;
