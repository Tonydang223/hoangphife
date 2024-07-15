import "./App.scss";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Main from "./layout/Main/Main";
import HomePage from "./pages/Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog from "./pages/Blog";
import MainBlog from "./pages/Blog/Main";
import Contact from "./pages/Contact"
import ProductDetail from "./pages/Product/Details"
import Product from "./pages/Product"
import MainProduct from "./pages/Product/Main"
import Intro from "./pages/Intro"
import BlogDetail from "./pages/Blog/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<HomePage />} />
        <Route path="blog" element={<Blog />}>
          <Route index element={<MainBlog />} />
          <Route path="detail/:idBlog" element={<BlogDetail />} />
        </Route>
        <Route path="product" element={<Product />} >
          <Route index element={<MainProduct />} />
          <Route path="detail/:idProduct" element={<ProductDetail />}/>
        </Route>


        <Route path="contact" element={<Contact />} />
        <Route path="intro" element={<Intro />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
