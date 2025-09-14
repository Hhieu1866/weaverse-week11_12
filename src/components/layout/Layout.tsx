import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "../Breadcrumb";

export default function Layout() {
  const location = useLocation();
  const showBreadcrumb = /^\/products\/.+/.test(location.pathname);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {showBreadcrumb && <Breadcrumb />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
