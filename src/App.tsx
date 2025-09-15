import {
  BrowserRouter,
  Routes,
  Route,
  // ScrollRestoration,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import CoffeeCollection from "./pages/CoffeeCollection";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

import { Toaster } from "sonner";

export default function App() {
  return (
    <BrowserRouter>
      {/* <ScrollRestoration /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<Products />} />
          <Route path="collections/coffee" element={<CoffeeCollection />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
