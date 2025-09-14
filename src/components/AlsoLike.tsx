import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FancyButton from "./ui/FancyButton";

const favourites = [
  {
    name: "Pods | Mixed Set",
    description: "A journey across Rituals, Ventures and Horizons",
    price: "From £21.00",
    image: "/Mixed_Pods.webp",
    alt: "Mixed_Pods",
  },
  {
    name: "Kinto Travel Tumbler.",
    description:
      "Double-walled stainless steel vacuum flask, perfect for hot or cold brews (up to 6 hours)",
    price: "From £35.00",
    image: "/KINTOTUMBLER.webp",
    alt: "KINTOTUMBLER",
  },
  {
    name: "WatchHouse x Monoware Mug.",
    description:
      "Enhance your daily coffee ritual with this everyday mug, a ceramic piece conceived with care.",
    price: "From £22.00",
    image: "/MonowareMug.webp",
    alt: "MonowareMug",
  },
  {
    name: "Mizu Matcha.",
    description: "Our matcha designed for usucha tea preparation.",
    price: "£27.00",
    image: "/MizuMiruku.webp",
    alt: "MizuMiruku",
  },
  {
    name: "Miruku Matcha.",
    description: "Our matcha designed for milk​.",
    price: "£55.00",
    image: "/MatchaMiruku.webp",
    alt: "MatchaMiruku",
  },
  {
    name: "WatchHouse Cupping Spoon.",
    description:
      " A humble yet essential piece of equipment for those who appreciate the finer details. ",
    price: "£12.00",
    image: "/WHCUPPINGSPOON.webp",
    alt: "WHCUPPINGSPOON",
  },
  {
    name: "1829 Espresso 1kg Coffee Beans",
    description: "More of our bestselling coffee with a saving for you.",
    price: "£60.00",
    image: "/Bundle_June_2024.webp",
    alt: "Bundle_June_2024",
  },
];

const AlsoLike = () => {
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
          <h1 className="font-custom text-6xl font-bold">
            You may also like...
          </h1>
          <FancyButton className="border border-black bg-transparent">
            SHOP ALL
          </FancyButton>
        </div>

        <div className="mt-14 overflow-hidden">
          <div
            ref={scrollerRef}
            className="no-scrollbar flex gap-8 overflow-x-auto pb-2 transition-transform duration-300"
            style={{
              scrollSnapType: "x mandatory",
            }}
          >
            {favourites.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-center"
                style={{
                  width: "calc((100% - 4rem) / 3)",
                  scrollSnapAlign: "start",
                }}
              >
                <img src={item.image} alt={item.alt} />
                <div className="mt-4 flex flex-col gap-2 p-4">
                  <p className="font-custom text-lg font-bold">{item.name}</p>
                  <span className="text-sm leading-relaxed">
                    {item.description}
                  </span>
                  <p className="font-semibold">{item.price}</p>
                </div>
              </div>
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

export default AlsoLike;
