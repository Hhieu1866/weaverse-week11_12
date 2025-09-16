import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";

export default function BreadcrumbNav() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const getBreadcrumbName = (path: string, index: number) => {
    // Handle specific routes
    if (path === "products") return "Products";
    if (path === "collections") return "Collections";
    if (path === "coffee") return "Coffee";
    if (path === "cart") return "Cart";
    if (path === "checkout") return "Checkout";
    if (path === "about") return "About";
    if (path === "blog") return "Blog";
    if (path === "contact") return "Contact";

    // Handle dynamic routes
    if (pathnames[index - 1] === "products" && !isNaN(Number(path))) {
      return "Product Detail";
    }
    if (pathnames[index - 1] === "collections" && path !== "collections") {
      return path.charAt(0).toUpperCase() + path.slice(1);
    }
    if (pathnames[index - 1] === "blog" && path !== "blog") {
      return "Article";
    }
    if (pathnames[index - 1] === "order" && !isNaN(Number(path))) {
      return "Order Confirmation";
    }

    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  if (location.pathname === "/") return null;

  return (
    <div className="bg-main">
      <div className="container mx-auto mt-4 px-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {pathnames.map((path, index) => {
              const isLast = index === pathnames.length - 1;
              const href = "/" + pathnames.slice(0, index + 1).join("/");
              const name = getBreadcrumbName(path, index);

              return (
                <div key={path} className="flex items-center">
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="font-medium">
                        {name}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={href}>{name}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
