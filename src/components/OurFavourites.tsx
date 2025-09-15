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

    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 0;

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

  return (
    <div className="bg-main">
      <div className="container mx-auto px-4 py-16 md:px-20 md:py-32">
        {/* Header */}
        <div className="flex items-center justify-between">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-custom text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            Our favourites.
          </motion.h1>
          <FancyButton
            className="border border-black bg-transparent"
            padding="px-3 py-1"
          >
            SHOP NOW
          </FancyButton>
        </div>

        {/* Card list */}
        <motion.div
          className="mt-8 md:mt-14"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            ref={scrollerRef}
            className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-2 md:gap-8"
          >
            {favourites.map((item) => (
              <Link
                to={`/products/${item.id}`}
                key={item.id}
                className="w-[85%] shrink-0 snap-start text-center sm:w-[70%] md:w-auto md:basis-[calc((100%-4rem)/3)]"
              >
                <img src={item.img} alt={item.alt} className="mx-auto" />
                <div className="mt-4 flex flex-col gap-2 p-2 sm:p-4">
                  <p className="font-custom text-base font-bold sm:text-lg">
                    {item.name}
                  </p>
                  <span className="text-xs leading-relaxed sm:text-sm">
                    {item.desc}
                  </span>
                  <p className="text-sm font-semibold sm:text-base">
                    {item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Navigation buttons (desktop only) */}
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

export default OurFavourites;
