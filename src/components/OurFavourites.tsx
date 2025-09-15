import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FancyButton from "./ui/FancyButton";
import { PRODUCTS } from "@/data/products";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const favourites = PRODUCTS.filter((p) => p.isFavourite);

const OurFavourites = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;

    const scrollAmount = el.firstElementChild?.clientWidth || 0;

    if (direction === "next") {
      // Check if we are near the end of the scroll
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        // If at the end, loop back to the start
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Otherwise, scroll by one card width
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      // Check if we are at the beginning
      if (el.scrollLeft === 0) {
        // If at the start, loop to the end
        el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
      } else {
        // Otherwise, scroll back by one card width
        el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-main">
      <div className="container mx-auto px-20 py-32">
        <div className="flex items-center justify-between">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-custom text-6xl font-bold"
          >
            Our favourites.
          </motion.h1>
          <FancyButton className="border border-black bg-transparent">
            SHOP NOW
          </FancyButton>
        </div>

        <motion.div
          className="mt-14 overflow-hidden"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <div
            ref={scrollerRef}
            className="no-scrollbar flex gap-8 overflow-x-auto pb-2 transition-transform duration-300"
            style={{
              scrollSnapType: "x mandatory",
            }}
          >
            {favourites.map((item, index) => (
              <Link
                to={`/products/${item.id}`}
                key={index}
                className="flex-shrink-0 text-center"
                style={{
                  width: "calc((100% - 4rem) / 3)",
                  scrollSnapAlign: "start",
                }}
              >
                <img src={item.img} alt={item.alt} />
                <div className="mt-4 flex flex-col gap-2 p-4">
                  <p className="font-custom text-lg font-bold">{item.name}</p>
                  <span className="text-sm leading-relaxed">{item.desc}</span>
                  <p className="font-semibold">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

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

export default OurFavourites;
