import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home"
import Category from "./pages/Category"
import Product from "./pages/Product"
import NotFound from "./pages/NotFound"
import { Routes, Route} from "react-router-dom"
import {data} from "./data"


function App() {
    const categories = data.products[0]
  return (
    <div className="">
        <Navbar />

        <Routes>
            <Route path="/" element={<Home categories={categories} />} />
            <Route path="/categories/:category" element={<Category categories={categories} />} />
            <Route path="/product/:productId" element={<Product categories={categories} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
