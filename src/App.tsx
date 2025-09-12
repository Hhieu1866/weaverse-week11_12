import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import CoffeeCollection from "./pages/CoffeeCollection";

import { Toaster } from "sonner";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<Products />} />
          <Route path="/collections/coffee" element={<CoffeeCollection />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
