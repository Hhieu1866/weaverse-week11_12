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

    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 0;

    // include gap between cards
    const styles = getComputedStyle(el);
    const gapStr = (styles.columnGap || styles.gap || "0").toString();
    const gap = parseFloat(gapStr) || 0;

    const amount = cardWidth + gap;

    if (direction === "next") {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: amount, behavior: "smooth" });
      }
    } else {
      if (el.scrollLeft <= 0) {
        el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
      } else {
        el.scrollBy({ left: -amount, behavior: "smooth" });
      }
    }
  };

  if (recentlyViewedItems.length === 0) return null;

  return (
    <div className="bg-main">
      <div className="container mx-auto px-4 py-16 md:px-20 md:py-32">
        <div className="flex items-center justify-between">
          <h1 className="font-custom text-3xl font-bold sm:text-4xl md:text-6xl">
            Recently Viewed
          </h1>
        </div>

        <div className="mt-8 overflow-hidden md:mt-14">
          <div
            ref={scrollerRef}
            className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-2 md:gap-8"
          >
            {recentlyViewedItems.map((item) => (
              <Link
                to={`/products/${item.id}`}
                key={item.id}
                className="w-[85%] shrink-0 snap-start text-center sm:w-[70%] md:w-auto md:basis-[calc((100%-4rem)/3)]"
              >
                <img src={item.img} alt={item.name} className="mx-auto" />
                <div className="mt-4 flex flex-col gap-2 p-2 sm:p-4">
                  <p className="font-custom text-base font-bold sm:text-lg">
                    {item.name}
                  </p>
                  <p className="text-sm font-semibold sm:text-base">
                    {item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Nav buttons: ẩn trên mobile, giữ desktop */}
        <div className="mt-6 hidden items-center justify-center gap-2 md:mt-10 md:flex">
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
