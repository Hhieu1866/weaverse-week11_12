// import { useRecentlyViewedStore } from "@/stores/recentlyViewed";
// import { Link } from "react-router-dom";
// import { Separator } from "@/components/ui/separator";

// export default function RecentlyViewed() {
//   const { items } = useRecentlyViewedStore();

//   if (items.length === 0) return null;

//   return (
//     <section className="bg-second py-16">
//       <div className="container mx-auto px-20">
//         <h2 className="mb-8 font-custom text-4xl font-bold">Recently Viewed</h2>
//         <Separator className="mb-8 bg-black" />

//         <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
//           {items.map((product) => (
//             <Link
//               key={product.id}
//               to={`/products/${product.id}`}
//               className="group block"
//             >
//               <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="h-full w-full object-cover object-center transition-opacity group-hover:opacity-75"
//                 />
//               </div>
//               <h3 className="mt-2 line-clamp-2 text-sm font-medium text-gray-900">
//                 {product.name}
//               </h3>
//               <p className="mt-1 text-sm font-medium text-gray-900">
//                 {product.price}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
