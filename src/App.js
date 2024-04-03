import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home"
import Category from "./pages/Category"
import Product from "./pages/Product"
import NotFound from "./pages/NotFound"
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className=" min-h-screen w-screen">
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories/:category" element={<Category />} />
            <Route path="/product" element={<Product />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
