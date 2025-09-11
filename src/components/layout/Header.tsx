import { Link } from "react-router-dom";
import { ShoppingCart, Search, UserRound } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-primary">
      <div className="container mx-auto flex items-center justify-between px-20 py-4">
        <nav className="hidden space-x-6 md:flex">
          <Link to="/products" className="font-semibold">
            Subscribe.
          </Link>
          <Link to="/collections/electronics" className="font-semibold">
            Coffee.
          </Link>
          <Link to="/blog" className="font-semibold">
            Equipment.
          </Link>
          <Link to="/about" className="font-semibold">
            Visit us.
          </Link>
          <Link to="/about" className="font-semibold">
            Info.
          </Link>
        </nav>

        <Link to="/" className="-ml-80 font-custom text-4xl font-bold">
          Elowen
        </Link>

        <div className="flex items-center space-x-5">
          <button>
            <Link to="/login">
              <UserRound />
            </Link>
          </button>
          <button>
            <Link to="/login">
              <Search />
            </Link>
          </button>
          <button>
            <Link to="/login">
              <ShoppingCart />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}
