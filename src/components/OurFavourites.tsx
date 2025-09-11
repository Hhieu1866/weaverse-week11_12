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
    name: "1829 Espresso",
    description: "Our seasonal espresso for milk.",
    price: "£12.00",
    image: "/1829-espresso.webp",
    alt: "1829 Espresso",
  },
];

const OurFavourites = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;

    // Get container width and calculate card width for 3-column grid
    const containerWidth = el.offsetWidth;
    const gap = 32; // 8 * 4px (gap-8 in Tailwind)
    const cardWidth = (containerWidth - gap * 2) / 3; // 3 cards with 2 gaps

    // Scroll by exactly one card width + gap
    const scrollAmount = cardWidth + gap;

    el.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-primary">
      <div className="container mx-auto px-20 py-32">
        <div className="flex items-center justify-between">
          <h1 className="font-custom text-6xl font-bold">Our favourites.</h1>
          <FancyButton className="border border-black bg-transparent">
            SHOP NOW
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

export default OurFavourites;
