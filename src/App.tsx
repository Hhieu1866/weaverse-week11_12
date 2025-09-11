import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";

import { Toaster } from "sonner";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
