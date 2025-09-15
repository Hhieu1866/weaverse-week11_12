import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRecentlyViewedStore } from "@/stores/recentlyViewed";
import { Link } from "react-router-dom";

const RecentlyViewed = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const { items: recentlyViewedItems } = useRecentlyViewedStore();

  const scroll = (direction: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;

    const scrollAmount = el.firstElementChild?.clientWidth || 0;

    if (direction === "next") {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      if (el.scrollLeft === 0) {
        el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
      } else {
        el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  if (recentlyViewedItems.length === 0) {
    return null;
  }

  return (
    <div className="bg-main">
      <div className="container mx-auto px-20 py-32">
        <div className="flex items-center justify-between">
          <h1 className="font-custom text-6xl font-bold">
            Recently Viewed
          </h1>
        </div>

        <div className="mt-14 overflow-hidden">
          <div
            ref={scrollerRef}
            className="no-scrollbar flex gap-8 overflow-x-auto pb-2 transition-transform duration-300"
            style={{
              scrollSnapType: "x mandatory",
            }}
          >
            {recentlyViewedItems.map((item) => (
              <Link
                to={`/products/${item.id}`}
                key={item.id}
                className="flex-shrink-0 text-center"
                style={{
                  width: "calc((100% - 4rem) / 3)",
                  scrollSnapAlign: "start",
                }}
              >
                <img src={item.img} alt={item.name} />
                <div className="mt-4 flex flex-col gap-2 p-4">
                  <p className="font-custom text-lg font-bold">{item.name}</p>
                  <p className="font-semibold">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => scroll("prev")}
            className="rounded-md bg-black p-2 transition hover:bg-black/80"
            aria-label="Previous"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            type="button"
            onClick={() => scroll("next")}
            className="rounded-md bg-black p-2 transition hover:bg-black/80"
            aria-label="Next"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;